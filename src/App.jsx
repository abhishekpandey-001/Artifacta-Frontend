import About from './components/About'
import Collections from './components/Collections'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Testimonials from './components/Testimonials'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header />
      <About />
      <Collections />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
