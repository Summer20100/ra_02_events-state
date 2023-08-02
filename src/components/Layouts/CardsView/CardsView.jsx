import s from './CardsView.module.css'

const CardsView = ({ products }) => {
  let productsItems = products.map((item, index) =>
    <div className={s.card} key={ index }>
      
      

      
        <div className={s.header}>
          <div className={s.name}>
            {item.name}
          </div>
          <div className={s.color}>
            {item.color}
          </div>
        </div>

        <img className={s.img} src={item.img} alt='Фото' />

        <div className={ s.footer }>
          <div className={ s.price }>{item.price}</div>
          <input className={ s.button } type='button' value='ADD TO CARD' />
        </div>
        
      
    </div>
  )

  return (
    <div className={ s.cards }>
      {productsItems}
    </div>
  )
}

export default CardsView  