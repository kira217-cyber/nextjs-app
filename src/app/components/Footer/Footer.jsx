import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-base-100 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
        {/* Left Side - Logo & Name */}
        <div className="flex items-center  font-bold">
          Store-<span className="text-primary">Apple</span>
        
        </div>

        {/* Middle - Copyright */}
        <div className="text-sm  text-center">
          © {new Date().getFullYear()} slothUI. All rights reserved.
        </div>

        {/* Right Side - Social Media */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            className="hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
