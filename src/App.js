import './App.css';
import { loeAndmed } from './utils';
import Asukohad from './Asukohad';
import Detailid from './Detailid';
import { useState, useEffect } from 'react'

function App() {

  const asukohad = [
    {
      nimetus: 'Pärnu',
      lat: 58.38588,
      long: 24.49711,
      andmed: null
    },
    {
      nimetus: 'Tallinn',
      lat: 59.43696,
      long: 24.75353,
      andmed: null
    },
    {
      nimetus: 'Tartu',
      lat: 58.38062,
      long: 26.72509,
      andmed: null
    },
  ];

  const [aktiivne, setAktiivne] = useState(0)

  const [ilmPraegu, setIlmPraegu] = useState(undefined)

  const muudaAktiivset = async (index) => {
    const koht = asukohad[index];
    setAktiivne(index)
    const andmed = await loeAndmed({ lat: koht.lat, long: koht.long })
    setIlmPraegu(andmed)
    console.log(andmed)
  }

  useEffect(() => {
    console.log('renderdus')
    muudaAktiivset(0)
  }, [])

  return (
    <div className="container">
      <h1>ILM</h1>
      <div className='row'>
        <div className='col-4'>
          <Asukohad asukohad={asukohad} muudaAktiivset={muudaAktiivset} />
        </div>
        <div className='col-8'>
          <Detailid koht={asukohad[aktiivne]} ilmPraegu={ilmPraegu} />
        </div>
      </div>
    </div>
  );
}

export default App;
