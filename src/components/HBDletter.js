import React, {useState, useEffect} from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {firestore} from '../lib/firebase';

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

  const [letters, setLetters] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const RecognizeLan = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_PAPAGO_LAN_URL,
        `{query:${context}}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Naver-Client-Id': process.env.REACT_APP_PAPAGO_ID,
            'X-Naver-Client-Secret': process.env.EACT_APP_PAPAGO_SECRET,
          },
        }
      );
      return res.langCode;
    } catch (e) {
      console.error('Error recognizing language:', e);
    }
  };

  const Dotranslate = async (lan) => {
    try {
      if (lan === 'ko') {
        const trnja = await axios.post(
          process.env.REACT_APP_PAPAGO_LAN_URL,
          `{source:${lan},target:'ja',text:${context}}`,
          {
            headers: {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Naver-Client-Id': process.env.REACT_APP_PAPAGO_ID,
              'X-Naver-Client-Secret': process.env.EACT_APP_PAPAGO_SECRET,
            },
          }
        );
        const trnen = await axios.post(
          process.env.REACT_APP_PAPAGO_LAN_URL,
          `{source:${lan},target:'en',text:${context}}`,
          {
            headers: {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Naver-Client-Id': process.env.REACT_APP_PAPAGO_ID,
              'X-Naver-Client-Secret': process.env.EACT_APP_PAPAGO_SECRET,
            },
          }
        );
        return {
          jp: trnja.message.result.trnaslatedText,
          en: trnen.message.result.trnaslatedText,
        };
      } else if (lan === 'en') {
        const trnja = await axios.post(
          process.env.REACT_APP_PAPAGO_LAN_URL,
          `{source:${lan},target:'ja',text:${context}}`,
          {
            headers: {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Naver-Client-Id': process.env.REACT_APP_PAPAGO_ID,
              'X-Naver-Client-Secret': process.env.EACT_APP_PAPAGO_SECRET,
            },
          }
        );
        const trnko = await axios.post(
          process.env.REACT_APP_PAPAGO_LAN_URL,
          `{source:${lan},target:'ko',text:${context}}`,
          {
            headers: {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Naver-Client-Id': process.env.REACT_APP_PAPAGO_ID,
              'X-Naver-Client-Secret': process.env.EACT_APP_PAPAGO_SECRET,
            },
          }
        );
        return {
          jp: trnja.message.result.trnaslatedText,
          ko: trnko.message.result.trnaslatedText,
        };
      } else if (lan === 'ja') {
        const trnko = await axios.post(
          process.env.REACT_APP_PAPAGO_LAN_URL,
          `{source:${lan},target:'ko',text:${context}}`,
          {
            headers: {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Naver-Client-Id': process.env.REACT_APP_PAPAGO_ID,
              'X-Naver-Client-Secret': process.env.EACT_APP_PAPAGO_SECRET,
            },
          }
        );
        const trnen = await axios.post(
          process.env.REACT_APP_PAPAGO_LAN_URL,
          `{source:${lan},target:'en',text:${context}}`,
          {
            headers: {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Naver-Client-Id': process.env.REACT_APP_PAPAGO_ID,
              'X-Naver-Client-Secret': process.env.EACT_APP_PAPAGO_SECRET,
            },
          }
        );
        return {
          ko: trnko.message.result.trnaslatedText,
          en: trnen.message.result.trnaslatedText,
        };
      }
    } catch (e) {}
  };

  const handleSubmit = async () => {
    try {
      const collectionRef = firestore.collection('letter');
      const recognize_language = await RecognizeLan();
      const translated = await Dotranslate(recognize_language);
      const context = {};
      if (recognize_language === 'en') {
        context['ja'] = translated.ja;
        context['ko'] = translated.ko;
        context['en'] = context;
        context['lan'] = recognize_language;
      } else if (recognize_language === 'ko') {
        context['ja'] = translated.ja;
        context['ko'] = context;
        context['en'] = translated.en;
        context['lan'] = recognize_language;
      } else if (recognize_language === 'ja') {
        context['ja'] = context;
        context['ko'] = translated.ko;
        context['en'] = translated.en;
        context['lan'] = recognize_language;
      }
      context['pw'] = password;
      collectionRef
        .doc(writer)
        .set(context)
        .then(() => {
          console.log('Document written with ID: ', writer);
        });
    } catch (e) {
      console.error('Error adding data:', e);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setPassword('');
    setContext('');
  };

  const getCollectionData = async () => {
    try {
      const collectionRef = firestore.collection('letter');
      const snapshot = await collectionRef.get();
      const letterData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const LetterList = letterData.map((data, idx) => {
        const context = {
          ja: data['ja'],
          ko: data['ko'],
          en: data['en'],
        };
        return (
          <Letter writer={data.id} context={context} lan={data.lan} key={idx} />
        );
      });
      setLetters(LetterList);
    } catch (error) {
      console.error('Error getting collection data:', error);
    }
  };

  useEffect(() => {
    getCollectionData();
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
  }, []);
  const isSubmitDisabled = !writer || !password || !context;
  return (
    <div className='Birthday-Writing'>
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
