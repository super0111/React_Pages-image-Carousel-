import { Box, Grid, } from '@mui/material';
import { BsChevronRight } from "react-icons/bs";

const items =[
  { text: "Content", url: "/images/cartegory/Group 2139.png" },
  { text: "Steel", url: "/images/cartegory/Intersect (3).png" },
  { text: "Window& Doors", url: "/images/cartegory/Intersect (2).png" },
  { text: "Chemiclas", url: "/images/cartegory/Intersect (1).png" },
  { text: "Tilling", url: "/images/cartegory/Group 2139 (1).png" },
  { text: "Plumbing", url: "/images/cartegory/Intersect (2).png" },
  { text: "Electricals", url: "/images/cartegory/Intersect (2).png" },
  { text: "Mics", url: "/images/cartegory/Intersect (2).png" },
]

const TopField = () => {
  return (
    <div className="topField">
      <Grid container>
        <Box
          className='dflex'
          sx={{
            width: "100%",
          }}
        >
          <Grid item md={2} sm={6} xs={12}>
            <Box
              sx={{
                maxWidth: "80% !important",
                padding: "10px",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
                backgroundColor: "white"
              }}
            >
              <div className='header_title'>
                Cartegories
              </div>
              {
                items.map((item, i)=> (
                  <Box 
                    key={i} 
                    display="flex" 
                    justifyContent="flex-start"
                    sx={{
                      marginTop: "8px"
                    }}
                  >
                    <img src={item.url} className="item_img" />
                    <div className='item_text'>
                      {item.text}
                    </div>
                  </Box>
                ))
              }
              <Box 
                display="flex" 
                justifyContent="space-between"
                sx={{
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                <div className="text_more">Show More</div>
                <BsChevronRight />
              </Box>
            </Box>
          </Grid>
          <Grid
            item md={10} sm={6} xs={12}
            sx={{
              backgroundColor: "#D9D9D9",
            }}
          >
            <div ></div>
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}

export default TopField