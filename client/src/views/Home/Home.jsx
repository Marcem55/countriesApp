import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar'
import SearchAndFilterBar from '../../components/Search&FilterBar/SearchAndFilterBar'
import './Home.css'

const Home = () => {
  const countries = useSelector(state => state.countriesCopy)
  // console.log(countries)

  // PAGINACION
  // Estado para pagina actual
  // Estado para cantidad de cards por pagina

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  // const [itemsPageOne] = useState(9);

  // Necesito 3 variables para saber cuantas paginas voy a tener
  const lastItemPerPage = currentPage * itemsPerPage
  const firstItemPerPage = lastItemPerPage - itemsPerPage
  const currentPageItems = countries?.slice(firstItemPerPage, lastItemPerPage)
  // console.log(currentPageItems);
  // const pages = []
  const numOfPages = Math.ceil(countries.length / itemsPerPage)

  // for (let i = 1; i <= numOfPages; i++) {
  //   pages.push(i)
  // }

  // const pagination = (e, page) => {
  //   e.preventDefault()
  //   setCurrentPage(page)
  // }

  // const renderPages = pages.map(page => (
  //   <li key={page}>
  //     <div>
  //       <button className='pageBtn' onClick={e => pagination(e, page)}>
  //         {page}
  //       </button>
  //     </div>
  //   </li>
  // ))

  // SI CAMBIAN LOS FILTROS, QUE RESETEE LA PAGINACION
  useEffect(() => {
    setCurrentPage(1)
  }, [countries])

  const nextPage = () => {
    currentPage < numOfPages ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage)
  }

  const previousPage = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)
  }

  const rightButton = () => {
    return currentPage === numOfPages ? '' : <button className='pageBtn' onClick={nextPage}>{'>>'}</button>
  }

  const leftButton = () => {
    return currentPage === 1 ? '' : <button className='pageBtn' onClick={previousPage}>{'<<'}</button>
  }

  return (
    <div className='home'>
      <NavBar />
      <SearchAndFilterBar />
      {currentPageItems.length > 0 ? <Cards countries={currentPageItems} /> : <div className='notFound'><h3 className='notFoundP'>Country not found</h3><iframe src='https://giphy.com/embed/UOdoMz3baCENO' width='360' height='240' frameBorder='0' class='giphy-embed' allowFullScreen /></div>}
      {/* <ul className='pagination'>
        {renderPages}
      </ul> */}
      <div className='buttons'>{leftButton()}<p>{currentPage}</p>{rightButton()}</div>
    </div>
  )
}

export default Home
