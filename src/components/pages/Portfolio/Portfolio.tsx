import { useState } from 'react'
// import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Portfolio.css'

type FilterType = 'all' | 'project' | 'android' | 'aosp' | 'aaos'

const projects: {
  title: string; category: Exclude<FilterType, 'all'>
  img: string; desc: string; github: string; demo: string | null
}[] = [
  {
    title: 'Lorem Project — Company Name',
    category: 'project',
    img: 'https://placehold.co/400x260/2e2e31/ffa500?text=Project',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contributed as an Android developer on this commercial project.',
    github: '#', demo: '#',
  },
  {
    title: 'Lorem Android App',
    category: 'android',
    img: 'https://placehold.co/400x260/2e2e31/3ddc84?text=Android+App',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Native Android application.',
    github: '#', demo: '#',
  },
  {
    title: 'AOSP Custom Build',
    category: 'aosp',
    img: 'https://placehold.co/400x260/2e2e31/3ddc84?text=AOSP',
    desc: 'Custom Android Open Source Project build with system modifications and enhancements.',
    github: '#', demo: null,
  },
  {
    title: 'AAOS Dashboard App',
    category: 'aaos',
    img: 'https://placehold.co/400x260/2e2e31/4285f4?text=AAOS',
    desc: 'Android Automotive OS dashboard application with custom UI and vehicle integrations.',
    github: '#', demo: '#',
  },
  {
    title: 'Lorem Kotlin App',
    category: 'android',
    img: 'https://placehold.co/400x260/2e2e31/7f52ff?text=Kotlin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kotlin coroutines, Compose UI.',
    github: '#', demo: '#',
  },
]

const filters: { id: FilterType; label: string }[] = [
  { id: 'all',     label: 'All'      },
  { id: 'project', label: 'Projects' },
  { id: 'android', label: 'Android'  },
  { id: 'aosp',    label: 'AOSP'     },
  { id: 'aaos',    label: 'AAOS'     },
]

const Portfolio = () => {
  const [active, setActive] = useState<FilterType>('all')

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="portfolio">
      {/* <ul className="filter-list">
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
      </ul> */}

      {/* <div className="projects-grid">
        {filtered.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-img-wrap">
              <img src={p.img} alt={p.title} />
              <div className="project-links">
                <a href={p.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                {p.demo && (
                  <a href={p.demo} aria-label="Live Demo" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div> */}
      {<div className="blog-placeholder">To be continued...</div>}
    </section>
  )
}

export default Portfolio
