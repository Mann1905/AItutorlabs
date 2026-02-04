import { HelmetProvider } from 'react-helmet-async';
import { useState } from "react";
import axios from 'axios';

import "./contact.css"

import Header from '../../components/01_header/header';
import Footer from '../../components/02_footer/footer';

import Instagram from '../../images/social/Instagram.png'
import LinkedIn from '../../images/social/LinkedIn.png'

export default function Contact() {
    const [fname, setFname] = useState('');
    const [fphone, setFphone] = useState('');
    const [fmessage, setFmessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", fname);
        formData.append("phone", fphone);
        formData.append("message", fmessage);
        
        try {
            const res = await axios.post("https://aitutorlabs.co.in/contact.php", formData, {
            headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Alert: " + res.data.message);
        } catch (err) {
            alert("Failed: " + (err.response?.data?.error || "Unknown error"));
        }
    }; 

    return (
        <div>
            <HelmetProvider>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </HelmetProvider>
            <Header />
            <div className='Contact-MainSection-Flex'>
                <div className='Contact-MainSection-Info-Flex'>
                    <h1>Get in touch</h1>
                    <div className='Contact-MainSection-Info-Element Contact-MainSection-Info-Email'>
                        <span>Email:</span>
                        <a href="mailto:admin@aitutorlabs.co.in">admin@aitutorlabs.co.in</a>
                    </div>
                    <div className='Contact-MainSection-Info-Element Contact-MainSection-Info-Phone'>
                        <span>Phone No:</span>
                        <a href="tel:+919930052169">+91 9930 052 169</a>
                        <a href="tel:+919999818009">+91 9999 818 009</a>
                    </div>
                    <div className='Contact-MainSection-Info-Element Contact-MainSection-Info-Social'>
                        <span>Follow Us</span>
                        <div className='Contact-MainSection-Info-Social-Icons'>
                            <a href="https://www.instagram.com/aitutorlabs/"><img src={Instagram} alt="" /></a>
                            <a href="https://www.linkedin.com/company/ai-tech-labs/"><img src={LinkedIn} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className='Contact-MainSection-FormSection'>
                    <form onSubmit={handleSubmit} className='Contact-MainSection-FormSection-Form'>
                        <div className='Contact-MainSection-FormSection-Form-Flex'>
                            <div className='Contact-MainSection-FormSection-Form-Element'>
                                <label for="fname">Your Name</label>
                                <input type="text" name="fname" placeholder='Your Full name' value={fname} onChange={(e) => setFname(e.target.value)}  required/>
                            </div>
                            <div className='Contact-MainSection-FormSection-Form-Element'>
                                <label for="fphone">Phone No.</label>
                                <input type="tel" name="fphone" placeholder='Your phone no.' value={fphone} onChange={(e) => setFphone(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='Contact-MainSection-FormSection-Form-Element'>
                            <label for="fmessage">Message</label>
                            <textarea rows="6" name="fmessage" placeholder='Write something...' onChange={(e) => setFmessage(e.target.value)} required/>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}