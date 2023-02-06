import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios'
import { getBackendUrl } from '../getBackendUrl';

// eslint-disable-next-line
import {MenuItem, Select} from "@mui/material";


/* eslint-disable no-shadow */

export const Popup = ({
  id,
  open,
  setOpen,
}) => 
{

  const [measureValue, setMeasureValue] = useState('');
  const [occuredOnValue, setOccuredOnValue] = useState();

  const onSubmit = () => {

    const rowId = String(id);
    const body = {measure: measureValue, occuredOn: occuredOnValue, ownerId: rowId}

    axios
      .post(getBackendUrl()+"/tests/" + rowId + "/measures/", body)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => alert(`Error: ${error.message}`)) 
    
    setOpen(false)
  }

  // Select: https://mui.com/material-ui/react-select/#main-content
  // Button: https://mui.com/material-ui/react-button/#main-content
  // Icons: https://mui.com/material-ui/icons/#main-content
  return (
  <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Confirming a case as positive</DialogTitle>
    <DialogContent>
      <Grid container sx={{ flexGrow: 1 }} columnSpacing={10} spacing={10}>
        <Grid item columnSpacing={10} spacing={10}>
          <FormGroup style={{gap: '20px', marginTop: '10px'}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Measure</InputLabel>
            <Select
              margin="dense"
              name="measure"
              label="Measure"
              labelId="demo-simple-select-label"
              value={measureValue}
              onChange={(event) => setMeasureValue(event.target.value)}
            >
               <MenuItem value="Isolation" >Isolation</MenuItem>
               <MenuItem value="Forced_meds" >Forced meds</MenuItem>
               <MenuItem value="Fixations" >Fixations</MenuItem>
               <MenuItem value="Other" >Other</MenuItem>
            </Select>
            </FormControl>
            <Grid item columnSpacing={3} spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Date"
                value={occuredOnValue}
                onChange={(date) => setOccuredOnValue(date)}
                renderInput={(params) => <TextField {...params} />}
             />
            </LocalizationProvider>
            </Grid>
          </FormGroup>
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)} color="secondary">
        Cancel
      </Button>
      <Button onClick={onSubmit} color="primary">
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
)};