import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch])
  return (
    <div className="App">
      <h1>Henry Countries App</h1>
    </div>
  );
}

export default App;
