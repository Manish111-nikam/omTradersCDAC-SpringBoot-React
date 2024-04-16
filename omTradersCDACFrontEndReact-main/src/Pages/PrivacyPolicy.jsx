import React from 'react';
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div style={containerStyle}>
      <div className='logo1'>
        <Link to='/'>
          <img className='login_logo' src='om_icon.jpg' alt="Logo" />
        </Link>
        </div>
      <h1 style={headingStyle}>Privacy Policy</h1>
      <p style={paragraphStyle}>
        At OmTraders, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website. We assure you that any information you provide is kept confidential and used only for the purpose for which it was collected.
      </p>
      <p style={paragraphStyle}>
        We may collect information such as your name, email address, and browsing behavior to improve our services and provide you with a personalized experience. Rest assured, we do not sell or share your information with third parties unless required by law.
      </p>
      <p style={paragraphStyle}>
        Our website may contain links to external sites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of those sites.
      </p>
      <p style={paragraphStyle}>
        By using our website, you consent to the terms of this Privacy Policy. We may update this policy from time to time, so we recommend checking back periodically for any changes.
      </p>
    </div>
  );
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  color: '#333',
  fontSize: '28px',
  marginBottom: '20px',
};

const paragraphStyle = {
  lineHeight: '1.6',
  marginBottom: '15px',
};

export default PrivacyPolicy;
