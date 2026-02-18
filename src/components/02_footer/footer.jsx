import "./footer.css"

import Instagram from '../../images/social/Instagram.png'
import LinkedIn from '../../images/social/LinkedIn.png'

export default function Footer() {
    return (
        <div>
            <div className="Footer-Section-Main">
                <div className="Footer-Section-Wordmark">
                    <h1>AITutorLabs</h1>
                </div>
                <div className="Footer-Section-Internals">
                    <div>
                        <a href="/">Home</a>
                        <a href="/contact">Contact Us</a>
                        {/* <a href="/blogdashboard">Blogs</a> */}
                    </div>
                    <div>
                        <a href="/volunteer"><button className="Footer-Section-Internals-Volunteer">Become a Volunteer</button></a>
                        <a href="/donate"><button className="Footer-Section-Internals-Donate">Donate</button></a>
                    </div>
                </div>
                <div className="Footer-Section-Contact">
                    <div className='Footer-Section-Contact-Element Footer-Section-Contact-Email'>
                        <span>Email:</span>
                        <a href="mailto:admin@aitutorlabs.co.in">admin@aitutorlabs.co.in</a>
                    </div>
                    <div className='Footer-Section-Contact-Element Footer-Section-Contact-Phone'>
                        <span>Phone No:</span>
                        <a href="tel:+919930052169">+91 9930 052 169</a>
                        <a href="tel:+919999818009">+91 9999 818 009</a>
                    </div>
                    <div className='Footer-Section-Contact-Element Footer-Section-Contact-Social'>
                        <span>Follow Us</span>
                        <div className='Footer-Section-Contact-Social-Icons'>
                            <a href="https://www.instagram.com/aitutorlabs/"><img src={Instagram} alt="" /></a>
                            <a href="https://www.linkedin.com/company/ai-tech-labs/"><img src={LinkedIn} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-Section-Terms">
                <a href="/termsconditions">Terms & Conditions</a>
                <a href="/privacypolicies">Privacy Policies</a>
            </div>
        </div>
    );
}