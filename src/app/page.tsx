import Image from 'next/image'
import UserColumn from '../../components/UserColumn'
import LeftColumn from '../../components/LeftColumn'
import RightColumn from '../../components/RightColumn'
import RunString from '../../components/RunString'
import pattern from '../../public/img/pattern.png'
import pattern1 from '../../public/img/pattern1.png'

export default function Home() {
 return (
  <div className='container'>
    <Image className='main__img' src={pattern} alt='a' width={148} height={139} />
    <div className='wrapper'>
    <LeftColumn />
    <UserColumn />
    <UserColumn />
    <UserColumn />
    <UserColumn />
    <UserColumn />
    <UserColumn />
    <RightColumn />
    </div>
    <RunString />
    <Image  className='main1__img' src={pattern1} alt='1' width={70} height={363}  />
    </div>
  
 )
  
}
