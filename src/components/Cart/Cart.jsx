
import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Cart.scss'

const Cart = () => {
    const data=[];
  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
        {data.map(item=>(
            <div className='item' key={item.id}>
                <img src={item.img} alt=""/>
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className='price'>1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
    <div className='total'>
        <span>SUBTOTAL</span>
        <span>$129</span>
    </div>
            <button>PROCEED TO CHECKOUT</button>
            <span>Reset Cart</span>
    </div>
  )
}

export default Cart