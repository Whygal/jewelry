import React from 'react'
import { Button, Typography } from '@mui/material'
import "./style.css"
import "../../Photos/jewelry1.jpeg"
import photo1 from "../../Photos/jewelry1.jpeg"
import photo2 from "../../Photos/jewelry2.jpeg"
import photo3 from "../../Photos/jewelry3.jpeg"
import photo4 from "../../Photos/jewelry4.jpeg"
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='Main'>
      <div className='parts'>
                <div className='rtl'>
                <img src={photo1} alt='logo' className='photos'/>
                <div className='text'>
                <Typography>
                djfljfsldkf
                </Typography>
                <Typography>
                  djfljfsldkfdfhhkjbvczbv,cxzc, , ,jhkhlmmmnklsadldm.,.,
                  xzckjhclzkjlkxjzlkjlxz
                </Typography>
                </div>
                </div>
                <div className='ltr'>
                <img src={photo2} alt='logo' className='photos'/>
                <div className='text'>
                <Typography>
                Introducing Our Exquisite Engagement Ring Collection
                </Typography>
                <Typography>
                Celebrate the eternal bond of love and commitment with our extraordinary collection of engagement rings. Crafted with unparalleled artistry and meticulous attention to detail, each ring in our collection is a testament to the timeless beauty of true love. From classic solitaires to intricate halo designs, our selection offers something for every style and preference.
                </Typography>
                <Link to={"/Engagement"}><Button>click here to learn more</Button></Link>
                </div>
                </div>
                <div className='rtl'>
                <img src={photo3} alt='logo' className='photos'/>
                <div className='text'>
                <Typography>
                djfljfsldkf
                </Typography>
                <Typography>
                  djfljfsldkfdfhhkjbvczbv,cxzc, , ,jhkhlmmmnklsadldm.,.,
                  xzckjhclzkjlkxjzlkjlxz
                </Typography>
                </div>
                </div>
                <div className='ltr'>
                <img src={photo4} alt='logo' className='photos'/>
                <div className='text'>
                <Typography>
                djfljfsldkf
                </Typography>
                <Typography>
                  djfljfsldkfdfhhkjbvczbv,cxzc, , ,jhkhlmmmnklsadldm.,.,
                  xzckjhclzkjlkxjzlkjlxz
                </Typography>
                </div>
              </div>
      </div>
        <div className='texts'>
      <Typography className='text'>
Our company specializes in Fancy Color Diamond, Various kinds of colors, starting from the most common Yellow Diamonds to the rarest colors on earth such as Red, Orange, Pink, Blue, Green and Purple Diamonds.
</Typography>
<Typography className='text'>
Our company has seniority in the color diamond industry for over 25 years, we’ve completed thousands of successful projects throughout the years, which earned us the reputation as the Professionals in the Fancy Color Diamonds and Fancy Color Diamond Jewelry industry.
</Typography>
<Typography className='text'>
Tri Vivid Inc. is buying rough diamonds as well as polished diamonds and re-cutting them to upgrade the color for their maximum beauty, eventually diamonds are set in magnificent handmade jewelry, to complete its look and presentation.
</Typography>
<Typography className='text'>
Tri Vivid Inc. is located in 580 5th Avenue in New York City
</Typography>
<Typography className='text'>
Member of Diamond Dealers Clubs
      </Typography>
      </div>
      <div className='logos'>
      <img src='https://static.wixstatic.com/media/f35970_d384fc14590644d7a96cc432c5b595bf~mv2.png/v1/fill/w_289,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f35970_d384fc14590644d7a96cc432c5b595bf~mv2.png' alt=''/>
      <img src='https://static.wixstatic.com/media/f35970_a98e4cbe6aac4a4c91675417dd0190be~mv2.png/v1/fill/w_409,h_151,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f35970_a98e4cbe6aac4a4c91675417dd0190be~mv2.png' alt=''/>
      <img src='https://static.wixstatic.com/media/f35970_88a831db664544e9bc83e9a8dc98701f~mv2.png/v1/fill/w_375,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f35970_88a831db664544e9bc83e9a8dc98701f~mv2.png' alt=''/>
      </div>
    </div>
  )
}

export default Main