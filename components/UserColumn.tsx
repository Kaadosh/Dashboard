import Image from "next/image";
import goofy from "../public/img/foto.png";
import '../public/style/userColumn.css'


const UserColumn = () => {
  return (
    <div>
      <ul className="column__list">
        <li className="foto"><Image src={goofy} alt="фото сотрудника" width={256} height={248}/>
        <div className="circle"><span className="circle__number">1</span></div>
        <div className="circle_2"><span className="circle__number_2">1</span></div>
        <div className="circle_3"><span className="circle__number_3">1</span></div>
        <div className="circle_4"><span className="circle__number_4">1</span></div>
        <p className="column__name">Ольга</p>
        <p className="column__conversion">10</p>
        </li>
        <li className="column__cqr"><div className="column__border">8</div></li>
        <li className="column__plan"><div className="column__border">8</div></li>
        <li className="column__dealsInProgress"><div className="column__border">100</div></li>
        <li className="column__dealsInProgress"><div className="column__border">100</div></li>
        <li className="column__dealsInProgress"><div className="column__border">100</div></li>
        <li className="column__dealsInProgress"><div className="column__border">100</div></li>
        <li className="column__dealsInProgress"><div className="column__border">100</div></li>
      </ul>
    </div>
  )
}

export default UserColumn;