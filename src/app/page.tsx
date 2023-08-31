import Image from 'next/image'
import styles from './page.module.css'
import UserColumn from '../../components/UserColumn'
import UnfoColumn from '../../components/UnfoColumn'
import RunString from '../../components/RunString'

export default function Home() {
 return (
  <div className='container'>
    <div className='wrapper'>
    <UnfoColumn />
    <UserColumn />
    <UserColumn />
    <UserColumn />
    <UserColumn />
    <UserColumn />
    </div>
    <RunString />
    </div>
  
 )
  
}
