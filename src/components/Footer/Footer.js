import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, Typography } from '@mui/material';
const Footer = () => {
  return (
    <div>
        <div className='Icons'>
      <Link rel="stylesheet" href='https://www.instagram.com/trivividinc/'><InstagramIcon className={"Icon"} fontSize='large'/></Link>
      <Link href='https://www.linkedin.com/in/trivivid/'><LinkedInIcon className={"Icon"} fontSize='large'/></Link>
      <Link href='https://www.facebook.com/Trivivid/'><FacebookIcon className={"Icon"} fontSize='large'/></Link>
      <Link href='https://www.youtube.com/channel/UCgrEx3Yj4tmJkcai9fI13nQ'><YouTubeIcon className={"Icon"} fontSize='large'/></Link>
      </div>
      <Typography>© 2018 by Trivivid.</Typography>
    </div>
  )
}

export default Footer