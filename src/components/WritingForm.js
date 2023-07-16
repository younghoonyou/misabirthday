const WritingForm = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='contained' onClick={handleClickOpen}>
        Open Form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='Writing-Form'>Writing Form</DialogTitle>
        <DialogContent>
          <TextField label='Write somethings' multiline rows={4} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant='contained' color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WritingForm;
