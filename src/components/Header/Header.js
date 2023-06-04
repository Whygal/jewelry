import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import "./style.css"
const Header = () => {
    
  return (
    <div className='toolBar'>
        <div className='Icons'>
      <a rel="stylesheet" href='https://www.instagram.com/trivividinc/'><InstagramIcon className={"Icon"} fontSize='large'/></a>
      <a href='https://www.linkedin.com/in/trivivid/'><LinkedInIcon className={"Icon"} fontSize='large'/></a>
      <a href='https://www.facebook.com/Trivivid/'><FacebookIcon className={"Icon"} fontSize='large'/></a>
      <a href='https://www.youtube.com/channel/UCgrEx3Yj4tmJkcai9fI13nQ'><YouTubeIcon className={"Icon"} fontSize='large'/></a>
      </div>
      <img src='https://static.wixstatic.com/media/f35970_e7e0928f4505457eb9a2819fdd1b2b02~mv2_d_3945_1889_s_2.png/v1/fill/w_478,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f35970_e7e0928f4505457eb9a2819fdd1b2b02~mv2_d_3945_1889_s_2.png' alt=''
      style={{width: 300, height: 160}}/>
      <div>
       <Link to={"/about"}><InfoIcon fontSize='large'/></Link> 
       
      </div>
      </div>
  )
}

export default Header