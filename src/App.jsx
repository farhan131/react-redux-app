import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import { Route, Routes, ScrollRestoration, useLocation } from 'react-router-dom'
import Blog from './components/Blog'
import ScrollTopComponent from './components/scrollTopComponent'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { activate, deactivate } from './store/scrollTopSlice'
import PortfolioDetails from './components/PortfolioDetails'
import BlogDetails from './components/BlogDetails'
import Preloader from './components/Preloader'

function App() {

  const dispatch = useDispatch()
  const { pathname } = useLocation()

  // show/hide scroll to top button
  useEffect(() => {
    function toggleScrollTop() {
      window.scrollY > 100 ? dispatch(activate()) : dispatch(deactivate());
    }
    window.addEventListener('load', toggleScrollTop)
    document.addEventListener('scroll', toggleScrollTop)

    return () => {
      window.removeEventListener('scroll', toggleScrollTop)
      document.removeEventListener('scroll', toggleScrollTop)
    }

  })

  useEffect(() => {
    // reset scroll when path changes
    window.scrollTo(0, 0)
    // change classes on body tag when path changes
    if (pathname === '/') {
      document.querySelector('body').setAttribute('class', 'index-page')
    }
    if (pathname === '/blog') {
      document.querySelector('body').setAttribute('class', 'blog-page')
    }
  }, [pathname])

  useEffect(function () {
    GLightbox({
      selector: '.glightbox'
    });
  })

  return (
    <>
      <Header />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:blog-title' element={<BlogDetails />} />
        <Route path='/portfolio-details/:item' element={<PortfolioDetails />} />
      </Routes>
      <Footer />
      <ScrollTopComponent />
      <Preloader />
    </>
  )
}

export default App
