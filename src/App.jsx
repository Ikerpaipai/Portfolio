import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Accueil from './page/accueil/accueil.component'
import NavigationBar from './navigation/navigation-bar/navigation-bar.component'
import AboutMe from './page/about-me/about-me.component'
import Contact from './page/contact/contact.component'
import ScrollToTop from './components/scroll-to-the-top/scroll-to-the-top.component'
import { useEffect, useState } from 'react'
import LoadingPage from './page/loading-page/loading-page.component'

function App() {
  const [showLoading, setShowLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if(location.pathname !== '/'){
      setShowLoading(false)
    }
    setTimeout(() => {
      setShowLoading(false)
    }, 3400);
  },[])

  if(showLoading && location.pathname === '/'){
    return <LoadingPage />
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<NavigationBar />}>
          <Route path='/' element={<Accueil />}/>
          <Route path='/about' element={<AboutMe />}/>
          <Route path='/contact' element={<Contact />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
