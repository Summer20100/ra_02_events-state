import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      <NavLink to='/filter'>
          <input type='button' className={ s.button } value='FILTER' />
      </NavLink>
      
      <NavLink to='/layouts'>
        <input type='button' className={ s.button } value='LAYOUTS' />
      </NavLink>
      
      <NavLink to='/dropdown'>
        <input type='button' className={ s.button } value='DROPDOWN' />
      </NavLink>    
    </div>
    
  )
}

export default Navbar 