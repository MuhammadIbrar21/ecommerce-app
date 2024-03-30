import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <hr />
            <div class="footer-top">
                <div class="contact-section">
                    <h3 class="white-text">Subscribe to our emails</h3>
                    <input placeholder='Email' required />
                </div>
            </div>
            <hr />
            <div class="footer-copyright">
                © 2024, Muhammad Ibrar - Gamica Cloud
            </div>
        </footer>
    )
}

export default Footer
