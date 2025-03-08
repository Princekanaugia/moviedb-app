import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'

const API_BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'appilcaton/json',
    Authorization:`Bearer ${API_KEY}`
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`Failed to Fetch Movies`)
      }

      const data = await response.json();

      if (data.response === 'False') {
        setErrorMessage(data.Error || 'Failed to Fetch Movies')
      }

    }
    catch (error)  {
      console.error(`Error fetching movies: ${error}`)
      setErrorMessage('Error Fetching Movies. Please Try Again Later.');
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return <main>
    <div className='Patttern' />

    <div className='wrapper'>
      <header>
        <img src='./hero-img.png' alt='Hero Banner' />
        <h1>
          Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassel
        </h1>

        <Search searchTrem={searchTerm} setSearchTerm={setSearchTerm}/>
      </header>

      <section className='all-movies'>
        <h2>All Movies</h2>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </section>
      <h1 className='text-white'>{searchTerm}</h1>
    </div>
  </main>
}

export default App
