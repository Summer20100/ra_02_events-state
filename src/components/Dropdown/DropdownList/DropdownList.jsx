// import s from './DropdownList.module.css'

const DropdownList = ({ linksName, active }) => {
  console.log(active)
  let linkSet = linksName.map((link, ind) => 
    <li className={ind === 0 ? 'active' : ''} key={ ind }><a href="#">{ link }</a></li>
  )

  return (
    <div >
      <ul data-id="dropdown" className="dropdown">
        { linkSet }
      </ul>
    </div>
  )
}

export default DropdownList 