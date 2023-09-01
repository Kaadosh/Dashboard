import '../public/style/leftColumn.css';



const LeftColumn = () => {
  return (
    <div>
       <ul className="column__info">
        <li className="column__date">
         <div className="date__item">09.06.2023 пятница</div>
         <div className="index">Показатели</div>
        </li>
        <li className="column__conversion_text"><div className="border__column_unfo">конверсия, %</div></li>
        
        <li className="column__cqr_text"><div className="border__column_cqr">CQR, %</div></li>
        <li className="column__plan_text"><div className="border__column_cqr">%, выполнения плана</div></li>
        <li className="column__deals_text"><div className="border__column_cqr">Количество сделок в работе</div></li>
        <li className="column__deals_text"><div className="border__column_cqr">количество неуспешных сделок</div></li>
        <li className="column__deals_text"><div className="border__column_cqr">количество неоплаченных счетов</div></li>
        <li className="column__deals_text"><div className="border__column_cqr">сумма неоплаченных счетов</div></li>
        <li className="column__deals_text"><div className="border__column_cqr">количество оплаченных счетов</div></li>
        
      </ul>
    </div>
  )
}

export default LeftColumn;