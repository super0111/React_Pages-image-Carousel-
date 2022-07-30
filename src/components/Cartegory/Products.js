import { Grid } from '@mui/material';

const items1 = [
  { title: "Square GI Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (1).png" },
  { title: "Circular GI Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (2).png" },
  { title: "Rectangular GI Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (2).png" },
  { title: "Sqare Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (6).png" },
  { title: "Round Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (5).png" },
  { title: "Square Bars", text: "Metal & Alloy", url:"/images/cartegory/product1 (6).png" },
]
const items2 = [
  { title: "Square GI Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (1).png" },
  { title: "Circular GI Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (2).png" },
  { title: "Rectangular GI Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (2).png" },
  { title: "Sqare Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (6).png" },
  { title: "Round Pipe", text: "Metal & Alloy", url:"/images/cartegory/product1 (5).png" },
  { title: "Square Bars", text: "Metal & Alloy", url:"/images/cartegory/product1 (6).png" },
]

const Products = () => {
  return (
    <div className="products">
      <div className="title">Products</div>
      <Grid container
        sx={{
          justifyContent: "space-between"
        }}
      >
        { items1.map((item, i)=>(
          <Grid item md={2} sm={3} xs={12} key={i}
            sx={{
              maxWidth: "200px !important",
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "white",
              margin: "5px 3px 0 3px",
              '@media (max-width: 452px)' : {
                maxWidth: "100% !important",
              },
             }}
          >
            <div className="image_field">
              <img src={item.url} className="img" />
            </div>
            <div className='item_title'>
              {item.title}
            </div>
            <div className='item_text'>
              {item.text}
            </div>
          </Grid> 
        ))}
      </Grid>
      <Grid container
        sx={{
          justifyContent: "space-between",
          marginTop: "20px"
        }}
      >
        { items1.map((item, i)=>(
          <Grid item md={2} sm={3} xs={12} key={i}
            sx={{
              maxWidth: "200px !important",
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "white",
              margin: "5px 3px 0 3px",
              '@media (max-width: 452px)' : {
                maxWidth: "100% !important",
              },
             }}
          >
            <div className="image_field">
              <img src={item.url} className="img" />
            </div>
            <div className='item_title'>
              {item.title}
            </div>
            <div className='item_text'>
              {item.text}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Products