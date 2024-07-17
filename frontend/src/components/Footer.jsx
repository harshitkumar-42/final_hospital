import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  return (
    <>
      <footer className={"container footer-wrapper"}>
        <hr />
        <div className="content">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          
          <div className="contact-wrapper">
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>1234567890</span>
            </div>
            <div>
              <MdEmail />
              <span>healthcare@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
        <div>
        <p className="copyright">&copy; <span>2024 Healthcare Harshit. All Rights Reserved.</span></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;