
import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack, faFacebook, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscriptionToggle = () => {
    setSubscribed(prevSubscribed => !prevSubscribed);
  };

  return (
    <footer>
<div class="row primary">
  <div class="column about">

  <h3>About Us</h3>

   <p>
   Discover Lebanon's Top Universities | Your Gateway to Educational Excellence.
  </p>

</div>

<div class="column social">
<h3>Social</h3>

<ul className="u">
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
  <h3>Some Links</h3>
   <ul className="u">
    <li className="l">
     <a className="a" href="#faq">F.A.Q</a>
    </li>
    <li className="l">
     <a className="a" href="#cookies-policy">Cookies Policy</a>
    </li>
    <li className="l">
    <a className="a" href="#terms-of-services">Terms Of Service</a>
    </li>
    <li className="l">
    <a className="a" href="#support">Support</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
        <h3>Subscribe</h3>
        <div>
          <input type="email" placeholder="Your email" />
          <button onClick={handleSubscriptionToggle}>
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