import About from './components/About'
import Collections from './components/Collections'
import Header from './components/Header'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Collections/>
    </div>
  )
}

export default App
