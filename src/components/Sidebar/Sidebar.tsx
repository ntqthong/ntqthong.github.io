import {
  FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaGoogle, FaFacebook
} from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-top">
        <div className="avatar-wrap">
          <img
            src="/avatar.jpeg"
            alt="Nguyen Thai Quoc Thong"
            className="avatar"
          />
          <span className="available-badge">Available for work</span>
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Nguyen Thai Quoc Thong</h1>
          <p className="profile-nickname">Thomas</p>
          <p className="profile-title">Android Developer</p>
        </div>
      </div>

      <div className="contacts-wrap">
        <hr className="sidebar-divider" />
        <ul className="contact-list">
          <li>
            <div className="contact-icon"><FaEnvelope /></div>
            <div>
              <span className="contact-label">Email</span>
              <a href="mailto:ntqthong@gmail.com" className="contact-value">ntqthong@gmail.com</a>
            </div>
          </li>
          <li>
            <div className="contact-icon"><FaPhone /></div>
            <div>
              <span className="contact-label">Phone</span>
              <span className="contact-value">+84 (0) 964009854</span>
            </div>
          </li>
          <li>
            <div className="contact-icon"><FaBirthdayCake /></div>
            <div>
              <span className="contact-label">Birthday</span>
              <span className="contact-value">Feb 10, 1996</span>
            </div>
          </li>
          <li>
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <div>
              <span className="contact-label">Location</span>
              <span className="contact-value">Ho Chi Minh City, Vietnam</span>
            </div>
          </li>
        </ul>

        <hr className="sidebar-divider" />

        <ul className="social-list">
          <li>
            <a href="https://github.com/ntqthong/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ntqthong/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://g.dev/leroi" target="_blank" rel="noreferrer" aria-label="Google Developer Profile">
              <FaGoogle />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/iamntqthong/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
