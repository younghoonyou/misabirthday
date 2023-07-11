import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import {styled} from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
  height: 10,
  borderRadius: 5,
  width: '50%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#cba637' : '#f5c22e',
  },
}));

export default BorderLinearProgress;
