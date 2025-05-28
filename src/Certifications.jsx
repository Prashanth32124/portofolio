import React from 'react';
import './Certification.css';

function Certifications() {
  return (
    <div id="container">
        <h1 id="cert">CERTIFICATIONS</h1>
      <div className="cert-box">
        <a href="https://rhtapps.redhat.com/verify?certId=240-191-692">
          <img src="Redhat.png" alt="Red Hat Certification" className="cert-img" />
        </a>
        <h3>Red Hat Certified</h3>
      </div>

      <div className="cert-box">
        <a href="https://aws.amazon.com/certification/" target="_blank" rel="noopener noreferrer">
          <img src="Aws.png" alt="AWS Certification" className="cert-img" />
        </a>
        <h3>AWS Certified</h3>
      </div>
    </div>
  );
}

export default Certifications;
