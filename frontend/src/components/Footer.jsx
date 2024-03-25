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
          <div className="svg-container">
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,100 C 96.97607655502392,96.44976076555025 193.95215311004785,92.89952153110049 288,105 C 382.04784688995215,117.10047846889951 473.16746411483257,144.85167464114832 579,139 C 684.8325358851674,133.14832535885168 805.377990430622,93.69377990430623 900,94 C 994.622009569378,94.30622009569377 1063.3205741626793,134.3732057416268 1149,142 C 1234.6794258373207,149.6267942583732 1337.3397129186603,124.8133971291866 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#c7b198" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 L 0,233 C 128.6602870813397,217.26794258373207 257.3205741626794,201.53588516746413 336,209 C 414.6794258373206,216.46411483253587 443.37799043062205,247.1244019138756 529,237 C 614.622009569378,226.8755980861244 757.1674641148325,175.9665071770335 872,183 C 986.8325358851675,190.0334928229665 1073.952153110048,255.00956937799043 1164,273 C 1254.047846889952,290.99043062200957 1347.023923444976,261.9952153110048 1440,233 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#c7b198" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
          </div>
      </footer>
        
  );
}

export default Footer;