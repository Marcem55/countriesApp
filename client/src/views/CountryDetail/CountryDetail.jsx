import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import NavBar from '../../components/NavBar/NavBar'
import { clearPage, getCountryDetail } from '../../redux/actions/index'
import './CountryDetail.css'

const CountryDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  // console.log(id);
  const country = useSelector((state) => state.countryDetail)

  useEffect(() => {
    dispatch(getCountryDetail(id))
    dispatch(clearPage())
  }, [dispatch, id])

  return (
    <>
      <NavBar />
      {country
        ? (
          <div className='detailContainer'>
            <img className='imgDetail' src={country?.image} alt={country?.name} />
            <div className='countryGeo'>
              <h3 className='name'>Name: <span>{country?.name}</span></h3>
              <h3 className='capital'>Capital: <span>{country?.capital}</span></h3>
              <h3 className='continent'>Continent: <span>{country?.continent}</span></h3>
              <h3 className='subregion'>Subregion: <span>{country?.subregion}</span></h3>
            </div>
            <div className='areaPopulationContainer'>
              <img src='https://img.icons8.com/metro/24/000000/area-chart.png' alt='area' />
              <p className='area'>{`Area: ${country?.area} kms2`}</p>
              <img src='https://img.icons8.com/material-rounded/26/000000/conference-call.png' alt='population' />
              <p className='population'>Population: {country?.population}</p>
            </div>
            <div className='activitiesContainer'>
              <h3 className='actTitle'>Activities</h3>
              {country?.activities.length > 0
                ? country.activities.map(a => {
                    return (
                      <div key={a.id}>
                          <p className='activityName'>• {a.name}</p>
                          <p><span className='actStats'>Difficulty: </span>{a.difficulty}</p>
                          <p><span className='actStats'>Duration: </span>{a.duration}hs</p>
                          <p><span className='actStats'>Season: </span>{a.season}</p>
                        </div>
                    )
                  })
                : <p>This country doesn't have activities yet</p>}
            </div>
          </div>

          )
        : (
          <h1>Loading...</h1>
          )}
    </>
  )
}

export default CountryDetail
