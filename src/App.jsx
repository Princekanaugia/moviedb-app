import { useState } from 'react'
import './App.css'
import Search from './components/Search'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return <main>
    <div className='Patttern' />

    <div className='wrapper'>
      <header>
        <img src='./hero-img.png' alt='Hero Banner' />
        <h1>
          Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassel
        </h1>
      </header>

      <Search searchTrem={searchTerm} setSearchTerm={setSearchTerm}/>
      <h1 className='text-white'>{searchTerm}</h1>
    </div>
  </main>
}

export default App
