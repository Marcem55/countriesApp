import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar'
import SearchAndFilterBar from '../../components/Search&FilterBar/SearchAndFilterBar'
import './Home.css'

const Home = () => {
  const countries = useSelector(state => state.countriesCopy)
  console.log(countries)

  // PAGINACION
  // Estado para pagina actual
  // Estado para cantidad de cards por pagina

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  // const [itemsPageOne] = useState(9);

  // Necesito 3 variables para saber cuantas paginas voy a necesitar
  const lastItemPerPage = currentPage * itemsPerPage
  const firstItemPerPage = lastItemPerPage - itemsPerPage
  const currentPageItems = countries?.slice(firstItemPerPage, lastItemPerPage)
  // console.log(currentPageItems);
  const pages = []
  const numOfPages = Math.ceil(countries.length / itemsPerPage)

  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i)
  }

  const pagination = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
    if (page === 1) {
      setItemsPerPage(9)
    } else {
      setItemsPerPage(10)
    }
  }

  const renderPages = pages.map(page => (
    <li key={page}>
      <div>
        <button className='pageBtn' onClick={e => pagination(e, page)}>
          {page}
        </button>
      </div>
    </li>
  ))

  return (
    <div className='home'>
      <NavBar />
      <SearchAndFilterBar />
      <Cards countries={currentPageItems} />
      <ul className='pagination'>
        {renderPages}
      </ul>
    </div>
  )
}

export default Home
