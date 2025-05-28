import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div id="profile">
      <img id="profile1" src="profile.png" alt="Profile" />
      <div id="profile-content">
        <h1 id="heading">MUDUNURI PRASHANTH</h1>
        
        {/* Contact Information */}
        <p id="contact-info">📞 +91 8520834294 | 📧 2200032124cseh@gmail.com</p>

        <div id="linkedin">
          <a href="https://www.linkedin.com/in/prashanth-mudunuri-1b4a2125a/">LINKEDIN</a>
          <a href="https://github.com/Prashanth32124">GITHUB</a>
        </div>

        <div id="codingp">
          <h3>CODING PROFILE</h3>
          <div id="links">
            <a href="https://www.codechef.com/users/kl_2200032124">CODECHEF</a>
            <a href="https://codeforces.com/profile/prashanth2124">CODEFORCES</a>
            <a href="https://leetcode.com/u/prashanth2124/">LEETCODE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
