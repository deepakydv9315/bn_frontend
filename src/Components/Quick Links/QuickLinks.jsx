import "./QuickLinks.scss";
import { Link } from 'react-router-dom';


const QuickLinks = () => {
  return (
    <section className="cards">
    <article className="card card--1">

    <div className="card__img"></div>
    <Link to="/protein" className="card_link">
     <div className="card__img--hover"></div>
    </Link>

    <h3 className="card__title">Protein</h3>
    </article> 

    <article className="card card--1">

<div className="card__img"></div>
<Link to="/protein" className="card_link">
 <div className="card__img--hover"></div>
</Link>

<h3 className="card__title">Protein</h3>
</article>

<article className="card card--1">

<div className="card__img"></div>
<Link to="/protein" className="card_link">
 <div className="card__img--hover"></div>
</Link>

<h3 className="card__title">Protein</h3>
</article>
    </section>
  )
}

export default QuickLinks;

