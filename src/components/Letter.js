import React, {useState} from 'react';
import {Collapse} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';
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
  const {writer, context, lan} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordEdit, setPasswordEdit] = useState('');
  const [modifyContext, setModifyContext] = useState(() => {
    return context[lan];
  });

  const Initwriter = writer;

  const Hash = (data) => {
    // return createHash('sha256')
    //   .update(String(data) + process.env.HASH)
    //   .digest('hex');
  };

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
    setModifyContext(context[lan]);
  };

  const handleDeleteSubmit = async () => {
    // const res = await axios.delete('/api/delete_letter', {
    //   data: {
    //     password: Hash(passwordEdit),
    //   },
    // });
    // if (res.status === 200) {
    //   //pop up delete complete
    //   handleClose();
    // } else {
    //   // shake and pop up password doesn't match
    // }
  };

  const isSubmitDisabled = !password;
  const isSubmitDisabledEdit = !passwordEdit | !modifyContext;
  return (
    <>
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
          <CreateIcon />
        </button>
        <Dialog
          open={openEdit}
          onClose={handleCloseEdit}
          sx={{
            '& .MuiDialog-container': {
              '& .MuiPaper-root': {
                width: '60%',
                maxWidth: '60%', // Set your width here
              },
            },
          }}
        >
          <DialogTitle style={{backgroundColor: '#ECC130'}}>
            <span className='Japanese-Font'>手紙 / </span>
            <span className='Korean-Font'>편지</span>
            <span className='English-Font'> / Letter</span>
          </DialogTitle>
          <DialogContent className='Writing-Form'>
            <Typography style={{marginBottom: '14%'}}>
              <span className='English-Font'>Writer: {Initwriter}</span>
            </Typography>
            <Typography>
              <span className='English-Font'>Password:</span>
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
              multiline
              value={modifyContext}
              defaultValue={modifyContext}
              rows={4}
              fullWidth
              onChange={handleContextChange}
            />
          </DialogContent>
          <DialogActions style={{backgroundColor: '#ECC130'}}>
            <Button onClick={handleCloseEdit} variant='outlined' color='error'>
              Cancel
            </Button>
            <Button
              onClick={handleCloseEdit}
              variant='contained'
              color='primary'
              disabled={isSubmitDisabledEdit}
            >
              Submit
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
          <DeleteForeverIcon />
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            '& .MuiDialog-container': {
              '& .MuiPaper-root': {
                width: '60%',
                maxWidth: '60%', // Set your width here
                height: '80%',
              },
            },
          }}
        >
          <DialogTitle style={{backgroundColor: '#ECC130'}}>
            <span className='Japanese-Font'>削除 / </span>
            <span className='Korean-Font'>삭제</span>
            <span className='English-Font'> / Delete</span>
          </DialogTitle>
          <DialogContent className='Writing-Form'>
            <Typography style={{marginBottom: '3%'}}>
              <span className='English-Font'>Password:</span>
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
            <Button onClick={handleClose} variant='outlined' color='error'>
              Cancel
            </Button>
            <Button
              onClick={handleDeleteSubmit}
              variant='contained'
              color='primary'
              disabled={isSubmitDisabled}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <div className='Japanese-Font' style={{marginLeft: '3%'}}>
          Japanese: {context.jp}
        </div>
        <div
          className='Korean-Font'
          style={{marginLeft: '3%', marginTop: '1%'}}
        >
          Korean: {context.kor}
        </div>
        <div
          className='English-Font'
          style={{marginLeft: '3%', marginTop: '1%', marginBottom: '2%'}}
        >
          English: {context.eng}
        </div>
      </Collapse>
    </>
  );
};

export default Letter;
