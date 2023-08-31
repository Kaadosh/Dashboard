import React from 'react'
import '../public/style/runString.css'
import Image from 'next/image'
import danger from '../public/img/icon/icon.png'


const RunString = () => {
  return (
    <div className='run__container'>
      <div className='run__string'>
        <p className='danger'><Image className='danger__img' src={danger} alt="danger" width={24} height={24} />Ошибка</p>
SMУТ-000950
Егоров Константин Константиновчи
Ошибка
Не ушла в анализ обеспечения
</div>
    </div>
  )
}

export default RunString