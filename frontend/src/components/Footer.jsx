import '../style/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
      <footer className='Footer'>
          <ul class="social_icons">
            <li><a href="#"><FacebookIcon /></a></li>
            <li><a href="#"><InstagramIcon /></a></li>
            <li><a href="#"><LinkedInIcon /></a></li>
          </ul> 
          <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>  
        </footer>
  );
}

export default Footer;