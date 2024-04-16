import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { CenterFocusStrong } from "@mui/icons-material";

// npm i @emailjs/browser

const ContactMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8byoura",
        "template_u1ds2go",
        form.current,
        "eYc9PZ7CVgkQT_Vff"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Email Sent To OM TRADERS");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong please Login Before to gmail and try again");
        }
      );
  };

  return (
    <>    
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
      <div className='logo1'>
        <Link to='/'>
          <img className='login_logo' src='om_icon.jpg' alt="Logo" />
        </Link>
        </div>
      <h1>Contact Us ! via E-Mail</h1>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    </>
  );
};

export default ContactMail;

// Styles
const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 


  h1{
    padding-left:100px;
    font-size:20px;
    color:red;
  }

  div{
    margin-right:20px;
    padding-bottom:30px;
  }

  form {
    width: 400px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;