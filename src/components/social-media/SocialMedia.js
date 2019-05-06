import React from 'react';
import { SocialStyle } from './SocialMediaStyle';

import facebook from '../../images/fb.png';
import twitter from '../../images/twitter.png';
import pinterest from '../../images/pinterest.png';
import blog from '../../images/blog.png';
import mail from '../../images/email.png';

const SocialMedia = () => (
  <SocialStyle className="wrapper">
    <div className="social-wrapper">
      <p>Connect:</p>
      <img src={facebook} alt="social media" />
      <img src={twitter} alt="social media" />
      <img src={pinterest} alt="social media" />
      <img src={blog} alt="social media" />
      <img src={mail} alt="social media" />
    </div>
  </SocialStyle>
);

export default SocialMedia;
