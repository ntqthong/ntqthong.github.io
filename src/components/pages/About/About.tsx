import { SiAndroid, SiAndroidstudio, SiClaude, SiKotlin } from 'react-icons/si'
import { FaJava, FaCar, FaCode, FaMobileAlt, FaRobot } from 'react-icons/fa'
import { GoCopilot } from 'react-icons/go'
import './About.css'

const services = [
  {
    icon: <SiAndroid />,
    title: 'Android System (AOSP / AAOS)',
    desc: 'Android Open Source Project and Android Automotive OS customization, system application development, and platform integration.',
    color: '#3ddc84',
  },
  {
    icon: <FaCode />,
    title: 'Framework & Services',
    desc: 'Android framework development and system services implementation, working deep in the platform layer.',
    color: '#7f52ff',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Android Native Applications',
    desc: 'Self-driven Android native application development — from architecture design to publishing on Google Play.',
    color: '#ffa500',
  },
  {
    icon: <FaRobot />,
    title: 'AI Research & Application',
    desc: 'Exploring practical AI usage — effective prompting, AI-assisted development, and integrating AI tools into daily workflows.',
    color: '#4285f4',
  },
]

const skills = [
  { icon: <SiAndroidstudio />,  label: 'Android', color: '#3ddc84' },
  { icon: <SiKotlin />,   label: 'Kotlin',  color: '#7f52ff' },
  { icon: <FaJava />,     label: 'Java',    color: '#f89820' },
  { icon: <SiAndroid />,  label: 'AOSP',    color: '#3ddc84' },
  { icon: <FaCar />,      label: 'AAOS',    color: '#4285f4' },
  { icon: <GoCopilot />,  label: 'Github Copilot',    color: '#6e40c9' },
  { icon: <SiClaude />,  label: 'Claude',    color: '#d97757' }
]

const About = () => (
  <section className="about">
    <div className="about-text">
      <p>
        Android developer with 4+ years of experience specializing in AOSP and Android Automotive OS (AAOS).
        I hold a Master's degree in Software and Data Engineering from Gustave Eiffel University (France) and have
        contributed to large-scale projects across Europe (France), China (Shanghai), and Vietnam —
        working with leading corporations including Bosch Global Software Technologies and Thundersoft.
      </p>
      <p>
        Currently focused on Android System development (AOSP), with a goal of becoming a fullstack AOSP engineer —
        covering everything from the platform layer to HMI applications. Alongside that, I'm continuously expanding
        my knowledge in software architecture and Android native application development.
      </p>
    </div>

    <div className="section-block">
      <h3 className="block-title">What I'm Doing</h3>
      <ul className="services-grid">
        {services.map((s) => (
          <li key={s.title} className="service-card">
            <div className="service-icon" style={{ color: s.color }}>{s.icon}</div>
            <div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="section-block">
      <h3 className="block-title">Skills</h3>
      <ul className="skills-grid">
        {skills.map((s) => (
          <li key={s.label} className="skill-badge">
            <span className="skill-icon" style={{ color: s.color }}>{s.icon}</span>
            <span className="skill-label">{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default About
