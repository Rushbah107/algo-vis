import './Background.css'
import vid_1 from '../../assets/vid_1.mp4'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.jpg'

const Background = ({playStatus, heroCount}) => {
  if(playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted> 
            <source src={vid_1} type='video/mp4'/>
      </video>
    )
  }
  else if(heroCount===0) {
    return <img src={p1} className="background1 fade-in" alt="" />
  }
  else if(heroCount===1) {
    return <img src={p2} className="background fade-in" alt="" />
  }
  else if(heroCount===2) {
    return <img src={p3} className="background fade-in" alt="" />
  }
}

export default Background
