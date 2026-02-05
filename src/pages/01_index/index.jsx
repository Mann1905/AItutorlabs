import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from "react";
import axios from 'axios';

import "./index.css"

import Header from '../../components/01_header/header';
import Footer from '../../components/02_footer/footer';

import PageImage2 from "../../images/steamvision/H2.jpg"
import PageImage3 from "../../images/steamvision/H3.jpg"

import SDG1 from "../../images/SDG/goal1.jpg"
import SDG2 from "../../images/SDG/goal2.jpg"
import SDG3 from "../../images/SDG/goal3.jpg"
import SDG4 from "../../images/SDG/goal4.jpg"

import Founder1 from "../../images/founders/m1.jpg"
import Founder2 from "../../images/founders/m2.jpg"
import Founder3 from "../../images/founders/m3.jpg"
import Founder4 from "../../images/founders/m4.jpg"
import Founder5 from "../../images/founders/m5.png"

import Colab1 from "../../images/collab/C1.jpg"
import Colab2 from "../../images/collab/C2.jpg"
import Colab3 from "../../images/collab/C3.jpg"
import Colab4 from "../../images/collab/C4.jpg"

import PieChart from "../../images/PieChart.svg"

import Instagram from '../../images/social/Instagram.png'
import LinkedIn from '../../images/social/LinkedIn.png'

import Card101 from "../../images/Banner/B1.jpg"
import Card102 from "../../images/Banner/B2.jpg"
import Card103 from "../../images/Banner/B3.jpg"
import Card104 from "../../images/Banner/B4.jpg"
import Card105 from "../../images/Banner/B5.jpg"

const slidesByCard = [[{ bg: Card101 }, { bg: Card102 }, { bg: Card103 }, { bg: Card104 }, { bg: Card105 }]];

