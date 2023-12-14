import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Product = () => {
    const id= useParams().id;
    const [selectedImg,setSelectedImg]=useState("img");
    const [quantity,setQuantity]=useState(0);
    // const images=['https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1','https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg'];
    const {data,loading,error}= useFetch(`/products/${id}?populate=*`);
  
  return (
      <>
      
      <div className='product'>
        {loading?"loading":
        <>
                <div className='left'>
                <div className='images'>
                    <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img?.data?.attributes?.url} alt='' onClick={(e)=>setSelectedImg("img")}/>
                    <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url} alt=''onClick={(e)=>setSelectedImg("img2")}/>
                </div>
                <div className='mainImg'>
                    <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes[selectedImg].data?.attributes?.url} alt=''/>
                </div>
            </div>
            <div className='right'>
                <h1>{data?.attributes?.title}</h1>
                <span className='price'>${data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>
                <div className='quantity'>
                    <button onClick={()=>setQuantity((prev)=>prev===0?0:prev-1)}>-</button>
                        {quantity}
                    <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className='links'>
                    <div className='item'>
                        <FavoriteBorderIcon/> ADD TO WISHLIST
                    </div>
                    <div className='item'>
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
                </div>
            </div>
          </>
}
        </div>
      </>
    
  )
}

export default Product