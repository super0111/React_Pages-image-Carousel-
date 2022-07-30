import { useState } from 'react';
import { Box, TextField, Button, Checkbox, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Submit2 = () => {
  let navigate = useNavigate();

  const [ value1, setValue1 ] = useState("");
  const [ value2, setValue2 ] = useState("");
  const [ value3, setValue3 ] = useState("");
  const [ value4, setValue4 ] = useState("");
  const [ value5, setValue5 ] = useState("");
  const [ value6, setValue6 ] = useState("");
  const [ value7, setValue7 ] = useState("");
  const [ value8, setValue8 ] = useState("");
  const [ state1, setState1 ] = useState({ helperText: '', error: false })
  const [ state2, setState2 ] = useState({ helperText: '', error: false })
  const [ state3, setState3 ] = useState({ helperText: '', error: false })
  const [ state4, setState4 ] = useState({ helperText: '', error: false })
  const [ state5, setState5 ] = useState({ helperText: '', error: false })
  const [ state6, setState6 ] = useState({ helperText: '', error: false })
  const [ state7, setState7 ] = useState({ helperText: '', error: false })
  const [ state8, setState8 ] = useState({ helperText: '', error: false })

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
  const onChange3 = (event) => {
    if (event.target.value.length > 0) {
      setValue3(event.target.value)
      setState3({ helperText: '', error: false });
    } else {
      setState3({ helperText: 'Please Enter Value', error: true });
    }
  }
  const onChange4 = (event) => {
    if (event.target.value.length > 0) {
      setValue4(event.target.value)
      setState4({ helperText: '', error: false });
    } else {
      setState4({ helperText: 'Please Enter Value', error: true });
    }
  }
  const onChange5 = (event) => {
    if (event.target.value.length > 0) {
      setValue5(event.target.value)
      setState5({ helperText: '', error: false });
    } else {
      setState5({ helperText: 'Please Enter Value', error: true });
    }
  }
  const onChange6 = (event) => {
    if (event.target.value.length > 0) {
      setValue6(event.target.value)
      setState6({ helperText: '', error: false });
    } else {
      setState6({ helperText: 'Please Enter Value', error: true });
    }
  }
  const onChange7 = (event) => {
    if (event.target.value.length > 0) {
      setValue7(event.target.value)
      setState7({ helperText: '', error: false });
    } else {
      setState7({ helperText: 'Please Enter Value', error: true });
    }
  }
  const onChange8 = (event) => {
    if (event.target.value.length > 0) {
      setValue8(event.target.value)
      setState8({ helperText: '', error: false });
    } else {
      setState8({ helperText: 'Please Enter Value', error: true });
    }
  }

  const handleSubmit = () => {
    if(state1.error === true || state2.error === true || value1==="" || value2==="") {
      alert("Please enter value")
      return
    }
    navigate("/submit3")
  }


  return (
    <div className="submit2">
      <Box 
        sx={{
          backgroundColor: "white"
        }}
      >
        <div className="header">
          <span>DIRECTOR KYC</span>
        </div>
        <div className="body">
          <div className='body_title'>Director-1</div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField 
                fullWidth 
                placeholder='First name'
                helperText={state1.helperText}
                onChange={onChange1}
                onFocus={onChange1}
                error={state1.error}
                required
                id="outlined-error-helper-text"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField 
                fullWidth 
                placeholder='Middle name'
                helperText={state2.helperText}
                onChange={onChange2}
                onFocus={onChange2}
                error={state2.error}
                required
                id="outlined-error-helper-text"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField 
                fullWidth 
                placeholder='Last name'
                helperText={state3.helperText}
                onChange={onChange3}
                onFocus={onChange3}
                error={state3.error}
                required
                id="outlined-error-helper-text"
              />
            </Grid>
          </Grid>
          <Grid 
            container 
            spacing={2}
            sx={{
              marginTop: "10px"
            }}
          >
            <Grid item xs={12} md={4}>
              <TextField 
                fullWidth 
                placeholder='Enter your Email Id'
                helperText={state4.helperText}
                onChange={onChange4}
                onFocus={onChange4}
                error={state4.error}
                required
                id="outlined-error-helper-text"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField 
                fullWidth 
                placeholder='Enter your Mobile Number'
                helperText={state5.helperText}
                onChange={onChange5}
                onFocus={onChange5}
                error={state5.error}
                required
                id="outlined-error-helper-text"
              />
            </Grid>
          </Grid>
          <Grid 
            container 
            spacing={2}
            sx={{
              marginTop: "10px"
            }}
          >
            <Grid item xs={12} md={4}>
              <TextField 
                fullWidth 
                placeholder='Enter your Adhaar Number'
                helperText={state6.helperText}
                onChange={onChange6}
                onFocus={onChange6}
                error={state6.error}
                required
                id="outlined-error-helper-text"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <label htmlFor="upload-photo">
                <input
                  style={{ display: 'none' }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                />
                <Button
                  component="span"
                  variant="contained"
                  className='upload'
                >
                  Upload Addharr Card
                  <img src='/images/Vector.png' className='upload_img' />
                </Button>
              </label>
            </Grid>
          </Grid>
          <Grid 
            container 
            spacing={2}
            sx={{
              marginTop: "10px"
            }}
          >
            <Grid item xs={12} md={4}>
              <TextField 
                fullWidth 
                placeholder='Enter your Pan Card Number'
                helperText={state7.helperText}
                onChange={onChange7}
                onFocus={onChange7}
                error={state7.error}
                required
                id="outlined-error-helper-text"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <label htmlFor="upload-photo">
                <input
                  style={{ display: 'none' }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                />
                <Button
                  component="span"
                  variant="contained"
                  className='upload'
                >
                  Upload Addharr Card
                  <img src='/images/Vector.png' className='upload_img' />
                </Button>
              </label>
            </Grid>
          </Grid>
          <Box 
            display="flex" 
            justifyContent="end"
            sx={{
              marginTop: "10px"
            }}
          >
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#212738",
                fontSize: "13px",
                width: "100px",
                marginRight: "15px"
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "rgb(45, 44, 44)",
                },
              }}
            >
              Add Director
            </Button>
          </Box>
        </div>
      </Box>

      <Box 
        sx={{
          backgroundColor: "white",
          marginTop: "30px",
          marginBottom: "20px"
        }}
      >
        <div className="header">
          <span>COMPANY KYC</span>
        </div>
        <div className="body2">
          <div className='body_field'>
            <TextField 
              fullWidth 
              placeholder='First name'
              helperText={state8.helperText}
              onChange={onChange8}
              onFocus={onChange8}
              error={state8.error}
              required
              id="outlined-error-helper-text"
            />
            <Grid
              container 
              spacing={2}
              sx={{
                marginTop: "10px",
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Grid item xs={12} md={9}>
                <span>GST Certificate</span>
              </Grid>
              <Grid item xs={12} md={3}>
                <label htmlFor="upload-photo" className='uplaod_field'>
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />
                  <Button
                    component="span"
                    variant="contained"
                    className='upload2'
                  >
                    Upload
                    <img src='/images/Vector.png' className='upload_img' />
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Grid 
              container 
              spacing={2}
              sx={{
                marginTop: "10px",
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Grid item xs={12} md={9}>
                <span>Import - Export Licence Issued By DGFT</span><br />
                <span className='small_text'>Issued By Director General And Foreign Trade</span>
              </Grid>
              <Grid item xs={12} md={3}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />
                  <Button
                    component="span"
                    variant="contained"
                    className='upload2'
                  >
                    Upload
                    <img src='/images/Vector.png' className='upload_img' />
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Grid 
              container 
              spacing={2}
              sx={{
                marginTop: "10px",
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Grid item xs={12} md={9}>
                <span>Certificate Of Incorporation Issued By MCA</span><br />
                <span className='small_text'>By Ministry Of Road Tranport & Highways</span>
              </Grid>
              <Grid item xs={12} md={3}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />
                  <Button
                    component="span"
                    variant="contained"
                    className='upload2'
                  >
                    Upload
                    <img src='/images/Vector.png' className='upload_img' />
                  </Button>
                </label>
              </Grid>
            </Grid>
          </div>
          <Box 
            display="flex" 
            justifyContent="end"
            sx={{
              marginTop: "10px"
            }}
          >
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#212738",
                fontSize: "13px",
                width: "100px",
                marginRight: "15px"
              }}
            >
              Save
            </Button>
          </Box>
        </div>
      </Box>
      <Checkbox 
        sx={{
          fontSize: 15
        }}
      />
      <span className='text_agree'>I agree to Platform’s 
        <span className='text_red'>Terms of Service</span> and 
        <span className='text_red'> Privacy Policy</span>
      </span>
      <Box display="flex" justifyContent="center">
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

export default Submit2