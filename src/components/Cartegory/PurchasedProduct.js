import { Box } from '@mui/material';
import Carousel from "react-img-carousel";
require("react-img-carousel/lib/carousel.css");

const items = [
  { text: "TMT Tuber", url: "/images/cartegory/Intersect.png" },
  { text: "RMC", url: "/images/cartegory/istockphoto-987409372-170667a 3.png" },
  { text: "White ASiancs", url: "/images/cartegory/5-gallon-bucket-mockup-front-view_1332-5974 2.png" },
  { text: "Wire", url: "/images/cartegory/Intersect.png" },
  { text: "Sofa", url: "/images/cartegory/istockphoto-987409372-170667a 3.png" },
  { text: "Plywood", url: "/images/cartegory/5-gallon-bucket-mockup-front-view_1332-5974 2.png" },
  { text: "TMT Bars", url: "/images/cartegory/Intersect.png" },
  { text: "Cement", url: "/images/cartegory/istockphoto-987409372-170667a 3.png" },
  { text: "Paint", url: "/images/cartegory/5-gallon-bucket-mockup-front-view_1332-5974 2.png" },
  { text: "Wire", url: "/images/cartegory/Intersect.png" },
  { text: "Sofa", url: "/images/cartegory/istockphoto-987409372-170667a 3.png" },
  { text: "Plywood", url: "/images/cartegory/5-gallon-bucket-mockup-front-view_1332-5974 2.png" },
  { text: "TMT Bars", url: "/images/cartegory/Intersect.png" },
  { text: "Cement", url: "/images/cartegory/istockphoto-987409372-170667a 3.png" },
  { text: "Paint", url: "/images/cartegory/5-gallon-bucket-mockup-front-view_1332-5974 2.png" },
  { text: "Wire", url: "/images/cartegory/Intersect.png" },
  { text: "Sofa", url: "/images/cartegory/istockphoto-987409372-170667a 3.png" },
]

const PurchasedProduct = () => {
  return (
    <div className="purchasedProduct">
      <Box
        sx={{
          padding: "10px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
          backgroundColor: "white"
        }}
      >
        <div className='title'>
          Frequestly purcharged product
        </div>

        {
        items.length && (
          <Carousel
            viewportWidth="100%"
            cellPadding={50} 
            // centerMode={false} 
            centerSlidePercentage={false}
            imagesToPrefetch={15}
            lazyLoad={false}
            maxRenderedSlides={15}
            slideAlignment={'left'}
          >
            {items.map((item, i) => (
              <div className="item" key={i}>
                <div className='img_field'>
                  <img src={item.url} />
                </div>
                <div className="text">
                  {item.text}
                </div>
              </div>
            ))}
          </Carousel>
        )
      }

        {/* <Grid container>
          {
            items.map((item, i)=> (
              <Grid item md={1} sm={2} xs={3} 
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "5px"
                }}  
              >
                <div className='img_field'>
                  <img src={item.url} />
                </div>
                <div className="text">
                  {item.text}
                </div>
              </Grid>
            ))
          }
          <Grid item md={1} sm={2} xs={3}
            sx={{
              marginTop: "5px"
            }}
          >
            <div className='img_field'>
              <div className='icon_field'>
                <BsChevronRight color="rgb(34, 75, 81)" />
              </div>
            </div>
          </Grid>
        </Grid> */}
      </Box>
    </div>
  )
}

export default PurchasedProduct