export default function Index() {
    const [counter_Carl, setCounter_Carl] = useState(0);

    useEffect(() => {
    const id = setInterval(() => {
        setCounter_Carl(prev =>
        prev === slidesByCard[0].length - 1 ? 0 : prev + 1
        );
    }, 5000);

    return () => clearInterval(id);
    }, []);


    const [fname, setFname] = useState('');
    const [fphone, setFphone] = useState('');
    const [fmessage, setFmessage] = useState('');

    const Contact = async (e) => {
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

    const Workshop = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", fname);
        formData.append("phone", fphone);
        
        try {
            const res = await axios.post("https://aitutorlabs.co.in/workshop.php", formData, {
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
            <div className='Home'>
                <div className='Home-HeroSection-Main'>
                    <div className='Home-HeroSection-Main-Info'>
                        <h1>Empowering Every Mind with Technology</h1>
                        <p>
                            In many communities, access to digital literacy, AI education, and cyber safety awareness remains limited. AITutorLabs helps learners and mentors build essential digital, AI, coding, and cyber safety skills—so no one is left behind in the digital world.
                        </p>
                        <div className='Home-HeroSection-Main-Info-Links'>
                            <a href="#Home-Workshop" className='Home-HeroSection-Main-Info-Links-Workshop'>Join our Workshop</a>
                            <a href="/volunteer" className='Home-HeroSection-Main-Info-Links-Volunteer'>Become a Volunteer</a>
                        </div>
                    </div>
                    <div className="slide-container-Cards">
                        <div className="slides-Cards">
                            {slidesByCard[0].map((slide, index) => (
                            <div
                                key={index}
                                className={`slidesld-Cards ${
                                index === counter_Carl ? "active" : ""
                                }`}
                                style={{
                                backgroundImage: `url(${slide.bg})`,
                                }}
                            />
                            ))}
                        </div>
                    </div>

                </div>
                <div className="homeo-Iframe">
                        <h2>
                            The People Behind the Passion
                        </h2>
                        <iframe className='homeo-Iframe-Embed' src="https://www.youtube.com/embed/bvtdCTXwkZ8?si=dVyDOr-BVmyjEuVS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='Home-MissionSection-Main'>
                    <div className='Home-MissionSection-Info'>
                        <h2>Mission Statement:</h2>
                        <p>
                            <strong>Advancing UN SDG 4 (Quality Education) as our core focus, while contributing to SDGs 5 (Gender Equality), 8 (Decent Work & Economic Growth), and 10 (Reduced Inequalities).</strong> AI Tutor Labs empowers educators and learners through digital upskilling, AI literacy, and inclusive access to high-quality training resources.
                        </p>
                    </div>
                    <div className='Home-MissionSection-Flex'>
                        <div className='Home-MissionSection-Section-One'>
                            <div className='Home-MissionSection-Section-One-Cards Home-MissionSection-Section-One-Cards-One'>
                                <img src={SDG1} alt="" />
                                <p>UN SDGs 4 <br /> (Quality Education)</p>
                            </div>
                        </div>
                        <div  className='Home-MissionSection-Section-Two'>
                            <div className='Home-MissionSection-Section-Two-Cards Home-MissionSection-Section-Two-Cards-Two'>
                                <img src={SDG2} alt="" />
                                <p>UN SDGs 5 <br /> (Gender Equality)</p>
                            </div>
                            <div className='Home-MissionSection-Section-Two-Cards Home-MissionSection-Section-Two-Cards-Three'>
                                <img src={SDG3} alt="" />
                                <p>UN SDGs 8 <br /> (Decent Work & Economic Growth)</p>
                            </div>
                            <div className='Home-MissionSection-Section-Two-Cards Home-MissionSection-Section-Two-Cards-Four'>
                                <img src={SDG4} alt="" />
                                <p>UN SDGs 10 <br /> (Reduced Inequalities)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Home-ChallengesSection-Main'>
                    <div className='Home-ChallengesSection-Main-Info'>
                        <h2>Challenges We Face</h2>
                        <p>Despite growing access to devices, underserved communities lack practical, inclusive AI education, trained mentors, and cyber safety awareness - widening the digital skills gap.</p>
                    </div>
                    <div className='Home-ChallengesSection-Main-Flex'>
                        <div className='Home-ChallengesSection-Main-Card'>
                            
                            <p>
                                Only about 37% of rural India have the ability to use the internet despite having devices
                            </p>
                        </div>
                        <div className='Home-ChallengesSection-Main-Card'>
                        
                            <p>
                                Cyber crimes incidents in India have increased by 60% 2020 to 2024, dricen by phishing & ransom ware
                            </p>
                        </div>
                        <div className='Home-ChallengesSection-Main-Card'>
                        
                            <p>
                                Tech-based education remain mostly theoretical and language-dependent reducing inclusivity
                            </p>
                        </div>
                        <div className='Home-ChallengesSection-Main-Card'>
                            
                            <p>
                                Early AI education lacking despite growing importance
                            </p>
                        </div>
                    </div>
                </div>
                <div className='Home-ImpactSection-Main'>
                    <h2 className='Home-ImpactSection-Title'>Our solution</h2>
                    <div className='Home-ImpactSection-Cards'>
                        <div className='Home-ImpactSection-Card'>
                            <span>1. Train</span>
                            <p>Training mentors on modern AI tools, real-world use, & cyber safety</p>
                            <h2>120+ Mentors Trained</h2>

                        </div>
                        <div className='Home-ImpactSection-Arrow'>
                            <svg width="100%" height="100%" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="10" width="65" height="10" fill="var(--Black)"/>
                                <path d="M65 0L100 15L65 30L65 0Z" fill="var(--Black)"/>
                            </svg>
                        </div>
                        <div className='Home-ImpactSection-Card'>
                            <span>2. Equip</span>
                            <p>Providing structured, easy to use learning modules via a centralised learning app</p>
                            <h2>15+ Session Conducted</h2>
                           
                        </div>
                        <div className='Home-ImpactSection-Arrow'>
                            <svg width="100%" height="100%" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="10" width="65" height="10" fill="var(--Black)"/>
                                <path d="M65 0L100 15L65 30L65 0Z" fill="var(--Black)"/>
                            </svg>
                        </div>
                        <div className='Home-ImpactSection-Card'>
                            <span>3. Multiply</span>
                            <p>Mentors teach students in their own communities</p>
                            <h2>300+ Students Educated</h2>
                           
                        </div>
                    </div>
                </div>
                <div className='Home-VisionSection-Main'>
                    <h2>Our Visions & Goals</h2>
                    <div className='Home-VisionSection-Flex'>
                        <div  className='Home-VisionSection-Cards'>
                            <h3>Long Term Model</h3>
                            <ul>
                                <li>
                                    Mentor-first, sascading learning model where trained mentors continue teaching peers & Younger students, build long-term AI & cyber-safety capability
                                </li>
                                <li>
                                    Inclusive of all age groups
                                </li>
                                <li>
                                    Self-Sustaining mentor network through volunteer-led delivery - potential to make it a global & scalable model.
                                </li>
                            </ul>
                        </div>
                        <div  className='Home-VisionSection-Cards'>
                            <h3>Skill Development</h3>
                            <ul>
                                <li>
                                    Students and mentors gain hands-on experience with practical AI tools (profiles/resumes, presentations, essay writing)
                                </li>
                                <li>
                                    With SDG 4, also support UN SDG 8 & SDG 10 by preparing for future careers & reducing digital inequality
                                </li>
                                <li>
                                    Language-inclusive content & training enables participation from learners excluded from edTech
                                </li>
                            </ul>
                        </div>
                        <div  className='Home-VisionSection-Cards'>
                            <h3>Cyber Safety</h3>
                            <ul>
                                <li>
                                    Training on online safety, privacy, ethical AI use, and digital responsibility
                                </li>
                                <li>
                                    Cyber safety early awarness to avoid cyber risks, online misuse
                                </li>
                            </ul>
                        </div>
                        <div  className='Home-VisionSection-Cards'>
                            <h3>Larger Outreach</h3>
                            <ul>
                                <li>
                                    Development of App/platform development that hosts resources, session recordings, and reusable learning materials
                                </li>
                                <li>
                                    Future growth includes more practical AI tools & expanded NGO partnerships
                                </li>
                                <li>
                                    Use of Instagram & Info-graphics to spread awarness
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='Home-EngagementSection-Main'>
                    <div className='Home-EngagementSection-Content'>
                        <div className='Home-EngagementSection-Objective'>
                            <h2 className='Home-EngagementSection-Title'>Reach 500 mentors and impact 1000+ students by Dec 2026</h2>
                            <p className='Home-EngagementSection-Subtitle'>Our plan for Community Engagement till Dec 2026</p>
                        </div>
                        <div className='Home-EngagementSection-Chart'>
                            <img src={PieChart} alt="Engagement Cycle Diagram" />
                        </div>
                    </div>
                </div>
                <div className='Home-AboutSection-Main'>
                    <img src={PageImage2} alt="" />
                    <div className='Home-AboutSection-Info'>
                        <h2>About AITutorLabs</h2>
                        <p>
                            AITutorLabs is an online learning platform committed to making AI and digital education accessible, career-oriented, and inclusive for learners regardless of geography or background. We empower students and educators through mentor-led, hands-on online training in AI literacy, digital skills, and cyber safety, with a strong focus on privacy and responsible technology use. By offering instruction in Hindi, we enable learners from remote and underserved communities to engage and learn with confidence, working closely with teachers and NGO mentors to create equitable and scalable impact.
                        </p>
                    </div>
                </div>
                <div className='Home-FounderSection-Main'>
                    <h2>Passionate Innovators from India and UAE</h2>
                    <div className='Home-FounderSection-Flex'>
                        <div className='Home-FounderSection-Card'>
                            <img src={Founder1} alt=""  className='Home-FounderSection-Card-One' />
                            <div className='Home-FounderSection-Card-Info'>
                                <h3>Navya Mundhra (India)</h3>
                                <p>SPCEP-certified Python Programmer | HTML, CSS & AI Tools, AI / ML </p>
                                <span>“Empowering teachers with AI skills can unlock opportunities for countless children.”</span>
                            </div>
                        </div>
                        <div className='Home-FounderSection-Card'>
                            <img src={Founder2} alt="" />
                            <div className='Home-FounderSection-Card-Info'>
                                <h3>Saksham Kukreja (India)</h3>
                                <p>CEP-certified Python Programmer | Skilled in HTML, AI Tools, AI / ML </p>
                                <span>“Technology empowers people and opens doors to a better future.”</span>
                            </div>                            
                        </div>
                        <div className='Home-FounderSection-Card'>
                            <img src={Founder3} alt="" />
                            <div className='Home-FounderSection-Card-Info'>
                                <h3>Ahaan Sareen (India)</h3>
                                <p>PCEP-certified Python Programmer | HTML, CSS & AI Tools, AI / ML </p>
                                <span>“Dedicated to making tech education simple, practical, and engaging.”</span>
                            </div>                            
                        </div>
                        <div className='Home-FounderSection-Card'>
                            <img src={Founder4} alt="" />
                            <div className='Home-FounderSection-Card-Info'>
                                <h3>Sri Gupta (UAE)</h3>
                                <p>PCEP-certified Python Programmer | HTML, CSS & AI Tools, AI / ML</p>
                                <span>“Teaching helps me learn deeply and give back. AI can reshape how we learn and live.”</span>
                            </div>                            
                        </div>
                        <div className='Home-FounderSection-Card'>
                            <img src={Founder5} alt=""  className='Home-FounderSection-Card-Five' />
                            <div className='Home-FounderSection-Card-Info'>
                                <h3>Zysha Gupte (UAE)</h3>
                                <p>Aspiring Python Programmer | HTML, Python (PCEP in progress), AI Tools</p>
                                <span> “Learning to code opens endless possibilities — it’s where creativity meets logic.”</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Home-CollaburatorsSection-Main'>
                    <h2>Our collaborator</h2>
                    <div className='Home-CollaburatorsSection-Flex'>
                        <div className='Home-CollaburatorsSection-Cards'>
                            <img src={Colab1} alt="" />
                            <span>Code Minors</span>
                        </div>
                        <div className='Home-CollaburatorsSection-Cards'>
                            <img src={Colab2} alt="" />
                            <span>SteamVision Foundation</span>
                        </div>
                        <div className='Home-CollaburatorsSection-Cards'>
                            <img src={Colab3} alt="" />
                            <span>Nai Disha</span>
                        </div>
                        <div className='Home-CollaburatorsSection-Cards'>
                            <img src={Colab4} alt="" />
                            <span>TNS Foundation</span>
                        </div>
                    </div>
                </div>
                <div className='Home-AppSection-Main'>
                    <img src={PageImage3} alt="" />
                    <div className='Home-AppSection-Info'>
                        <h2>Coming <br />Soon...</h2>
                        <p>Our upcoming Playstore app will make learning even more accessible. Learners will be able to access AI lessons, coding practice, and cyber safety resources anytime, anywhere.</p>
                        <a href="/" disabled>Coming Soon</a>
                    </div>
                </div>
                <div className='Home-WorkshopSection-Main'>
                    <div className='Home-WorkshopSection-Info'>
                        <h2>Join Our Free Workshops</h2>
                        <p>
                            Learn AI, coding, and future-ready digital skills for free. Our workshops are conducted weekly online and in selected locations, using simple language and hands-on teaching.
                        </p>
                        <div className='Home-WorkshopSection-Social'>
                            <span>Follow Us</span>
                            <div className='Home-WorkshopSection-Social-Icons'>
                                <a href="https://www.instagram.com/aitutorlabs/"><img src={Instagram} alt="" /></a>
                                <a href="https://www.linkedin.com/company/ai-tech-labs/"><img src={LinkedIn} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={Workshop}   className='Home-WorkshopSection-Form'>
                        <div className='Home-WorkshopSection-Form-Element'>
                            <label for="fname">Your Name</label>
                            <input type="text" name="fname" placeholder='Your Full name' value={fname} onChange={(e) => setFname(e.target.value)} />
                        </div>
                        <div className='Home-WorkshopSection-Form-Element'>
                            <label for="fphone">Phone No.</label>
                            <input type="tel" name="fphone" placeholder='Your phone no.' value={fphone} onChange={(e) => setFphone(e.target.value)}/>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className='Home-VolunteerHighlight-Main'>
                    <div className='Home-VolunteerHighlight-Info'>
                        <h2>Become a Volunteer</h2>
                        <div  className='Home-VolunteerHighlight-Info-Description'>
                            <p>
                                Want to teach, inspire, and create impact? Join AITutorLabs as a volunteer mentor and help learners build digital skills that can change their future.
                            </p>
                            <a href="/volunteer">Become a Volunteer</a>
                        </div>
                    </div>
                    <div className='Home-VolunteerHighlight'>
                        <div className='Home-VolunteerHighlight-Card Home-VolunteerHighlight-Card-One'>
                            <h3>Make Every Hour Count</h3>
                            <p>
                                By volunteering your time, you help us conduct sessions, mentor learners, and reach communities that need guidance the most.
                            </p>
                        </div>
                        <div className='Home-VolunteerHighlight-Split'>
                            <div className='Home-VolunteerHighlight-Card Home-VolunteerHighlight-Card-Two'>
                                <h3>Share Knowledge. Shape Futures.</h3>
                                <p>
                                    Your knowledge of AI tools, technology, cyber safety, or education helps learners become skilled, informed, and future-ready.
                                </p>
                            </div>
                            <div className='Home-VolunteerHighlight-Card Home-VolunteerHighlight-Card-Three'>
                                <h3>Support a Growing Movement</h3>
                                <p>
                                    Whether it’s planning, outreach, content creation, or coordination — your support strengthens our mission and expands our impact.
                                </p>
                            </div>
                        </div>
                        <div className='Home-VolunteerHighlight-Card Home-VolunteerHighlight-Card-Four'>
                            <h3>Turn Experience Into Empowerment</h3>
                            <p>
                                Your real-world experience helps students and mentors gain practical insights, confidence, and clarity about future opportunities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='Home-DonateHighlight' id='Home-Donate'>
                    <div className='Home-DonateHighlight-Info'>
                        <div className='Home-DonateHighlight-Info-DetailsMain'>
                            <h2>Your Support. Our Impact. Their Future.</h2>
                        </div>
                        <div className='Home-DonateHighlight-Info-Details'>
                            <p>
                                Every device donated helps us bridge the digital divide and bring quality AI education and cyber safety awareness to those who need it the most. Together, we’re building a generation that is skilled, safe, and job-ready.
                            </p>
                            <a href="/donate"><button>Donate a Device Now</button></a>
                        </div>
                    </div>
                    <div className='Home-DonateHighlight-InfoCards'>
                        <div  className='Home-DonateHighlight-InfoCards-Main'> 
                            <h3>
                                Driving Digital Inclusion Through Education
                            </h3>
                            <p>
                                AITutorLabs is transforming lives by providing access to AI tools, cyber safety education, and mentorship to underprivileged students and educators across rural India.
                            </p>
                        </div>
                        <div className='Home-DonateHighlight-InfoCards-Flex'>
                            <div className='Home-DonateHighlight-InfoCards-Flex-Cards'>
                                <h3>600+</h3>
                                <p>Students & Mentors Trained</p>
                            </div>
                            <div className='Home-DonateHighlight-InfoCards-Flex-Cards'>
                                <h3>150+</h3>
                                <p>Individuals Made Job-Ready</p>
                            </div>
                            <div className='Home-DonateHighlight-InfoCards-Flex-Cards'>
                                <h3>20+</h3>
                                <p>Cyber Safety Sessions Conducted</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Home-ContactSection-Flex'>
                    <div className='Home-ContactSection-Info-Flex'>
                        <h1>Get in touch</h1>
                        <div className='Home-ContactSection-Info-Element Home-ContactSection-Info-Email'>
                            <span>Email:</span>
                            <a href="mailto:admin@aitutorlabs.co.in">admin@aitutorlabs.co.in</a>
                        </div>
                        <div className='Home-ContactSection-Info-Element Home-ContactSection-Info-Phone'>
                            <span>Phone No:</span>
                            <a href="tel:+919930052169">+91 9930 052 169</a>
                            <a href="tel:+919999818009">+91 9999 818 009</a>
                        </div>
                        <div className='Home-ContactSection-Info-Element Home-ContactSection-Info-Social'>
                            <span>Follow Us</span>
                            <div className='Home-ContactSection-Info-Social-Icons'>
                                <a href="https://www.instagram.com/aitutorlabs/"><img src={Instagram} alt="" /></a>
                                <a href="https://www.linkedin.com/company/ai-tech-labs/"><img src={LinkedIn} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='Home-ContactSection-FormSection'>
                        <form onSubmit={Contact}  className='Home-ContactSection-FormSection-Form'>
                            <div className='Home-ContactSection-FormSection-Form-Flex'>
                                <div className='Home-ContactSection-FormSection-Form-Element'>
                                    <label for="fname">Your Name</label>
                                    <input type="text" name="fname" placeholder='Your Full name' value={fname} onChange={(e) => setFname(e.target.value)}/>
                                </div>
                                <div className='Home-ContactSection-FormSection-Form-Element'>
                                    <label for="fphone">Phone No.</label>
                                    <input type="tel" name="fphone" placeholder='Your phone no.' value={fphone} onChange={(e) => setFphone(e.target.value)}/>
                                </div>
                            </div>
                            <div className='Home-ContactSection-FormSection-Form-Element'>
                                <label for="fmessage">Message</label>
                                <textarea rows="6" name="fmessage" placeholder='Write something...' onChange={(e) => setFmessage(e.target.value)}/>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}