import React, {useState, useEffect} from 'react';
import CreateIcon from '@mui/icons-material/Create';
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
  const handleWriterChange = (event) => {
    setWriter(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleContextChange = (event) => {
    setContext(event.target.value);
  };
  const contextData = {
    jap: 'こんにちは',
    kor: '안녕',
    eng: 'Hello',
  };
  const [letters, setLetters] = useState([
    <Letter writer={'Hoon'} context={contextData} lan={'Eng'} />,
    <Letter writer={'Young'} context={contextData} lan={'Kor'} />,
    <Letter writer={'YU'} context={contextData} lan={'Jap'} />,
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // get data using axios
    // writer, context, start_language -> cuz translation
    /*
    const datas = [];
    axios to get response

    const LetterList = datas.map((data)=>{
        return(
            <Letter /> -> property
        )   
    })
    setLetters(LetterList);

     */
  });
  const isSubmitDisabled = !writer || !password || !context;
  return (
    <div className='Birthday-Writing'>
      <div className='Post-write'>
        <img src='images/post.png' alt='post' width='15%' />
        <p className='Japanese-Font'>手紙を書く / </p>
        <p className='Korean-Font'>편지쓰기</p>
        <p className='English-Font'> / Writing Letter</p>
        <button className='Letter-Button' onClick={handleClickOpen}>
          <CreateIcon />
        </button>
        <Dialog open={open} onClose={handleClose}>
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
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={handleClose}
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
