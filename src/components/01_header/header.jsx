import logo from "../../images/b.png"
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

import "./header.css"

export default function Header() {  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

    return (
      <div>
        {/* Desktop Menu */}
        <div className="Navigationbar-Desktop">
          <div className="Navigationbar-Section-Left">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <div className="Navigationbar-Section-Left-Flex-Links">
              <a href="/contact">Contact us</a>
              <a href="/blogdashboard">Blogs</a>
            </div>
          </div>
          <div className="Navigationbar-Section-Right-Flex">
            <a href="/volunteer"><button  className="Navigationbar-Section-Right-Flex-Volunteer">Become a Volunteer</button></a>
            <a href="/donate"><button  className="Navigationbar-Section-Right-Flex-Donate">Donate</button></a>
          </div>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="Navigationbar-Mobile-Icon">
          <a href="/"><img src={logo} alt="" /></a>
          <div onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="Navigationbar-Mobile">
            <div className="Navigationbar-Mobile-Section">
              <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
              <a href="/blogdashboard" onClick={() => setMobileMenuOpen(false)}>Blogs</a>
              <div className="Navigationbar-Mobile-Section-Right-Flex">
                <a href="/volunteer"><button  className="Navigationbar-Mobile-Section-Flex-Volunteer">Become a Volunteer</button></a>
                <a href="/donate"><button  className="Navigationbar-Mobile-Section-Flex-Donate">Donate</button></a>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}
  