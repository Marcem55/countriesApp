import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import { clearPage, getCountryDetail } from '../../redux/actions/index';
import './CountryDetail.css';

const CountryDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // console.log(id);
    const country = useSelector((state) => state.countryDetail);
    
    useEffect(() => {
        dispatch(getCountryDetail(id));
        dispatch(clearPage());
    }, [dispatch, id]);
    
    return (
        <>
        <NavBar />
        {country ? (
            <div>
                <img src={country?.image} alt={country?.name}/>
                <h1>{country?.name}</h1>
                <h3>{country?.capital}</h3>
                <h2>{country?.continent}</h2>
                <h4>{country?.subregion}</h4>
                <p>{`${country?.area} kms2`}</p>
                <p>Population: {country?.population}</p>
                <h3>Activities</h3>
                {country?.activities.length > 0 ? country.activities.map(a => {
                    return (
                        <div key={a.id}>
                            <p>{a.name}</p>
                            <p>Difficulty: {a.difficulty}</p>
                            <p>Duration: {a.duration}hs</p>
                            <p>Season: {a.season}</p>
                        </div>
                    )
                })
                : <p>This country don't have activities yet</p>}
            </div>

        ) :
        (
            <h1>Loading...</h1>
        )}
        </>
    )
}

export default CountryDetail;