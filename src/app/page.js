import Image from 'next/image'
import SlideShow from './components/slideshow/SlideShow'
var images = [ 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300' ];

export default function Home() {
  return (
    <div className="snap-y snap-mandatory	">
      <div className="flex flex-col gap-48 my-8 h-screen">
        <SlideShow images={images}/>
        <SlideShow images={images}/>
        <SlideShow images={images}/>
      </div>
      
    </div>
    
  )
}
