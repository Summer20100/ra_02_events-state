import s from './Filter.module.css'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './Portfolio/Portfolio'

const Filter = () => {
 
  return (
    <Routes>
      <Route path='/filter' element={
        <div className={s.container}>
          <Portfolio />
        </div>
      } />
    </Routes>
  )
}

export default Filter


