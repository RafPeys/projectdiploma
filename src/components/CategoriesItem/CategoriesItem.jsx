import css from './CategoriesItem.module.css';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from 'redux/productsAPI';

export default function CategoriesItem({ image, title, id }) {
  return (
    <li className={css.block}>
      <NavLink to={`/category/${id}`}>
        <img src={`${BASE_URL}${image}`} alt={title} className={css.img}></img>
        <h3 className={css.title}>{title}</h3>
      </NavLink>
    </li>
  );
}
