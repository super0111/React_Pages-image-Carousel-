import { Box, TextField, Button, Checkbox } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Submit1 = () => {
  let navigate = useNavigate();
  const [ value1, setValue1 ] = useState("");
  const [ value2, setValue2 ] = useState("");
  const [ state1, setState1 ] = useState({ helperText: '', error: false })
  const [ state2, setState2 ] = useState({ helperText: '', error: false })

  const onChange1 = (event) => {
    if (event.target.value.length > 0) {
      setValue1(event.target.value)
      setState1({ helperText: '', error: false });
    } else {
      setState1({ helperText: 'Please Enter Value', error: true });
    }
  }
  const onChange2 = (event) => {
    if (event.target.value.length > 0) {
      setValue2(event.target.value)
      setState2({ helperText: '', error: false });
    } else {
      setState2({ helperText: 'Please Enter Value', error: true });
    }
  }

  const handleSubmit = () => {
    if(state1.error === true || state2.error === true || value1==="" || value2==="") {
      alert("Please enter value")
      return
    }
    navigate("/submit2")
  }

  return (
    <div className="submit1">
      <TextField 
        fullWidth
        placeholder='director kyc'
        className='text_input'
        helperText={state1.helperText}
        onChange={onChange1}
        onFocus={onChange1}
        error={state1.error}
        required
        id="outlined-error-helper-text"
      />
      <TextField 
        fullWidth 
        placeholder='director kyc'
        className='text_input'
        helperText={state2.helperText}
        onChange={onChange2}
        onFocus={onChange2}
        error={state2.error}
        required
        id="outlined-error-helper-text"
      />
      <Checkbox 
        sx={{
          fontSize: 15
        }}
      />
      <span className='text_agree'>I agree to Platform’s 
        <span className='text_red'>Terms of Service</span> and 
        <span className='text_red'> Privacy Policy</span>
      </span>
      <Box 
        display="flex" 
        justifyContent="center"
        sx={{
          marginTop: "10px"
        }}
      >
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: "#FF0000",
            width: 120,
            color: "white",
            fontWeight: 600,
            margin: "auto",
            "&:hover": {
              backgroundColor: '#d33333;'
            },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  )
}

export default Submit1
