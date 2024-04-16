// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PdfViewer from './PdfViewer';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'cdac' && password === 'cdac') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex',marginTop:'150px' , flexDirection: 'column', alignItems: 'center', minHeight: '100vh', background: 'white' }}>
        <div style={{marginRight:'28px', marginBottom:'40px' , marginTop:'-100px'}}>
        <Link to='/'>
          <img className='login_logo' src='om_icon.jpg' alt="Logo" />
        </Link>
        </div>
      {!isLoggedIn ? (
        <div style={{ width: '300px', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', background: '#fff' , paddingTop:'20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontSize: '18px', color: '#3498db',paddingLeft:'60px' }}>Developers Login</label>

          <label style={{ display: 'block', marginBottom: '10px', fontSize: '18px', color: '#333' }}>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', fontSize: '16px' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px', fontSize: '18px', color: '#333' }}>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', fontSize: '16px' }} />
          </label>
          <button onClick={handleLogin} style={{ width: '100%', padding: '10px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '16px' }}>
            Login
          </button>
        </div>
      ) : (
        <>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h1 style={{ color: 'red', fontSize: '30px' }}>OM TRADERS : HOME APPLIANCES SHOP MANAGEMENT SYSTEM</h1>
            <iframe
              title="PROJECT DOCUMENTATION"
              width="100%"
              height="1100px"
              src="/FinalProjectReportGroupNo08.pdf"
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
