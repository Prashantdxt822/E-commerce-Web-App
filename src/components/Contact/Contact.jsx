
import React from 'react'
import "./Contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';


const Contact = () => {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span>BE IN TOUCH WITH US:</span>
            <div className='mail'>
                <input type='text' placeholder='Enter your E-mail..'/>
                <button>JOIN US</button>
            </div> 
            <div className='icons'>
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <GoogleIcon/>
                <PinterestIcon/>
            </div> 
        </div>
    </div>
  )
}

export default Contact