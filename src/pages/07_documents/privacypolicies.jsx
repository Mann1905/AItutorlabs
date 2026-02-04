import "./document.css"

import Header from "../../components/01_header/header";
import Footer from "../../components/02_footer/footer";

export default function PrivacyPolicies() {
    return (
        <div>
            <Header />
            <div className="documentation">
                <h1>Privacy Policy – AI Tutor Labs</h1>

                <p>
                    AI Tutor Labs respects your privacy and is committed to protecting your personal information.
                    This Privacy Policy explains how information is collected, used, and protected when you use
                    the AI Tutor Labs mobile application on Android and iOS platforms.
                </p>

                <p>
                    By registering for or using AI Tutor Labs, you agree to the practices described in this
                    Privacy Policy.
                </p>

                <h2>1. Information We Collect</h2>

                <h3>a. Registration Information</h3>
                <p>
                    To access core features, users must create an account. During registration, we may collect:
                </p>

                <p><strong>Direct Sign-Up:</strong></p>
                <ul>
                    <li>Name (optional)</li>
                    <li>Email address</li>
                    <li>Password (stored securely in encrypted form)</li>
                </ul>

                <p><strong>Google Sign-In:</strong></p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Profile photo (if provided by Google)</li>
                </ul>

                <p>
                    We do not access Google passwords or any sensitive Google account data.
                </p>

                <h3>b. Educational &amp; AI Interaction Data</h3>
                <p>
                    To deliver personalized AI-powered learning, we collect:
                </p>
                <ul>
                    <li>Questions and prompts entered by users</li>
                    <li>AI-generated responses</li>
                    <li>Learning progress and activity history</li>
                </ul>

                <p>
                    This data is used solely for educational purposes and app improvement.
                </p>

                <h3>c. Device &amp; Usage Data</h3>
                <p>
                    We may collect non-personal information such as:
                </p>
                <ul>
                    <li>Device model and operating system</li>
                    <li>App usage statistics</li>
                    <li>Crash and performance logs</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use collected information to:</p>
                <ul>
                    <li>Create and manage user accounts</li>
                    <li>Provide AI tutoring and learning features</li>
                    <li>Personalize educational content</li>
                    <li>Improve app performance and reliability</li>
                    <li>Communicate important updates (non-marketing)</li>
                </ul>

                <p>
                    We do not sell or rent personal data to third parties.
                </p>

                <h2>3. Google Sign-In &amp; Third-Party Authentication</h2>
                <p>
                    AI Tutor Labs uses Google Sign-In for authentication convenience.
                </p>
                <p>
                    Google’s use of information is governed by its own Privacy Policy.
                </p>
                <p>
                    We only receive basic profile information necessary for account creation.
                </p>

                <h2>4. Permissions</h2>
                <p>
                    Depending on enabled features, the app may request access to:
                </p>
                <ul>
                    <li>Camera</li>
                    <li>Microphone</li>
                    <li>Storage</li>
                </ul>

                <p>These permissions are:</p>
                <ul>
                    <li>Used only for educational or functional features</li>
                    <li>Optional and user-controlled</li>
                    <li>Revocable anytime through device settings</li>
                </ul>

                <h2>5. Data Sharing &amp; Storage</h2>
                <p>We may share limited data only:</p>
                <ul>
                    <li>
                        With trusted service providers (authentication, AI processing, analytics)
                    </li>
                    <li>To comply with legal obligations</li>
                </ul>

                <p>
                    All partners follow strict data protection standards.
                </p>

                <h2>6. Data Security</h2>
                <p>We use industry-standard security measures including:</p>
                <ul>
                    <li>Encrypted data storage</li>
                    <li>Secure authentication methods</li>
                    <li>Restricted access controls</li>
                </ul>

                <p>
                    Despite our efforts, no system can guarantee complete security.
                </p>

                <h2>7. Children’s Privacy</h2>
                <p>
                    AI Tutor Labs is intended for educational use.
                </p>
                <p>
                    We do not knowingly collect personal information from children under 13 without parental
                    consent.
                </p>
                <p>
                    If you believe a child has provided personal data, please contact us for removal.
                </p>

                <h2>8. User Rights &amp; Account Control</h2>
                <p>Users have the right to:</p>
                <ul>
                    <li>Access and update account information</li>
                    <li>Request account deletion</li>
                    <li>Withdraw permissions at any time</li>
                    <li>Stop using the app without penalty</li>
                </ul>

                <h2>9. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy periodically. Updates will be posted here with a revised
                    date.
                </p>

                <h2>10. Contact Us</h2>
                <p>
                    For questions, concerns, or data requests, contact:
                </p>
                <p>
                    <strong>AI Tutor Labs</strong><br />
                    Email: <a href="mailto:admin@aitutorlabs.co.in">admin@aitutorlabs.co.in</a>
                </p>
            </div>
            <Footer />
        </div>
    );
}