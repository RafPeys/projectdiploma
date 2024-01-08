import css from './ProductItem.module.css';
import { BASE_URL } from 'redux/productsAPI';

export default function ProductItem({
  image,
  title,
  price,
  discont_price,
  id,
  addtoCartHandler,
}) {
  const discount = () =>
    discont_price && Math.round((price / discont_price - 1) * 100);

  return (
    <li className={css.block}>
      <div className={css.imgBox}>
        <img className={css.img} src={`${BASE_URL}${image}`} alt={title}></img>
        <button onClick={addtoCartHandler} className={css.button}>
          Add to cart
        </button>
      </div>
      <div className={css.priceBlock}>
        {discont_price !== null ? (
          <>
            <div className={css.price}>{discont_price.toFixed(2)}$</div>
            <div className={css.oldPrice}>{price.toFixed(2)}$</div>
            <div className={css.discount}>{discount()}%</div>
          </>
        ) : (
          <>
            <div className={css.price}>{price.toFixed(2)}$</div>
          </>
        )}
      </div>
      <h3 className={css.title}>{title}</h3>
    </li>
  );
}
