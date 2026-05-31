import './Resume.css'

const education = [
  {
    degree: "Master's Degree in Software and Data Engineering",
    school: 'Gustave Eiffel University',
    period: '2019 — 2021',
    bullets: [],
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: 'Gustave Eiffel University',
    period: '2015 — 2019',
    bullets: [],
  },
]

const experience: {
  role: string; company: string; period: string; bullets: string[]
}[] = [
  {
    role: 'Android Automotive Developer',
    company: 'FPT Software',
    period: 'May 2025 — Present',
    bullets: [
      '[Android Automotive] Set up Android 11 & 13 emulators; initialized Engineering Mode, Keyboard (IME), and Bluetooth Settings; implemented Diagnostic Service (config hub); supported EVS Camera bringup (Rear Camera, Surround View) for a PoC device.',
      '[POS] Participated in POS project — contributed to architecture design and implementation for a new device PoC.',
    ],
  },
  {
    role: 'Android Automotive Developer',
    company: 'Thundersoft',
    period: 'Jun 2024 — May 2025',
    bullets: [
      '[Smartphone] Developed & maintained system applications on AOSP Android 15 (Java/Kotlin) — Wallpaper and Settings core modules.',
      '[Android Automotive HMI] Maintained AAOS Android 10 HMI applications — Settings, Engineering Mode, Keyboard; resolved release-critical issues.',
    ],
  },
  {
    role: 'Android Automotive Developer',
    company: 'Bosch Global Software Technologies (BGSW)',
    period: 'Dec 2021 — May 2024',
    bullets: [
      '[Android Automotive HMI] Developed infotainment HMI applications (Java, AOSP Android 12); owned Keyboard module; implemented lock/unlock and factory mode features; resolved critical issues across Settings and System applications.',
      '[Certification] Participated in Google Certification process for Bosch Android automotive devices; triaged CTS, STS, and ATS issues.',
      '[Android Emulator] Built custom Android OS images and emulator environments; authored AVD packaging automation scripts (Bash/Shell).',
    ],
  },
  {
    role: 'Research Assistant — Graduation Project',
    company: 'Gustave Eiffel University',
    period: 'Apr 2021 — Sep 2021',
    bullets: [
      'Researched RDF data anonymization; integrated algorithms into an RDF DBMS with per-user access control.',
    ],
  },
  {
    role: 'Intern Software Developer',
    company: 'ICONEUS',
    period: 'Apr 2020 — Sep 2020',
    bullets: [
      'Contributed to a neuroimaging system: migrated SCons → CMake, wrote library packaging scripts (Python), implemented customer data encryption (Vigenère Cipher, C++) and copyright database (C++, MySQL).',
    ],
  },
]

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Kotlin', 'C/C++', 'Python', 'Bash/Shell'],
  },
  {
    category: 'Android',
    skills: ['Android SDK', 'MVVM', 'Clean Architecture', 'Multithreading', 'Handler/Looper', 'Jetpack Compose'],
  },
  {
    category: 'AOSP / AAOS',
    skills: ['AOSP', 'AAOS', 'Soong Build System', 'AIDL / HIDL', 'Binder IPC'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    skills: ['Android Studio', 'VS Code', 'Git', 'JIRA', 'Rational Team Concert', 'CMake', 'Linux'],
  },
  {
    category: 'AI Tools',
    skills: ['GitHub Copilot', 'ChatGPT', 'Gemini'],
  },
]

const Resume = () => (
  <section className="resume">
    <div className="resume-columns">
      <div>
        <h3 className="resume-heading">🎓 Education</h3>
        <ul className="timeline">
          {education.map((e) => (
            <li key={e.degree} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-period">{e.period}</span>
                <h4>{e.degree}</h4>
                <p className="timeline-company">{e.school}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="resume-heading" style={{ marginTop: 36 }}>⚡ Skills</h3>
        <div className="skill-groups">
          {skillGroups.map((g) => (
            <div key={g.category}>
              <p className="skill-group-label">{g.category}</p>
              <ul className="skill-tags">
                {g.skills.map((s) => (
                  <li key={s} className="skill-tag">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="resume-heading" style={{ marginTop: 36 }}>🌐 Languages</h3>
        <ul className="lang-list">
          <li><span className="lang-name">Vietnamese</span><span className="lang-level">Native</span></li>
          <li><span className="lang-name">English</span><span className="lang-level">Intermediate</span></li>
          <li><span className="lang-name">French</span><span className="lang-level">Intermediate</span></li>
        </ul>

        <h3 className="resume-heading" style={{ marginTop: 36 }}>🎯 Hobbies</h3>
        <ul className="hobby-list">
          <li>🎮 Video Games</li>
          <li>🏠 Home Decor &amp; Interior Design</li>
          <li>⚽ Watch Soccer</li>
        </ul>
      </div>

      <div>
        <h3 className="resume-heading">💼 Experience</h3>
        <ul className="timeline">
          {experience.map((e) => (
            <li key={`${e.role}-${e.company}`} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-period">{e.period}</span>
                <h4>{e.role}</h4>
                <p className="timeline-company">{e.company}</p>
                <ul className="timeline-bullets">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Resume

