import React from "react";
import buyhive from "../buyhive.png";
export const Footer = () => {
  return (
    <footer
      className="footer mt-5 position-absolute"
      style={{ backgroundColor: "#e2e8f0" }}
    >
      <div className="footercontent w-75 m-auto">
        <div className="row w-100">
          <div className="col-5 mt-5">
            <img src={buyhive} width="200px" height="80px" />
            <p className="mt-2">
              {" "}
              Connecting buyers and suppliers using the world’s best sourcing
              experts & technology built by buyers, for buyers.
            </p>
            <h6 className="mt-4">Sign Up to Our Newsletter</h6>
            <p className="mt-3">Email</p>
            <div>
              <div className="col-11 border button d-flex">
                <input
                  type="text"
                  className="col-12 border-0 text-center text-area"
                ></input>
              </div>
            </div>
            <div className="email-search-button mt-3">
              <button>Search</button>
            </div>
          </div>
          <div className="col footer-data mt-5">
            <h6>About Us</h6>
            <p className="mt-3">Our Story</p>
            <p className="mt-1">How to Buy</p>
            <p className="mt-1">Our Partners</p>
            <p className="mt-1">Contact Us</p>
            <p className="mt-1">Careers</p>
            <p className="mt-1">Terms of Use</p>
            <p className="mt-1">Privacy Policy</p>
          </div>
          <div className="col footer-data mt-5">
            <h6>Our Services</h6>
            <p className="mt-3">Expert Sourcing</p>
            <p className="mt-1">Contract Manufacturing</p>
            <p className="mt-1">Buy</p>
            <p className="mt-1">Financing</p>
          </div>
          <div className="col footer-data mt-5">
            <h6>Account</h6>
            <p className="mt-3">Sign In</p>
            <p className="mt-1">Register to Buy</p>
            <p className="mt-1">My Profile</p>
            <p className="mt-1">My Orders</p>
            <p className="mt-1"> Register to Sell</p>
            <p className="mt-1">Become a Sourcing Expert</p>
          </div>
          <div className="col footer-data mt-5">
            <h6>Our Location</h6>
            <p className="mt-3">BuyHive Limited</p>
            <p className="mt-1">
              Dragon Industrial Bldg. Unit 8B, 93 King Lam St.
            </p>
            <p className="mt-1">
              Cheung Sha Wan,Kowloon, Hong Kong BuyHive USA Inc. 4730 South Fort
              Apache Rd.
            </p>
            <p className="mt-1">Suite 300 Las Vegas, NV 89147 USA</p>
          </div>
          <hr className="mt-5"></hr>
          <div className="d-flex justify-content-between">
            <span className="mt-4">
              {" "}
              © 2022 BuyHive Limited All Rights Reserved{" "}
            </span>
            <div className="mt-4">
              <span className="m-3 terms">Terms of Use</span>
              <span className="terms">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
