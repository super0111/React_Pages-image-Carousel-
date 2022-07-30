import { Box, Button, Grid, Paper, TableContainer, Table, TableBody, TableCell, TableRow  } from '@mui/material'; 
import { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import Carousel from "react-img-carousel";


const imgs =  [
  { url: "/images/details/1 (4).png" },
  { url: "/images/details/1 (1).png" },
  { url: "/images/details/1 (4).png" },
  { url: "/images/details/1 (5).png" },
]

const Top = () => {
  const [ slider, setSlicder ] = useState(0);

  const handleSlider = () => {
    if(slider < imgs.length-1) {
      setSlicder(slider+1)
    }
    if(slider >= imgs.length ) { return }
  }

  return(
    <div className="top">
      <div className="title">Industry</div>
      <div className="title_text">Construction <BsChevronRight /> Cement <BsChevronRight /> PCC Cement</div>
      <Grid container
        sx={{ 
          justifyContent: "space-between",
          padding: "20px"
        }}
      >
        <Grid item md={6} sm={12} xs={12}
          sx={{ 
            width: "48% !important" 
          }}
        >
          <Box display="flex" flexDirection="column" justifyContent="space-between">
            <div className='img_field'>
              <img src={imgs[slider].url}/>
            </div>
            <div className='img_item'>

              {/* { imgs.map((img, i)=> (
                <div className='item_field' key={i} onClick={() => setSlicder(i)}>
                  <img src={img.url} />
                </div>
              )) } */}

              {
                imgs.length && (
                  <Carousel viewportWidth="100%" cellPadding={5}>
                      {imgs.map((img, i) => (
                        <div className='item_field' key={i} onClick={() => setSlicder(i)}>
                          <img src={img.url} />
                        </div>
                      ))}
                  </Carousel>
                )
              }
              {/* <div className="icon_field" onClick={handleSlider}>
                <div className='icon'>
                  <BsChevronRight />
                </div>
              </div> */}
            </div>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12} 
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
          <Box display='flex' flexDirection="column">
            <Button
              variant="outlined"
              sx={{
                width: "150px",
                fontSize: "14px",
                margin: "5px 0",
              }}
            >
              Quick Quote
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "150px",
                fontSize: "14px",
                margin: "5px 0 10px 0",
              }}
            >
              Add To Cart
            </Button>
          </Box>

          <div className='title_mid'>Specifications For This Item</div>
          <TableContainer 
            component={Paper}
            sx={{
              width: "102%"
            }}
          >
            <Table 
              sx={{ 
                minWidth: 650, 
                background: "white", 
                borderRadius: "5px",
                overflowX:'auto'
              }} 
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