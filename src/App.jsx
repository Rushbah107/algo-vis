import { useEffect, useState} from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:'Dive into', text2:'what you love', image: 'path/to/p1.jpg'},
    {text1:'Indulge', text2:'in Visualization', image: 'path/to/p2.png'},
    {text1:'Algorithm', text2:'that astonishes you', image: 'path/to/p3.png'},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=> {return count===2 ? 0 : count+1})
    },4000);
  },[])
  return (
    <div>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App
