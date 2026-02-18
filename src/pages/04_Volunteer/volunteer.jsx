import { HelmetProvider } from 'react-helmet-async';
import { useState } from "react";
import axios from 'axios';

import "./volunteer.css"

import Header from '../../components/01_header/header';
import Footer from '../../components/02_footer/footer';

import PageImage1 from "../../images/steamvision/V1.jpg"

import Instagram from '../../images/social/Instagram.png'
import LinkedIn from '../../images/social/LinkedIn.png'

export default function Volunteer() {
    const [fname, setFname] = useState('');
    const [fphone, setFphone] = useState('');
    const [favail, setFavail] = useState('');
    const [fwhy, setFwhy] = useState('');
    const [fskill, setFskill] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", fname);
        formData.append("phone", fphone);
        formData.append("avail", favail);
        formData.append("why", fwhy);
        formData.append("skill", fskill);
        
        try {
            const res = await axios.post("https://aitutorlabs.co.in/volunteer.php", formData, {
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
            <div className='Volunteer-Main'>
                <img src={PageImage1} alt="" className='Volunteer-Main-Banner' />
                <div className='Volunteer-MainSection-Flex'>
                    <div className='Volunteer-MainSection-Info-Flex'>
                        <h1>Volunteer With AITutorLabs. Be the Change.</h1>
                        <p>
                            Join a growing community of passionate volunteers who are committed to shaping the future of education. By contributing your time, skills, and knowledge, you help underprivileged students and mentors gain access to AI education, cyber safety awareness, and career-ready skills.
                        </p>
                        <div className='Volunteer-MainSection-Info-Element Volunteer-MainSection-Info-Email'>
                            <span>Email:</span>
                            <a href="mailto:admin@aitutorlabs.co.in">admin@aitutorlabs.co.in</a>
                        </div>
                        <div className='Volunteer-MainSection-Info-Element Volunteer-MainSection-Info-Phone'>
                            <span>Phone No:</span>
                            <a href="tel:+919930052169">+91 9930 052 169</a>
                            <a href="tel:+919999818009">+91 9999 818 009</a>
                        </div>
                        <div className='Volunteer-MainSection-Info-Element Volunteer-MainSection-Info-Social'>
                            <span>Follow Us</span>
                            <div className='Volunteer-MainSection-Info-Social-Icons'>
                                <a href="https://www.instagram.com/aitutorlabs/"><img src={Instagram} alt="" /></a>
                                <a href="https://www.linkedin.com/company/ai-tech-labs/"><img src={LinkedIn} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='Volunteer-MainSection-FormSection'>
                        <form onSubmit={handleSubmit} className='Volunteer-MainSection-FormSection-Form'>
                            <div className='Volunteer-MainSection-FormSection-Form-Flex'>
                                <div className='Volunteer-MainSection-FormSection-Form-Element'>
                                    <label for="fname">Your Name</label>
                                    <input type="text" name="fname" placeholder='Your Full name' value={fname} onChange={(e) => setFname(e.target.value)}  required />
                                </div>
                                <div className='Volunteer-MainSection-FormSection-Form-Element'>
                                    <label for="fphone">Phone No.</label>
                                    <input type="tel" name="fphone" placeholder='Your phone no.' value={fphone} onChange={(e) => setFphone(e.target.value)}  required />
                                </div>
                            </div>
                            <div className='Volunteer-MainSection-FormSection-Form-Element'>
                                    <label for="fname">Availability (days & time)</label>
                                    <input type="text" name="fname" placeholder='Availability (days & time)' value={favail} onChange={(e) => setFavail(e.target.value)}  required />
                                </div>
                            <div className='Volunteer-MainSection-FormSection-Form-Element'>
                                <label for="fmessage">Why do you want to volunteer?</label>
                                <textarea rows="4" name="fmessage" placeholder='Why do you want to volunteer?' value={fwhy} onChange={(e) => setFwhy(e.target.value)}  required />
                            </div>
                            <div className='Volunteer-MainSection-FormSection-Form-Element'>
                                <label for="fmessage">Digital / AI Skills</label>
                                <textarea rows="4" name="fmessage" placeholder='Digital / AI Skills' value={fskill} onChange={(e) => setFskill(e.target.value)}  required />
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className='Volunteer-VolunteerHighlight'>
                    <div className='Volunteer-VolunteerHighlight-Card Volunteer-VolunteerHighlight-Card-One'>
                        <h3>Make Every Hour Count</h3>
                        <p>
                            By volunteering your time, you help us conduct sessions, mentor learners, and reach communities that need guidance the most.
                        </p>
                    </div>
                    <div className='Volunteer-VolunteerHighlight-Split'>
                        <div className='Volunteer-VolunteerHighlight-Card Volunteer-VolunteerHighlight-Card-Two'>
                            <h3>Share Knowledge. Shape Futures.</h3>
                            <p>
                                Your knowledge of AI tools, technology, cyber safety, or education helps learners become skilled, informed, and future-ready.
                            </p>
                        </div>
                        <div className='Volunteer-VolunteerHighlight-Card Volunteer-VolunteerHighlight-Card-Three'>
                            <h3>Support a Growing Movement</h3>
                            <p>
                                Whether it’s planning, outreach, content creation, or coordination — your support strengthens our mission and expands our impact.
                            </p>
                        </div>
                    </div>
                    <div className='Volunteer-VolunteerHighlight-Card Volunteer-VolunteerHighlight-Card-Four'>
                        <h3>Turn Experience Into Empowerment</h3>
                        <p>
                            Your real-world experience helps students and mentors gain practical insights, confidence, and clarity about future opportunities.
                        </p>
                    </div>
                </div>
                <div className='Volunteer-DonateHighlight'>
                    <div className='Volunteer-DonateHighlight-Info'>
                        <div className='Volunteer-DonateHighlight-Info-DetailsMain'>
                            <h2>Your Support. Our Impact. Their Future.</h2>
                        </div>
                        <div className='Volunteer-DonateHighlight-Info-Details'>
                            <p>
                                Every device donated helps us bridge the digital divide and bring quality AI education and cyber safety awareness to those who need it the most. Together, we’re building a generation that is skilled, safe, and job-ready.
                            </p>
                            <a href="/donate"><button>Donate a Device Now</button></a>
                        </div>
                    </div>
                    <div className='Volunteer-DonateHighlight-InfoCards'>
                        <div className='Volunteer-DonateHighlight-InfoCards-Main'>
                            <h3>Driving Digital Inclusion Through Education</h3>
                            <p>AITutorLabs is transforming lives by providing access to AI tools, cyber safety education, and mentorship to underprivileged students and educators across rural India.</p>
                        </div>
                        <div className='Volunteer-DonateHighlight-InfoCards-Stats'>
                            <div className='Volunteer-Stat-Block'>
                                <span className='Volunteer-Stat-Number'>600+</span>
                                <span className='Volunteer-Stat-Text'>Students & Mentors Trained</span>
                            </div>
                            <div className='Volunteer-Stat-Block'>
                                <span className='Volunteer-Stat-Number'>150+</span>
                                <span className='Volunteer-Stat-Text'>Individuals Made Job-Ready</span>
                            </div>
                            <div className='Volunteer-Stat-Block'>
                                <span className='Volunteer-Stat-Number'>20+</span>
                                <span className='Volunteer-Stat-Text'>Cyber Safety Sessions Conducted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}