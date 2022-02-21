import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import alexa from "../../public/images/alexa-2.jpg"
import Image from 'next/image'


function Banner() {
    return (
        <div className='relative'>
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
              autoPlay
              infiniteLoop
              showStatus= {false}
              showIndicators={false}
              showThumbs={false}
              interval={5000}
            >
               
        <div>
             <Image loading="lazy" src="/alexa-2.jpg" width={200} height={200} alt=""/>
        </div>
        <div>
            <Image loading="lazy" src="/alexa.jpg" width={200} height={200} alt=""/> 
        </div>
        <div>
            <Image loading="lazy" src="/game.jpg" width={200} height={200} alt="" />   
        </div>
            </Carousel>
        </div>



    )
}

export default Banner 



// import { Carousel } from "react-responsive-carousel";
