import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'

const slides = [
  {url: './assets/withAFrog.jpg', caption: 'With frog'},
  {url: './assets/onDadsHead.jpg', caption: 'on head'}
]

const App = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState([])

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length
    setCurrentIndex(nextIndex)
  } 

  return (
    <>
    <h1>Happy Valentines Day Wrenna!</h1>
      {
        <Slider />
      }
    </>
  )
}

export default App
