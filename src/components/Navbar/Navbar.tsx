import type { TabType } from '../../App'
import './Navbar.css'

interface NavbarProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

const tabs: { id: TabType; label: string }[] = [
  { id: 'about',     label: 'About'     },
  { id: 'resume',    label: 'Resume'    },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog',      label: 'Blog'      },
  { id: 'contact',   label: 'Contact'   },
]

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => (
  <ul className="nav-list">
    {tabs.map((tab) => (
      <li key={tab.id}>
        <button
          className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      </li>
    ))}
  </ul>
)

export default Navbar
