import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import About from './components/pages/About/About'
import Resume from './components/pages/Resume/Resume'
import Portfolio from './components/pages/Portfolio/Portfolio'
import Blog from './components/pages/Blog/Blog'
import Contact from './components/pages/Contact/Contact'
import './App.css'

export type TabType = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact'

const tabLabels: Record<TabType, string> = {
  about:     'About Me',
  resume:    'Resume',
  portfolio: 'Portfolio',
  blog:      'Blog',
  contact:   'Contact',
}

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about')

  const renderPage = () => {
    switch (activeTab) {
      case 'about':     return <About />
      case 'resume':    return <Resume />
      case 'portfolio': return <Portfolio />
      case 'blog':      return <Blog />
      case 'contact':   return <Contact />
    }
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main-wrapper">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="main-content">
          <div className="content-header">
            <h2 className="page-title">{tabLabels[activeTab]}</h2>
          </div>
          <div className="page-body">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
