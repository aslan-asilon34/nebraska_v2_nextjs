//import Link
import '../../assets/frontend/css/style-prefix.css';
import '../../assets/frontend/css/style.css';

import Image from 'next/image';
import bannerPurple1 from '../../assets/frontend/images/banner-purple-1.png';
import bannerPurple2 from '../../assets/frontend/images/banner-purple-2.png';
import bannerPurple3 from '../../assets/frontend/images/banner-purple-3.png';


function Banner() {

    return (
      <div className="banner">

        <div className="container">

          <div className="slider-container has-scrollbar">

            <div className="slider-item">

              <Image 
                src={bannerPurple1} 
                alt="Latest women's fashion sale" 
                width={1920}  
                height={800} 
                className="banner-img"
              />

              <div className="banner-content">


              </div>

            </div>

            <div className="slider-item">

              <Image 
                src={bannerPurple2} 
                alt="modern sunglasses" 
                width={1920}  
                height={800} 
                className="banner-img"
              />
              {/* <img src="./assets/images/banner-purple-2.png" alt="modern sunglasses" className="banner-img" /> */}

              <div className="banner-content">



              </div>

            </div>

            <div className="slider-item">

              <Image 
                src={bannerPurple3} 
                alt="modern sunglasses" 
                width={1920}  
                height={800} 
                className="banner-img"
              />
              {/* <img src="./assets/images/banner-purple-3.png" alt="new fashion summer sale" className="banner-img" /> */}

              <div className="banner-content">


              </div>

            </div>

          </div>

        </div>

      </div>
    )

}

export default Banner