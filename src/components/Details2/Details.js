
import { useState } from 'react';
import { Box, Button, Grid, } from '@mui/material';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const items = [
  { url: "/images/details/1 (1).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (4).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
]

const Details = () => {

  const handleFront = () => {

  }
  const handleBack = () => {
    
  }

  return (
    <div className="boughtTogether">
      <div className="title">
        Frequently Bought Together
      </div>
      <Box display="flex" justifyContent="space-between">
        <div className="dflex" onClick={handleFront}>
          <BsChevronLeft color="rgb(17, 167, 119)" size={30} />
        </div>
        <Grid container
          sx={{ justifyContent: "space-between" }}
        >
          {
            items.map((item, i)=> (
              <Grid key={i} md={3} sm={3} xs={6}
                sx={{
                  maxWidth: "23% !important",
                  border: "1px solid #EDE9E9",
                  borderRadius: "4px",
                  backgroundColor: "white"
                }}
              >
                <div className='img_field'>
                  <img src={item.url} />
                </div>
                <div className='body'>
                  <div className='title'>{item.title}</div>
                  <div className='text'>{item.details}</div>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "140px",
                      fontSize: "13px",
                      margin: "5px 0",
                    }}
                  >
                      {item.btn}
                  </Button>
                </div>
              </Grid> 
            ))
          }
        </Grid>
        <div className="dflex" onClick={handleBack}>
          <BsChevronRight color="rgb(17, 167, 119)" size={30} />
        </div>
      </Box>
    </div>
  )
}

export default Details