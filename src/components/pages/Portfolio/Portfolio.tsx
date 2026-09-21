import { useState } from 'react'
import { FaGithub, FaInfoCircle, FaTimes } from 'react-icons/fa'
import aaosImg from '../../../assets/aaos.png'
import aospImg from '../../../assets/aosp.png'
import posAospImg from '../../../assets/pos_aosp.png'
import mobComputingAospImg from '../../../assets/mob_computing_aosp.png.jpeg'
import './Portfolio.css'

type FilterType = 'all' | 'contributions' | 'personal'

interface Project {
  title: string
  category: Exclude<FilterType, 'all'>
  img: string
  shortDesc: string
  purpose?: string
  github?: string
  company?: string
  role?: string
  period?: string
  techStack?: string[]
  details?: string[]
}

const projects: Project[] = [
  {
    title: 'Enterprise Handheld Computing & Android One OS SDK',
    category: 'contributions',
    company: 'Datalogic',
    role: 'Android Engineer',
    period: 'Jun 2026 – Present',
    purpose: 'Enterprise Android SDK Development & System Integration for Handheld Mobile Computers',
    img: mobComputingAospImg,
    techStack: ['Android SDK', 'AOSP', 'Java', 'Kotlin', 'Mobile Computing', 'Hardware Integration'],
    shortDesc: 'Developed enterprise SDK features, refactored legacy modules, and performed comprehensive validation across custom Android builds for Datalogic handheld computing hardware.',
    details: [
      '[SDK] Developed and maintained enterprise SDK features and system integrations for custom Android builds across diverse Datalogic handheld computing hardware.',
      '[SDK] Issue Resolution & Delivery: Root-caused and resolved critical system defects, ensuring stability, high reliability, and adherence to aggressive release milestones.',
      '[SDK] Codebase Refactoring: Modernized legacy modules and refactored deprecated APIs, significantly improving maintainability and component efficiency.',
      'RC Sanity Testing: Performed sanity checks across target devices for each Release Candidate (RC) to ensure build stability.',
    ],
  },
  {
    title: 'Mitsubishi AAOS Infotainment Project',
    category: 'contributions',
    company: 'FPT Software',
    role: 'Android Automotive Developer',
    period: 'May 2025 – May 2026',
    purpose: 'Platform Migration: Legacy Linux to AAOS (PoC Bring-Up)',
    img: aaosImg,
    techStack: ['Android', 'Java', 'Kotlin', 'AOSP/AAOS', 'EVS', 'Emulator'],
    shortDesc: 'Migrated legacy embedded Linux architecture to Android Automotive OS (AAOS) for a next-gen IVI PoC, building custom emulators (Android 11 & 13), Diagnostic Service, EVS Camera bringup, and system apps.',
    details: [
      'Platform migration and PoC bring-up transitioning legacy embedded Linux OS to Android Automotive OS (AAOS) for next-generation in-vehicle infotainment.',
      'Android Automotive Developer: Configured and built custom Android 11 & 13 emulator environments for PoC device development and testing.',
      'Initialized and configured core AAOS system modules including Engineering Mode, Keyboard (IME), and Bluetooth Settings.',
      'Designed and implemented Diagnostic Service (config hub) to manage platform configurations and diagnostics.',
      'Supported EVS (Extended View System) Camera bringup for Rear Camera and Surround View on automotive PoC hardware.',
    ],
  },
  {
    title: 'Japanese OEM Smart POS Machine Project',
    category: 'contributions',
    company: 'FPT Software',
    role: 'Android System Developer',
    period: 'May 2025 – May 2026',
    purpose: 'Architecture Design & Implementation for Japanese OEM Smart POS Device PoC',
    img: posAospImg,
    techStack: ['Android', 'AOSP', 'Java', 'Kotlin', 'Software Architecture', 'PoC'],
    shortDesc: 'Contributed to system architecture design and software implementation for a next-generation Japanese OEM smart POS machine PoC, establishing platform foundations and hardware integration.',
    details: [
      'Contributed to system architecture design and platform-level software implementation for a next-generation Japanese OEM smart POS terminal PoC.',
      'Defined architectural patterns, component separation, and hardware abstraction interfaces for secure point-of-sale operations.',
      'Engineered core device services, peripheral device communications, and customized system-level components.',
      'Conducted technical feasibility studies and rapid prototyping to validate performance, security, and hardware compatibility under Japanese OEM retail standards.',
    ],
  },
  {
    title: 'Japanese OEM Smartphone Project',
    category: 'contributions',
    company: 'Thundersoft',
    role: 'Android AOSP System Application Developer',
    period: 'Jun 2024 – May 2025',
    purpose: 'AOSP Android 15 System Customization for Japanese OEM Smartphone',
    img: aospImg,
    techStack: ['Android 15', 'AOSP', 'Java', 'Kotlin', 'Soong Build System'],
    shortDesc: 'Engineered and customized core system applications on AOSP Android 15 (Java/Kotlin) for Japanese OEM smartphone platforms, focusing on Wallpaper architecture and core Settings modules.',
    details: [
      'Developed and customized core AOSP Android 15 system applications (Java/Kotlin) tailored to Japanese market OEM and carrier specifications.',
      'Owned and engineered the Wallpaper subsystem, implementing custom features and platform-level wallpaper management services.',
      'Developed and customized core Settings modules to meet stringent Japanese market product requirements and UX guidelines.',
      'Optimized application performance, memory footprint, and resolved critical system-level issues to satisfy high-reliability release standards.',
      'Collaborated in a fast-paced environment utilizing the Soong build system, Git/Gerrit, and cross-team code reviews.',
    ],
  },
  {
    title: 'Hyundai / KIA Digital Cockpit – AAOS Platform',
    category: 'contributions',
    company: 'Thundersoft',
    role: 'Android Automotive HMI Developer',
    period: 'May 2024 – May 2025',
    purpose: 'OS Migration: Android 9 → 10 Platform Upgrade & HMI Modernization',
    img: aaosImg,
    techStack: ['Android', 'Java', 'Soong Build System', 'AOSP/AAOS'],
    shortDesc: 'Upgraded AAOS platform and core system applications from Android 9 to Android 10, delivering HMI features across Settings, Engineering Mode, and Keyboard for the Hyundai / KIA digital cockpit.',
    details: [
      'OS version migration and API modernization from Android 9 to Android 10, ensuring backward compatibility and automotive-grade stability.',
      'Android Automotive HMI Developer (Team of 40): Owned multiple system applications on the automotive AIVI platform, including Settings (General, Sound, Display, Button), Engineering Mode, and Keyboard.',
      'Led migration of system applications from Android 9 to Android 10, ensuring API compatibility and feature parity across the AAOS platform.',
      'Implemented new features based on customer specifications, translating requirements into production-ready Android Automotive components.',
      'Maintained product stability and ensured on-time delivery through code reviews, regression testing, and proactive issue resolution.',
      'Optimized application performance and resolved critical system-level issues to meet automotive-grade quality standards.',
      'Maintained and updated technical specifications to reflect evolving customer requirements and platform changes.',
    ],
  },
  {
    title: 'Maruti Suzuki In-Cabin AAOS Infotainment',
    category: 'contributions',
    company: 'Bosch Global Software Technologies BGSW',
    role: 'Android Automotive HMI Developer',
    period: 'May 2023 – May 2024',
    purpose: 'Full-Stack Android 12 Head Unit (Lead HMI System App Development)',
    img: aaosImg,
    techStack: ['Android', 'Java', 'Soong Build System', 'AOSP/AAOS'],
    shortDesc: 'Contributed to full-stack Android 12 IVI head unit implementation from scratch, with core ownership of HMI system applications including SystemUI, Settings, Engineering Mode security, and Keyboard.',
    details: [
      'Greenfield development of a full-stack Android 12 In-Vehicle Infotainment (IVI) Head Unit, delivering end-to-end automotive platform software with specialized focus on HMI system apps.',
      'Android Automotive HMI Developer (Team of 5): Owned multiple system applications on the automotive AIVI platform, including SystemUI, Engineering Mode, Settings, and Keyboard.',
      'Implemented new features based on customer requirements, translating Figma designs and technical specifications into production-ready Android Automotive components.',
      'Designed and proposed technical approaches for complex features, including Engineering Mode security feature and a modular Keyboard architecture.',
      'Optimized application performance and resolved critical system-level issues to meet automotive-grade quality standards.',
      'Practiced Agile/Scrum methodology — contributed to sprint planning, backlog grooming, daily stand-ups, and retrospectives to maintain a predictable delivery cadence and drive continuous team improvement.',
    ],
  },
  {
    title: 'Renault–Nissan–Mitsubishi (RNM) Next-Gen AAOS Cockpit',
    category: 'contributions',
    company: 'Bosch Global Software Technologies BGSW',
    role: 'Android Developer',
    period: 'Dec 2021 – April 2023',
    purpose: 'Platform Maintenance, Custom AVD Emulation & XTS Certification (Android 11)',
    img: aaosImg,
    techStack: ['Bash/Shell', 'Linux', 'Soong Build System', 'AOSP', 'AAOS'],
    shortDesc: 'Maintained Android 11 automotive OS platform, developed automated custom Android Virtual Device (AVD) packaging for hardware-free development, and led XTS/CTS triage for OEM compliance.',
    details: [
      'Long-term platform maintenance of Android 11 AAOS, virtual device infrastructure automation, and certification test compliance.',
      'Android Emulator Developer (Team of 3): Automated AVD packaging from AOSP source code, enabling the dev team to run HMI and non-hardware-dependent features without physical devices.',
      'XTS Triage Engineer (Team of 2): Analyzed and diagnosed failures generated by XTS test runs, routed issues to responsible teams, and provided resolution guidance where applicable.',
    ],
  },
]

