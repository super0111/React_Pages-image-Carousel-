
import { useState } from 'react';
import { Box, TextField, Button, Grid, Paper, TableContainer, Table, TableBody, TableCell, TableRow  } from '@mui/material'; 
import { BsChevronRight } from "react-icons/bs";
import Carousel from "react-img-carousel";
import * as Yup from "yup";
import { useFormik } from "formik";

const imgs =  [
  { url: "/images/details/1 (4).png" },
  { url: "/images/details/1 (1).png" },
  { url: "/images/details/1 (4).png" },
  { url: "/images/details/1 (5).png" },
]

const Top = () => {
  const [ selectedImg, setSelectedImg ] = useState(0);

  const formik = useFormik({
    initialValues: {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
    },
    validationSchema: Yup.object({
      field1: Yup.string()
        .required("Required"),
      field2: Yup.string()
        .required("Required"),
      field3: Yup.string()
        .required("Required"),
      field4: Yup.string()
        .required("Required"),
      field5: Yup.string()
        .required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    }
  });

  return (
    <div className="top">
      <div className="title">Industry</div>
      <div className="title_text">Construction <BsChevronRight /> Cement <BsChevronRight /> PCC Cement</div>
      <Grid container
        sx={{ 
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Grid md={6} sm={12} xs={12}
          sx={{ width: "48% !important" }}
        >
          <Box display="flex" flexDirection="column" justifyContent="space-between">
            <div className='img_field'>
              <img src={imgs[selectedImg].url}/>
            </div>
            <div className='img_item'>
              {
                imgs.length && (
                  <Carousel 
                    viewportWidth="100%" 
                    cellPadding={5}
                    afterChange={(newIndex) => setSelectedImg(newIndex)}
                  >
                    {imgs.map((img, i) => (
                      <div className='item_field' key={i} onClick={() => setSelectedImg(i)}>
                        <img src={img.url} />
                      </div>
                    ))}
                  </Carousel>
                )
              }
            </div>
          </Box>
        </Grid>
        <Grid md={6} sm={12} xs={12}
          sx={{ 
            maxWidth: "48% !important", 
            '@media (max-width: 900px)' : {
              maxWidth: "100% !important",
              marginTop: "20px"
            }
          }}
          className="details"
        >
          <div className='title'>PPC Cement, 43 Grade, 25 Kg</div>
          <p>This grade of cement is used for plain concrete work and plastering works. It is suitable make concrete mix up to M30.</p>
          <p>Cement is mainly used as a binder in concrete, which is a basic material for all types of construction, including housing, roads, schools, hospitals, dams and ports.</p>
          <form className="form" onSubmit={formik.handleSubmit}>
            <div className='title_md'>Request Quote</div>
            <Grid container
              sx={{
                justifyContent: "space-between"
              }}
            >
              <Grid md={6} sm={6} xs={12}
                sx={{
                  maxWidth: "48%",
                  '@media (max-width: 900px)' : {
                    maxWidth: "100%",
                  }
                }}
              >
                <div className='dflex'>
                  <strong>Quantity</strong>
                  <TextField
                    sx={{
                      width: "90%",
                      marginTop: "5px",
                      '@media (max-width: 900px)' : {
                        width: "100%",
                      }
                    }}
                    fullWidth
                    placeholder='director kyc'
                    className='text_input'
                    {...formik.getFieldProps("field1")}
                  />
                  {formik.touched.field1 && formik.errors.field1 ? (
                    <div className="is-invalid">{formik.errors.field1}</div>
                  ) : null}
                </div>
                <div className='dflex'>
                  <strong>Price Target</strong>
                  <TextField
                    sx={{
                      width: "90%",
                      marginTop: "5px",
                      '@media (max-width: 900px)' : {
                        width: "100%",
                      }
                    }}
                    placeholder='director kyc'
                    className='text_input'
                  />
                  {formik.touched.field2 && formik.errors.field2 ? (
                    <div className="is-invalid">{formik.errors.field2}</div>
                  ) : null}
                </div>
              </Grid>
              <Grid md={6} sm={6} xs={12}
                sx={{
                  maxWidth: "48%",
                  '@media (max-width: 900px)' : {
                    maxWidth: "100%",
                  }
                }}
              >
                <div className='dflex'>
                  <strong>Delivery Date</strong>
                  <TextField
                    sx={{
                      width: "90%",
                      marginTop: "5px",
                      '@media (max-width: 900px)' : {
                        width: "100%",
                      }
                    }}
                    placeholder='director kyc'
                    className='text_input'
                    {...formik.getFieldProps("field3")}
                  />
                  {formik.touched.field3 && formik.errors.field3 ? (
                    <div className="is-invalid">{formik.errors.field3}</div>
                  ) : null}
                </div>
                <div className='dflex'>
                  <strong>Delivery Frequency</strong>
                  <TextField
                    sx={{
                      width: "90%",
                      marginTop: "5px",
                      '@media (max-width: 900px)' : {
                        width: "100%",
                      }
                    }}
                    placeholder='director kyc'
                    className='text_input'
                    {...formik.getFieldProps("field4")}
                  />
                  {formik.touched.field4 && formik.errors.field4 ? (
                    <div className="is-invalid">{formik.errors.field4}</div>
                  ) : null}
                </div>
              </Grid>
              <strong>Delivery Location</strong>
              <TextField
                fullWidth
                placeholder='director kyc'
                className='text_input'
                sx={{
                  marginTop: "5px"
                }}
                {...formik.getFieldProps("field5")}
              />
              {formik.touched.field5 && formik.errors.field5 ? (
                <div className="is-invalid">{formik.errors.field5}</div>
              ) : null}
            </Grid>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "127px",
                height: "45px",
                margin: "20px 0 0 0",
                color: "white",
                borderColor: "#212738",
                background: "#212738",
                "&:hover": {
                  background: '#2a3040'
                }
              }}
            >
              QUOTE
            </Button>
          </form>
          <div className='title_md'>Specifications For This Item</div>
          <TableContainer 
            component={Paper}
            sx={{
              width: "100%",
              marginTop: "20px"
            }}
          >
            <Table 
              sx={{ 
                minWidth: 650, 
                background: "white", 
                borderRadius: "5px",
                overflowX:'auto'
              }} 
              responsive
              aria-label="simple table"
            >
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Cement Grade:
                  </TableCell>
                  <TableCell align="left" className='fontBold'>43 Grade</TableCell>
                  <TableCell align="left">Form Factor:</TableCell>
                  <TableCell align="left" className='fontBold'>Powder</TableCell>

                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Packaging Size:
                  </TableCell>
                  <TableCell align="left" className='fontBold'>25 Kg</TableCell>
                  <TableCell align="left">Packaging Type:</TableCell>
                  <TableCell align="left" className='fontBold'>Indoor</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Packaging Type:
                  </TableCell>
                  <TableCell align="left" className='fontBold'>Paper Sack</TableCell>
                  <TableCell align="left">Packaging Type:</TableCell>
                  <TableCell align="left" className='fontBold'>All Purpose Cement</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}

export default Top