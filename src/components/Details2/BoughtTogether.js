import React from "react";
import { Button } from '@mui/material';
import Carousel from "react-img-carousel";
require("react-img-carousel/lib/carousel.css");

const items = [
  { url: "/images/details/1 (1).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (4).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
]

const BoughtTogether = () => {
  return (
    <div className="boughtTogether">
      <div className="title">
        Frequently Bought Together
      </div>
      {
        items.length && (
          <Carousel 
            viewportWidth="100%" 
            cellPadding={40} 
            imagesToPrefetch={4}
            lazyLoad={false}
            maxRenderedSlides={4}
            slideAlignment={'left'}
          >
              {items.map((item) => (
                <div className="item">
                  <div className="img_field">
                    <img width="180px" height="190px" src={item.url} alt="image" />
                  </div>

                  <div className='body'>
                    <div className='title'>{item.title}</div>
                    <div className='text'>{item.details}</div>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "140px",
                        fontSize: "13px",
                        margin: "auto",
                      }}
                    >
                        {item.btn}
                    </Button>
                  </div>
                </div>
              ))}
          </Carousel>
        )
      }
    </div>
  );
}

export default BoughtTogether