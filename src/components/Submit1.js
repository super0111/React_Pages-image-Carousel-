import { Box, TextField, Button, Checkbox } from '@mui/material';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Submit1 = () => {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      field1: "",
      field2: "",
      agree: false
    },
    validationSchema: Yup.object({
      field1: Yup.string()
        .required("Required"),
      field2: Yup.string()
        .required("Required"),
      agree: Yup.boolean().oneOf([true], "Must agree the term")
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        navigate("/submit2")
        setSubmitting(false);
      }, 400);
    }
  });

  return (
    <div className="submit1">
      <form className="form" onSubmit={formik.handleSubmit}>
        <TextField 
          fullWidth
          placeholder='DIRECTOR KYC'
          className='text_input'
          {...formik.getFieldProps("field1")}
        />
        {formik.touched.field1 && formik.errors.field1 ? (
          <div className="is-invalid">{formik.errors.field1}</div>
        ) : null}
        <TextField
          fullWidth 
          placeholder='COMPANY KYC'
          className='text_input'
          {...formik.getFieldProps("field2")}
        />
        {formik.touched.field2 && formik.errors.field2 ? (
          <div className="is-invalid">{formik.errors.field2}</div>
        ) : null}

        <Checkbox 
          sx={{
            fontSize: 15
          }}
          {...formik.getFieldProps("agree")}
        />
        <span className='text_agree'>I agree to Platform’s 
          <span className='text_red'>Terms of Service</span> and 
          <span className='text_red'> Privacy Policy</span>
        </span>
        {formik.touched.agree && formik.errors.agree ? (
          <div className="is-invalid">{formik.errors.agree}</div>
        ) : null}
        <Box 
          display="flex" 
          justifyContent="center"
          sx={{
            marginTop: "10px"
          }}
        >
          <Button
            type="submit"
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
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Submit1
