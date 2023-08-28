
import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack, faFacebook, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscriptionToggle = () => {
    setSubscribed(prevSubscribed => !prevSubscribed);
  };

  return (
    <footer>
<div class="rowprimary">
  <div class="column about">

  <p className='header'>About Us</p>

   <p className='headerp'>
   Discover Lebanon's Top Universities | Your Gateway to Educational Excellence.
  </p>

</div>

<div class="column social">
<p className='header'>Social</p>

 <ul className='ul  '>
  <li className="l">
    <a className="a" href="#Slack">
      <FontAwesomeIcon icon={faSlack} />
      <span className="icon-text">Slack</span>
    </a>
  </li>
  <li className="l">
    <a className="a" href="#Facebook">
      <FontAwesomeIcon icon={faFacebook} /> 
      <span className="icon-text">Facebook</span>
    </a>
  </li>
  <li className="l">
    <a className="a" href="#instagram">
      <FontAwesomeIcon icon={faInstagram} />
      <span className="icon-text">instagram</span>
    </a>
  </li>
  <li className="l">
    <a className="a" href="#Discord">
      <FontAwesomeIcon icon={faDiscord} />
      <span className="icon-text">Discord</span>
    </a>
  </li>
</ul>


</div>


<div class="column links">
  <p className='header'>Some Links</p>
    <ul className='ul   '>
    <li className="l">
     <a className="a" href="#faq">F.A.Q</a>
    </li>
    <li className="l">
     <a className="a" href="#cookies-policy">Cookies Policy</a>
    </li>
    <li className="l">
    <Link className="a"to="terms">Terms Of Service</Link>
    </li>
    <li className="l">
    <a className="a" href="#support">Support</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
        <p className='header'>Subscribe</p>
        <div>
          <input type="email" placeholder="Your email" />
          <button onClick={handleSubscriptionToggle} className='btn'>
            {subscribed ? 'Unsubscribe' : 'Subscribe'}
          </button>
        </div>
</div>

</div>

<div class="row copyright">
  <div class="footer-menu">

  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Contact</a>
  <a href="">Universities</a>
  <a href="">Social</a>

  </div>
   <p>Copyright &copy; 2023 universityGuide</p>
</div>
</footer>
  );
};

export default Footer;