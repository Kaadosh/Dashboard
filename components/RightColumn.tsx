import '../public/style/leftColumn.css';
import '../public/style/rightColumn.css';



const RightColumn = () => {
  return (
    <div>
       <ul className="column__info">
        <li className="column__date">
         <div className="currency__items">
          <span className='currency__item'>83.36 USD</span>
          <span className='currency__item'>86.19 EUR</span>
          <span className='currency__item'>11.59 RUB</span>
            </div>
         <div className="index">по всему отделу</div>
        </li>
        <li className="column__right_text"><div className="border__column_right">70</div></li>
        
        <li className="column__right_text"><div className="border__column_right">70</div></li>
        <li className="column__right_text"><div className="border__column_right">70</div></li>
        <li className="column__right_text"><div className="border__column_right">70</div></li>
        <li className="column__right_text"><div className="border__column_right">70</div></li>
        <li className="column__right_text"><div className="border__column_right">70</div></li>
        <li className="column__right_text"><div className="border__column_right">70</div></li>
        <li className="column__right_text"><div className="border__column_right">70</div></li>
        
      </ul>
    </div>
  )
}

export default RightColumn;