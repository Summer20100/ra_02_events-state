import s from './Layouts.module.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import IconSwitch from './IconSwitch/IconSwitch'


const Layouts = () => {
  let [state, onState] = useState('view_list')

  const onSwitch = (switcher) => {
    if (switcher === state) {
      onState('view_list')
    } else {
      onState('view_module')
    }
  }

  return (
    <Routes>
      <Route path='/layouts' element={
        <div className={s.container}>
          <IconSwitch icon={state} onSwitch={ onSwitch } />
        </div>
      } />
    </Routes>
  )
}

export default Layouts 