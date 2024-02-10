import {useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import OverviewCounter from '../components/overview/OverviewCounter'
import BannerDetails from '../components/bannerdetails/BannerDetails'
import RealEstate from '../components/real-estate/RealEstate'
import SimpleBanner from '../components/simplebanner/SimpleBanner'
import Blogs from '../components/blogs/Blogs'
import Footer from '../components/footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css";
const Home = () => {

  useEffect(() =>{
    AOS.init({
      offset:100,
      duration:500,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=' dark:bg-gray-900 bg-white'>
   
    <Navbar />
    <Hero />
    <OverviewCounter />
    <BannerDetails />
    <RealEstate />
    <SimpleBanner />
    <Blogs />
    <Footer />
   
    
     
    </div>
   
  )
}

export default Home
