import React, {useState, useEffect} from 'react';
import {Collapse} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';
import {firestore} from '../lib/firebase';
import Alert from '@mui/material/Alert';
import {updateDoc} from 'firebase/firestore';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from '@mui/material';
const Letter = (props) => {
  const {
    writer,
    context,
    origin,
    deleteAlert,
    setDeleteAlert,
    updateAlert,
    setUpdateAlert,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordEdit, setPasswordEdit] = useState('');
  const [modifyContext, setModifyContext] = useState(origin);
  const [errorPW, setErrorPW] = useState(true);

  const Initwriter = writer;

  const toggleCollapse = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleContextChange = (event) => {
    setModifyContext(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordEditChange = (event) => {
    setPasswordEdit(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassword('');
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setPasswordEdit('');
    setModifyContext(origin);
  };

  const handleDeleteSubmit = async () => {
    try {
      const docRef = firestore.collection('letter').doc(writer);
      const documentSnapshot = await docRef.get();
      if (documentSnapshot.exists) {
        const documentData = documentSnapshot.data();
        const firbasePW = documentData.pw;
        if (firbasePW === password) {
          handleClose();
          await docRef.delete();
          setDeleteAlert(true);
          setTimeout(() => {
            setDeleteAlert(false);
          }, 3000);
          console.log('Document deleted successfully!');
        } else {
          setErrorPW(false);
          setTimeout(() => {
            setErrorPW(true);
          }, 1000);
          console.log('Password does not match.');
        }
      } else {
        setErrorPW(false);
        setTimeout(() => {
          setErrorPW(true);
        }, 1000);
        console.log('No such document!');
      }
    } catch (error) {
      setErrorPW(false);
      setTimeout(() => {
        setErrorPW(true);
      }, 1000);
      console.error('Error fetching document:', error);
    }
  };

  const handleUpdateSubmit = async () => {
    try {
      const docRef = firestore.collection('letter').doc(writer);
      const documentSnapshot = await docRef.get();
      if (documentSnapshot.exists) {
        const documentData = documentSnapshot.data();
        const firbasePW = documentData.pw;
        if (firbasePW === passwordEdit) {
          handleCloseEdit();
          await updateDoc(docRef, {
            context: modifyContext,
          });
          setUpdateAlert(true);
          setTimeout(() => {
            setUpdateAlert(false);
          }, 3000);
          console.log('Document Update successfully!');
        } else {
          setErrorPW(false);
          setTimeout(() => {
            setErrorPW(true);
          }, 1000);
          console.log('Password does not match.');
        }
      } else {
        setErrorPW(false);
        setTimeout(() => {
          setErrorPW(true);
        }, 1000);
        console.log('No such document!');
      }
    } catch (error) {
      setErrorPW(false);
      setTimeout(() => {
        setErrorPW(true);
      }, 1000);
      console.error('Error fetching document:', error);
    }
  };

  const isSubmitDisabled = !password;
  const isSubmitDisabledEdit = !passwordEdit | !modifyContext;
  useEffect(() => {}, []);
  return (
    <>
      {deleteAlert && (
        <Alert severity='success' className='Letter-Alert'>
          手紙の削除 / 편지 삭제 / Letter Deleted
        </Alert>
      )}
      {updateAlert && (
        <Alert severity='success' className='Letter-Alert'>
          手紙の修正 / 편지 수정 / Letter Update
        </Alert>
      )}
      <button className='Toggle-Button English-Font' onClick={toggleCollapse}>
        <div>Writer : {writer}</div>
      </button>
      <Collapse in={isExpanded} className='Collapse-Box'>
        <button
          className='Toggle-Update-Button'
          style={{
            backgroundColor: '#4940ef',
            borderColor: '#4940ef',
            marginTop: '2%',
            color: 'white',
          }}
          onClick={handleClickOpenEdit}
        >
          <CreateIcon style={{fontSize: '50px'}} />
        </button>
        <Dialog
          open={openEdit}
          onClose={handleCloseEdit}
          sx={{
            '& .MuiDialog-container': {
              '& .MuiPaper-root': {
                width: '90%',
                maxWidth: '90%', // Set your width here
              },
            },
          }}
        >
          <DialogTitle style={{backgroundColor: '#ECC130'}}>
            <span className='Japanese-Font' style={{fontSize: '45px'}}>
              手紙 /{' '}
            </span>
            <span className='Korean-Font' style={{fontSize: '45px'}}>
              편지
            </span>
            <span className='English-Font' style={{fontSize: '45px'}}>
              {' '}
              / Letter
            </span>
          </DialogTitle>
          <DialogContent className='Writing-Form'>
            <Typography style={{marginBottom: '3%'}}>
              <span className='English-Font' style={{fontSize: '45px'}}>
                Writer: {Initwriter}
              </span>
            </Typography>
            <Typography>
              <span className='English-Font' style={{fontSize: '45px'}}>
                Password:
              </span>
            </Typography>
            <input
              type='password'
              placeholder='暗号/암호/Password'
              value={passwordEdit}
              onChange={handlePasswordEditChange}
              className='Writing-Input'
            />
            <TextField
              label='手紙 / 편지 / Letter'
              inputProps={{style: {fontSize: '30px'}}}
              multiline
              value={modifyContext}
              defaultValue={modifyContext}
              rows={4}
              fullWidth
              onChange={handleContextChange}
            />
          </DialogContent>
          <DialogActions style={{backgroundColor: '#ECC130'}}>
            <Button
              onClick={handleCloseEdit}
              variant='outlined'
              color='error'
              className='Letter-Pass'
            >
              Cancel
            </Button>
            <Button
              onClick={handleUpdateSubmit}
              variant='contained'
              color='primary'
              width='100%'
              disabled={isSubmitDisabledEdit}
              className={errorPW ? 'Letter-Pass' : 'Letter-Error'}
              style={errorPW ? {} : {backgroundColor: 'red'}}
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
        <button
          className='Toggle-Update-Button'
          style={{
            backgroundColor: '#EF4940',
            borderColor: '#EF4940',
            marginTop: '2%',
            color: 'white',
          }}
          onClick={handleClickOpen}
        >
          <DeleteForeverIcon style={{fontSize: '50px'}} />
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            '& .MuiDialog-container': {
              '& .MuiPaper-root': {
                width: '70%',
                maxWidth: '70%', // Set your width here
              },
            },
          }}
        >
          <DialogTitle style={{backgroundColor: '#ECC130'}}>
            <span className='Japanese-Font' style={{fontSize: '45px'}}>
              削除 /
            </span>
            <span className='Korean-Font' style={{fontSize: '45px'}}>
              삭제
            </span>
            <span className='English-Font' style={{fontSize: '45px'}}>
              {' '}
              / Delete
            </span>
          </DialogTitle>
          <DialogContent className='Writing-Form'>
            <Typography style={{marginBottom: '10%'}}>
              <span className='English-Font' style={{fontSize: '45px'}}>
                Password:
              </span>
            </Typography>
            <input
              type='password'
              placeholder='暗号/암호/Password'
              value={password}
              onChange={handlePasswordChange}
              className='Writing-Input'
            />
          </DialogContent>
          <DialogActions style={{backgroundColor: '#ECC130'}}>
            <Button
              onClick={handleClose}
              variant='outlined'
              color='error'
              className='Letter-Pass'
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteSubmit}
              variant='contained'
              color='primary'
              disabled={isSubmitDisabled}
              className={errorPW ? 'Letter-Pass' : 'Letter-Error'}
              style={errorPW ? {} : {backgroundColor: 'red'}}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <div
          className='Japanese-Font'
          style={{marginLeft: '3%', fontSize: '250%'}}
        >
          Japanese: {context.ja}
        </div>
        <div
          className='Korean-Font'
          style={{marginLeft: '3%', marginTop: '1%', fontSize: '250%'}}
        >
          Korean: {context.ko}
        </div>
        <div
          className='English-Font'
          style={{
            marginLeft: '3%',
            marginTop: '1%',
            marginBottom: '2%',
            fontSize: '250%',
          }}
        >
          English: {context.en}
        </div>
      </Collapse>
    </>
  );
};

export default Letter;
