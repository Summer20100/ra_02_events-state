import s from './Toolbar.module.css'

const Toolbar = ({ filters, onSelectFilter }) => {
    let filterItems = filters.map((filter, ind) =>
    <div className={s.containerBtn}>
      <input className={s.radio} id={ind} type="radio" name="buttonFilters" key={ind} onClick={() => onSelectFilter(filter)} />
      <label className={s.label} htmlFor={ind}>{filter.nameBtn}</label>
    </div>
  )

  return (
    <div className={s.container}>
      {filterItems}
    </div>
  )
}

export default Toolbar


