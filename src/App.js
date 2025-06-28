import React from 'react'
import MovieCard from './components/MovieCard'

const App = () => {
  return (
    <div>
      <MovieCard {{title: "Tims Film"}} />
    </div>
  )
}

export default App