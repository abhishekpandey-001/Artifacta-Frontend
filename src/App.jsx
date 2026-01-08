import About from './components/About'
import Collections from './components/Collections'
import Header from './components/Header'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Collections/>
      <Testimonials/>
    </div>
  )
}

export default App
