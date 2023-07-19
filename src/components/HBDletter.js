import React, {useState, useEffect} from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Alert from '@mui/material/Alert';
import {firestore} from '../lib/firebase';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from '@mui/material';
import Letter from './Letter';
const HBDletter = () => {
  const [open, setOpen] = useState(false);
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [context, setContext] = useState('');
  const [letters, setLetters] = useState([]);
  const [alertSignal, setAlertSignal] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [updateAlert, setUpdateAlert] = useState(false);
  const handleWriterChange = (event) => {
    setWriter(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleContextChange = (event) => {
    setContext(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const collectionRef = firestore.collection('letter');
      const addData = {};
      addData['pw'] = password;
      addData['context'] = context;
      await collectionRef
        .doc(writer)
        .set(addData)
        .then(() => {
          console.log('Document written with ID: ', writer);
          setAlertSignal(true);
          setTimeout(() => {
            setAlertSignal(false);
          }, 3000);
        });
      handleClose();
    } catch (e) {
      console.error('Error adding data:', e);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setPassword('');
    setContext('');
    setWriter('');
  };

  const getCollectionData = async () => {
    try {
      const collectionRef = firestore.collection('letter');
      const snapshot = await collectionRef.get();
      const letterData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(letterData);
      const LetterList = letterData.map((data, idx) => {
        const Context = {
          ja: data['translated']['ja'],
          ko: data['translated']['ko'],
          en: data['translated']['en'],
        };
        return (
          <Letter
            writer={data.id}
            context={Context}
            origin={data.context}
            deleteAlert={deleteAlert}
            updateAlert={updateAlert}
            setDeleteAlert={setDeleteAlert}
            setUpdateAlert={setUpdateAlert}
            key={idx}
          />
        );
      });
      setLetters(LetterList);
    } catch (error) {
      console.error('Error getting collection data:', error);
    }
  };

  useEffect(() => {
    getCollectionData(); // Get letters
    setAlertSignal(false);
    setOpen(false);
    setPassword('');
    setContext('');
    setWriter('');
    setLetters([]);
    setDeleteAlert(false);
    setAlertSignal(false);
  }, []);

  useEffect(() => {
    getCollectionData(); // Get letters
  }, [alertSignal, deleteAlert, updateAlert]);

  const isSubmitDisabled = !writer || !password || !context;
  return (
    <div className='Birthday-Writing'>
      {alertSignal && (
        <Alert severity='success' className='Letter-Alert'>
          手紙完了 / 편지완료 / Letter Complete
        </Alert>
      )}
      <div className='Post-write'>
        <img src='images/post.png' alt='post' width='15%' />
        <p className='Japanese-Font' style={{fontSize: '30px'}}>
          手紙を書く /
        </p>
        <p className='Korean-Font' style={{fontSize: '30px'}}>
          편지쓰기
        </p>
        <p className='English-Font' style={{fontSize: '30px'}}>
          / Writing Letter
        </p>
        <button className='Letter-Button' onClick={handleClickOpen}>
          <AddCircleIcon style={{fontSize: '50px'}} />
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
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
            <span className='Japanese-Font'>手紙 / </span>
            <span className='Korean-Font'>편지</span>
            <span className='English-Font'> / Letter</span>
          </DialogTitle>
          <DialogContent className='Writing-Form'>
            <Typography>
              <span className='English-Font'>Writer:</span>
            </Typography>
            <input
              type='text'
              placeholder='名前/이름/Writer'
              value={writer}
              onChange={handleWriterChange}
              className='Writing-Input'
            />
            <Typography>
              <span className='English-Font'>Password:</span>
            </Typography>
            <input
              type='password'
              placeholder='暗号/암호/Password'
              value={password}
              onChange={handlePasswordChange}
              className='Writing-Input'
            />
            <TextField
              label='手紙 / 편지 / Letter'
              multiline
              rows={4}
              fullWidth
              onChange={handleContextChange}
            />
          </DialogContent>
          <DialogActions style={{backgroundColor: '#ECC130'}}>
            <Button onClick={handleClose} variant='outlined' color='error'>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant='contained'
              color='primary'
              disabled={isSubmitDisabled}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className='Letter-List'>{letters}</div>
    </div>
  );
};

export default HBDletter;
