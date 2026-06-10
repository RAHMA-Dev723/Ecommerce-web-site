import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";
import CallIcon from "@mui/icons-material/Call";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="desktop-view">
            {/* left section */}
            <div className="footer-col">
              <h2 className="text-base">URBAN OUTFITTERS</h2>
              <p className="footer-col-parg">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod tempor.
              </p>

              <div className="details paragraph-base">
                <p>121 king street, Melbourne 3000</p>
                <p>+61 3 8376 6284</p>
                <p>contact@urbanoutfitters.com</p>
              </div>
              <div className="social-icons">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <YouTubeIcon />
              </div>
            </div>

            {/* footer */}
            <div className="footer-col">
              <p>SHOPPING</p>
              <ul>
                <li>Your cart</li>
                <li>Your orders</li>
                <li>Compared items</li>
                <li>Wishlist items</li>
                <li>Shipping detail</li>
              </ul>
            </div>
            {/* more link */}
            <div className="footer-col">
              <p>MORE LINK</p>
              <ul>
                <li>Blog </li>
                <li>Gift Center</li>
                <li>Buying Guides</li>
                <li>New Arrivals</li>
                <li>Clearance </li>
              </ul>
            </div>
            {/* blog section */}
            <div className="footer-col">
              <p>FROM THE BLOG</p>
              <div className="blog-item">
                <h4>
                  26 <span>May</span>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="span">3 comments</span>
              </div>
              <Divider
                variant="middle"
                sx={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
              />
              <div className="footer-col">
                <div className="blog-item">
                  <h4>
                    27 <span>May</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <span className="span">3 comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-view">
            {" "}
            {/* left section */}
            <div className="footer-col">
              <h2 className="text-base">URBAN OUTFITTERS</h2>

              <div className="details paragraph-base">
                <div className="call-num">
                  <CallIcon />
                  <p>166</p>
                </div>
                <p>121 king street, Melbourne 3000</p>
                <p>contact@urbanoutfitters.com</p>
              </div>
              <div className="footer-col">
                <ul>
                  <li>Your cart</li>
                  <li>Your orders</li>
                  <li>Compared items</li>
                  <li>Wishlist items</li>
                  <li>Shipping detail</li>
                </ul>
              </div>
            </div>
            <div className="social-icons">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="fotter-bottom">
        <p>Urban Outfitters © – All rights reserved </p>
      </div>
    </>
  );
}

export default Footer;
