import { useEffect, useState } from 'react'

import Section from './components/Section'

import './App.css';

const App = () => {
  
  const genreIncrement = 4
  const [ genres, setGenres ] = useState(null)
  const [ limit, setLimit ] = useState(genreIncrement)


  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getGenres")
    const responseBody = await response.json()
    // console.log(responseBody)
    setGenres(responseBody.data.reference_list.values)
  }
  console.log(limit)
  useEffect(() => {
    fetchData()
  }, [])

  console.log(genres)
  return (
   <>
   {/* If genres exists, we'll map it out : */}
    {genres && (Object.values(genres).map((genre) => (<Section genre={genre.value}/>)))}
    <div className="page-end"
    onMouseEnter={() => {
      setLimit(limit + genreIncrement)
    }}
    >
    </div>   
  </>
  )
}

export default App;
