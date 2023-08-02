import s from './IconSwitch.module.css'
import store from './../store/store'
import CardsView from '../CardsView/CardsView'
import ListView from '../ListView/ListView'

const IconSwitch = ({ onSwitch, icon }) => {

  const cangeView = (img) => {
    if (img === 'view_module') {
      return <ListView  products={ store }/>
    } else {
      return <CardsView products={ store }/>
    }
  }
  
  return (
    <div>
      <div className={ s.icon } onClick={() => onSwitch('view_module') }>
        <span className={ s.materialIcons }>{ icon }</span>
      </div>
      {cangeView(icon)}
    </div>
  )
}

export default IconSwitch 