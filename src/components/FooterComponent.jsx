import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Footer.css'; 
import '../style/style.css';

const FooterComponent = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center mt-5">

          <div className="col-12 text-start mb-4">
            <FaFacebookF className="footer-icon me-3" style={{cursor: "pointer"}}/>
            <FaInstagram className="footer-icon me-3" style={{cursor: "pointer"}}/>
            <FaTwitter className="footer-icon me-3" style={{cursor: "pointer"}}/>
            <FaYoutube className="footer-icon" style={{cursor: "pointer"}}/>
          </div>
          
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="footer-links text-start">
              <p><a href="#" alt="footer link">Audio and Subtitles</a></p>
              <p><a href="#" alt="footer link">Media Center</a></p>
              <p><a href="#" alt="footer link">Privacy</a></p>
              <p><a href="#" alt="footer link">Contact us</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="footer-links text-start">
              <p><a href="#" alt="footer link">Audio Description</a></p>
              <p><a href="#" alt="footer link">Investor Relations</a></p>
              <p><a href="#" alt="footer link">Legal Notices</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="footer-links text-start">
              <p><a href="#" alt="footer link">Help Center</a></p>
              <p><a href="#" alt="footer link">Jobs</a></p>
              <p><a href="#" alt="footer link">Cookie Preferences</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="footer-links text-start">
              <p><a href="#" alt="footer link">Gift Cards</a></p>
              <p><a href="#" alt="footer link">Terms of Use</a></p>
              <p><a href="#" alt="footer link">Corporate Information</a></p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 text-start">
            <Button variant="sm" className="footer-button rounded-0 mt-3 p-2 mb-3">
              Service Code
            </Button>
            <p className="mb-2 copyright text-start">© 1997-2023 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
