import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import DropdownList from './DropdownList/DropdownList'

const mainInfo = {
  nameDrop: 'Account Settings',
  linksName: ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'],
  icon: 'public'
}

const Dropdown = () => {
  
  let [active, setActive] = useState(false)

  const onActive = (ev) => {
    setActive(ev)
  }

  return (
    <Routes>
      <Route path='/dropdown' element={
        <div>
          <div className="container">
            <div data-id="wrapper" className={active ? "dropdown-wrapper open" : "dropdown-wrapper"}>
              <button data-id="toggle" className="btn" onClick={(ev) => !active ? onActive(true) : onActive(false)}>
                <span>{mainInfo.nameDrop}</span>
                <i className="material-icons">{mainInfo.icon}</i>
              </button>
              <DropdownList active={ active } linksName={mainInfo.linksName} />
            </div>
          </div>
        </div>
      } />
    </Routes>
  )
}

export default Dropdown 