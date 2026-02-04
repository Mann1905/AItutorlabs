import { HelmetProvider } from 'react-helmet-async';
import { useState } from "react";
import axios from 'axios';

import "./donate.css"

import Header from '../../components/01_header/header';
import Footer from '../../components/02_footer/footer';

import PageImage1 from "../../images/steamvision/D1.jpg"

import Instagram from '../../images/social/Instagram.png'
import LinkedIn from '../../images/social/LinkedIn.png'

export default function Donate() {
    const [fname, setFname] = useState('');
    const [fphone, setFphone] = useState('');
    const [fmessage, setFmessage] = useState('');
    const [fdtype, setFdtype] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("route", "donation"); // 💡 Add this line
        formData.append("name", fname);
        formData.append("dtype", fdtype);
        formData.append("phone", fphone);
        formData.append("message", fmessage);
      
        if (file) {
          formData.append("file", file);
        }
      
        try {
          const res = await axios.post("https://aitutorlabs.co.in/donate.php", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          alert("Success: " + res.data.message);
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
            <div className='Donate-Main'>
                <img src={PageImage1} alt="" className='Donate-Main-Banner'/>
                <div className='Donate-MainSection-Flex'>
                    <div className='Donate-MainSection-Info-Flex'>
                        <h1>Donate a Device</h1>
                        <p>At AITutorLabs, we believe access to technology should never limit a child’s potential. Your unused phones, laptops, tablets, or digital devices can open doors to education, AI literacy, and cyber safety awareness for underprivileged students in rural India. By donating a device, you’re not just giving hardware, you’re empowering learners and mentors to become future-ready in a digital world.</p>
                        <div className='Donate-MainSection-Info-Element Donate-MainSection-Info-Email'>
                            <span>Email:</span>
                            <a href="mailto:admin@aitutorlabs.co.in">admin@aitutorlabs.co.in</a>
                        </div>
                        <div className='Donate-MainSection-Info-Element Donate-MainSection-Info-Phone'>
                            <span>Phone No:</span>
                            <a href="tel:+919930052169">+91 9930 052 169</a>
                            <a href="tel:+919999818009">+91 9999 818 009</a>
                        </div>
                        <div className='Donate-MainSection-Info-Element Donate-MainSection-Info-Social'>
                            <span>Follow Us</span>
                            <div className='Donate-MainSection-Info-Social-Icons'>
                                <a href="https://www.instagram.com/aitutorlabs/"><img src={Instagram} alt="" /></a>
                                <a href="https://www.linkedin.com/company/ai-tech-labs/"><img src={LinkedIn} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='Donate-MainSection-FormSection'>
                        <form onSubmit={handleSubmit} className='Donate-MainSection-FormSection-Form'>
                            <div className='Donate-MainSection-FormSection-Form-Flex'>
                                <div className='Donate-MainSection-FormSection-Form-Element'>
                                    <label for="name">Your Name</label>
                                    <input type="text" name="fname" placeholder='Your Full name' value={fname} onChange={(e) => setFname(e.target.value)} />
                                </div>
                                <div className='Donate-MainSection-FormSection-Form-Element'>
                                    <label for="phone">Phone No.</label>
                                    <input type="tel" name="fphone" placeholder='Your phone no.' value={fphone} onChange={(e) => setFphone(e.target.value)} />
                                </div>
                            </div>
                            <div className='Donate-MainSection-FormSection-Form-Element'>
                                <label for="selection">Types of Devices</label>
                                <select name="fselection" value={fdtype} onChange={(e) => setFdtype(e.target.value)}>
                                    <option value="">Select device</option>
                                    <option value={fdtype}>Phone</option>
                                    <option value={fdtype}>Laptop</option>
                                    <option value={fdtype}>Others</option>
                                </select>
                            </div>
                            <div className='Donate-MainSection-FormSection-Form-Element'>
                                <label for="fmessage">Message</label>
                                <input type="file" name="file" multiple onChange={(e) => setFile(e.target.files[0])} />
                            </div>
                            <div className='Donate-MainSection-FormSection-Form-Element'>
                                <label for="fmessage">Message</label>
                                <textarea rows="6" name="message" placeholder='Write something...' value={fmessage} onChange={(e) => setFmessage(e.target.value)}/>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className='Donate-HowSection'>
                    <h2>How Donation Works</h2>
                    <div className='Donate-HowSection-Flex'>
                        <div className='Donate-HowSection-Flex-Card'>
                            <span className='Donate-HowSection-Flex-Card-offset'>1</span>
                            <div className='Donate-HowSection-Flex-Card-Info'>
                                <h3>Fill the Donation Form</h3>
                                <p>Share basic details about the device you want to donate and your location.</p>
                            </div>
                        </div>
                        <div className='Donate-HowSection-Flex-Card'>
                            <span className='Donate-HowSection-Flex-Card-offset'>2</span>
                            <div className='Donate-HowSection-Flex-Card-Info'>
                                <h3>We Get in Touch</h3>
                                <p>Our team will contact you to verify details and guide you through the next steps.</p>
                            </div>
                        </div>
                        <div className='Donate-HowSection-Flex-Card'>
                            <span className='Donate-HowSection-Flex-Card-offset'>3</span>
                            <div className='Donate-HowSection-Flex-Card-Info'>
                                <h3>We Manage the Delivery</h3>
                                <p>We coordinate and manage the device pickup or delivery to ensure a smooth and hassle-free process.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Donate-VolunteerHighlight-Main'>
                    <div className='Donate-VolunteerHighlight-Info'>
                        <h2>Become a Volunteer</h2>
                        <div  className='Donate-VolunteerHighlight-Info-Description'>
                            <p>
                                Want to teach, inspire, and create impact? Join AITutorLabs as a volunteer mentor and help learners build digital skills that can change their future.
                            </p>
                            <a href="/volunteer">Become a Volunteer</a>
                        </div>
                    </div>
                    <div className='Donate-VolunteerHighlight'>
                        <div className='Donate-VolunteerHighlight-Card Donate-VolunteerHighlight-Card-One'>
                            <h3>Make Every Hour Count</h3>
                            <p>
                                By volunteering your time, you help us conduct sessions, mentor learners, and reach communities that need guidance the most.
                            </p>
                        </div>
                        <div className='Donate-VolunteerHighlight-Split'>
                            <div className='Donate-VolunteerHighlight-Card Donate-VolunteerHighlight-Card-Two'>
                                <h3>Share Knowledge. Shape Futures.</h3>
                                <p>
                                    Your knowledge of AI tools, technology, cyber safety, or education helps learners become skilled, informed, and future-ready.
                                </p>
                            </div>
                            <div className='Donate-VolunteerHighlight-Card Donate-VolunteerHighlight-Card-Three'>
                                <h3>Support a Growing Movement</h3>
                                <p>
                                    Whether it’s planning, outreach, content creation, or coordination — your support strengthens our mission and expands our impact.
                                </p>
                            </div>
                        </div>
                        <div className='Donate-VolunteerHighlight-Card Donate-VolunteerHighlight-Card-Four'>
                            <h3>Turn Experience Into Empowerment</h3>
                            <p>
                                Your real-world experience helps students and mentors gain practical insights, confidence, and clarity about future opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}