const filters: { id: FilterType; label: string }[] = [
  { id: 'all',           label: 'All'           },
  { id: 'contributions', label: 'Contributions' },
  { id: 'personal',      label: 'Side Projects' },
]

const Portfolio = () => {
  const [active, setActive] = useState<FilterType>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="portfolio">
      <ul className="filter-list">
        {filters.map((f) => (
          <li key={f.id}>
            <button
              className={`filter-btn ${active === f.id ? 'active' : ''}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="projects-grid">
        {filtered.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-img-wrap">
              <img src={p.img} alt={p.title} />
              <div className="project-links">
                {p.github && (
                  <a href={p.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                )}
                {p.details && (
                  <button
                    className="project-detail-btn"
                    aria-label="View details"
                    onClick={() => setSelected(p)}
                  >
                    <FaInfoCircle />
                  </button>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{p.title}</h3>
              {(p.role || p.period) && (
                <p className="project-meta">
                  {p.role}{p.role && p.period && ' · '}{p.period}
                </p>
              )}
              {p.purpose && (
                <p className="project-purpose">{p.purpose}</p>
              )}
              {p.techStack && (
                <ul className="tech-tags">
                  {p.techStack.map((t) => <li key={t} className="tech-tag">{t}</li>)}
                </ul>
              )}
              <p>{p.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-wrapper">
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <FaTimes />
            </button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-img-wrap">
              <img src={selected.img} alt={selected.title} />
            </div>
            <div className="modal-header">
              <h2>{selected.title}</h2>
              {selected.company && <p className="modal-company">{selected.company}</p>}
              {(selected.role || selected.period) && (
                <p className="modal-meta">
                  {selected.role}{selected.role && selected.period && ' · '}{selected.period}
                </p>
              )}
              {selected.purpose && (
                <p className="modal-purpose">{selected.purpose}</p>
              )}
              {selected.techStack && (
                <ul className="tech-tags">
                  {selected.techStack.map((t) => <li key={t} className="tech-tag">{t}</li>)}
                </ul>
              )}
            </div>
            <div className="modal-body">
              <ul>
                {selected.details?.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
