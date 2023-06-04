import { Typography } from '@mui/material'
import React from 'react'
import "./style.css"
const About = () => {
  return (
    <div className='about'>
      <Typography variant='h2'>
      Our Clients
      </Typography>
      <div className='cli'>
      <img src='https://static.wixstatic.com/media/a3c153_1c21a3cd7c0947ce88d31a8eef96503a~mv2.png/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5.png' alt=''/>
      <img src='https://static.wixstatic.com/media/a3c153_18f1357650bc445092f511e9ca9ed710~mv2.png/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4.png' alt=''/>
      <img src='https://static.wixstatic.com/media/a3c153_55e9a7e84ab5470e851e20135735b170~mv2.png/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3.png' alt=''/>
      <img src='https://static.wixstatic.com/media/a3c153_8f40ef988e774bf68d7d402bbe334e8e~mv2.png/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png' alt=''/>
      <img src='https://static.wixstatic.com/media/a3c153_a701bcdd2cf641deba1dbf0dbe6c5487~mv2.png/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png' alt=''/>
      </div>
            <div className='text'>
            <Typography variant='h2'>Our Story</Typography>
            <Typography>
            Our company specializes in Fancy Color Diamond, Various kinds of colors, starting from the most common Yellow Diamonds to the rarest colors on earth such as Red, Orange, Pink, Blue, Green and Purple Diamonds.
            </Typography>
            <Typography>
      Our company has seniority in the color diamond industry for over 25 years, we’ve completed thousands of successful projects throughout the years, which earned us the reputation as the Professionals in the Fancy Color Diamonds and Fancy Color Diamond Jewelry industry.
            </Typography>
            <Typography>
      Tri Vivid Inc. is buying rough diamonds as well as polished diamonds and re-cutting them to upgrade the color for their maximum beauty, eventually diamonds are set in magnificent handmade jewelry, to complete its look and presentation.Tri Vivid Inc. is located in 580 5th Avenue in New York City
            </Typography>
            </div>
    </div>
  )
}

export default About