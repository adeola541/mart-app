
  import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
   const Footer = () => {
  return ( 
               <>
  <footer>
               
    <div className="footer-wrap">
      {/* <div className="container first_class">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>
              Get all the latest information on Triedge Services, Events, Jobs
              and Fairs. Sign up for our newsletter today.
            </p>
          </div>
          <div className="col-md-4 col-sm-6">
            <form className="newsletter">
              <input type="text" placeholder="Email Address" />
              <button className="text-[17px] text-center text-[#100707] border-0 right-[30px] top-[26px]" type="submit">
               submit
              </button>
            </form>
            
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="col-md-12">
              <div className="standard_social_links">
                <div>
                  <li className="round-btn btn-facebook">
                    <SocialIcon url="https://twitter.com/" />                    
                  </li>
                  
                  <li className="round-btn btn-twitter">
                  <SocialIcon url="https://facebook.com/" />                    

                  </li>
                  <li className="round-btn btn-instagram">
                  <SocialIcon url="https://instagram.com/" />                    

                  </li>
                  <li className="round-btn btn-whatsapp">
                  <SocialIcon url="https://whatsapp.com/" />                    

                  </li>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-md-12">
              <h3>Stay Connected</h3>
            </div>
          </div>
        </div>
      </div> */}
      <div className="second_class">
        <div className="container second_class_bdr">
          <div className="row">
            <div className="col-md-2 col-sm-6">
              <h3>Shop</h3>
              <ul className="footer-links">               
                  <Link className="Link" href="#">Men's Collection</Link>
              </ul>
              <ul className="footer-links">               
                  <Link className="Link" href="#">Women's Collection</Link>
              </ul>
              <ul className="footer-links">               
                  <Link className="Link" href="#">Other Collection</Link>
              </ul>
            </div>
            <div className="col-md-2 col-sm-6">
              <h3>USEFUL LINKS</h3>
              <ul className="footer-links">
              <Link className="Link" href="#">Customer Reviews</Link>
              </ul>
              <ul className="footer-links">
              <Link className="Link" href="#">Shipping & Delivery</Link>
              </ul>
              <ul className="footer-links">
              <Link className="Link" href="#">Track My Order</Link>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h3>SUPPORT</h3>
              <ul className="footer-category">
              <Link className="Link" href="#">Mart Manual</Link>
              </ul>
              <ul className="footer-category">
              <Link className="Link" href="#">Size Guide</Link>
              </ul>
              <ul className="footer-category">
              <Link className="Link" href="#">Common Questions</Link>
              </ul>
              <ul className="footer-category">
              <Link className="Link" href="#">Contact Us</Link>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="col-md-3 col-sm-6">
              <h3>SOCIAL MEDIA</h3>
              <ul className="footer-links">
              <Link className="Link" href="https://facebook.com/">Facebook</Link>
              </ul>
              <ul className="footer-links">
              <Link className="Link" href="https://instagram.com/">Instagram</Link>
              </ul>   
              <ul className="footer-links">
              <Link className="Link" href="https://twitter.com/">Twitter</Link>
              </ul>           
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container-fluid">
          <div className="copyright">
            Copyright 2023 | All Rights Reserved by Mart Shopping Complex.
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

  );
  }
  export default Footer;
