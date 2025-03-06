import React from "react";

const Footer = () => {
  return (
    <div className="text-white mt-4">
      <div className="container flex flex-col md:flex-row md:justify-between justify-center mx-auto my-8">
        <div className="flex space-x-28 justify-center md:justify-items-start">
          <ul className="space-y-3">
            <li>About</li>
            <li>Solutions</li>
            <li>Servises</li>
            <li>Partners</li>
          </ul>
          <ul className="space-y-3">
            <li>Contact us</li>
            <li>Review</li>
            <li>FAQ</li>
            <li>Eng</li>
          </ul>
        </div>

        <div className=" m-auto">
          <h3 className="font-inter font-medium text-[77.8761px] leading-[94px] text-center uppercase text-white ">
            Logo
          </h3>
        </div>
        <div className="flex flex-col justify-center md:justify-end">
          <ul className=" space-y-3 ">
            <li>Address: Orbely 50 </li>
            <li>Telephone: 374 55 11 12 12</li>
            <li>Email: info@ourcompany.com</li>
            <li>
              <div>I F L</div>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="container mx-auto flex justify-between">
        <div className="flex justify-between space-x-16">
          <p>
            <small>Terms & Conditions</small>
          </p>
          <p>
            <small>Privacy Policy</small>
          </p>
        </div>
        <div>
          <small>Copyright © 2025. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};
export default Footer;
