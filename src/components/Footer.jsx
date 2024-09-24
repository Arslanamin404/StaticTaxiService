import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 mt-12">
        <p className="text-lg py-6 text-gray-300 text-center">
          <Link to="/">
            © <span className="font-bold mr-2">{Date().slice(11, 15)}</span>
            Taxi Service
            <span className="mx-2">All rights reserved.</span>
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Footer;
