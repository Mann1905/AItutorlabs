import logo from "../images/Frame 312.svg"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <div>
        {/* Desktop Menu */}
        <div className="navigationbar-desktop">
          <div className="navigationbar-section-left">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="navigationbar-Mobile-Icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <a href="/"><img src={logo} alt="" /></a>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
        {isMobileMenuOpen && (
          <div className="navigationbar-Mobile">
            <div className="navigationbar-section">
              <a href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</a><br />
              <a href="/services" onClick={() => setMobileMenuOpen(false)}>Services</a><br />
              {/* <a href="/blog" onClick={() => setMobileMenuOpen(false)}>Blogs</a><br /> */}
              <a href="/career" onClick={() => setMobileMenuOpen(false)}>Career</a> <br />
              <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a><br />
            </div>
          </div>
      )}
    </div>
  );
}
  