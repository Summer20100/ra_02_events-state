import s from './ListView.module.css'

const ListView  = ({ products }) => {
  let productsItems = products.map((item, index) =>
    <div className={s.card} key={ index }>
      <div>
        <img className={s.img} src={item.img} alt='Фото' />
      </div>
      <div className={s.name}>
        {item.name}
      </div>
      <div className={s.color}>
        {item.color}
      </div>
      <div className={ s.price }>
        {item.price}
      </div>
      <input className={ s.button } type='button' value='ADD TO CARD' />
    </div>
  )

  return (
    <div className={ s.cards }>
      {productsItems}
    </div>
  )
}

export default ListView  