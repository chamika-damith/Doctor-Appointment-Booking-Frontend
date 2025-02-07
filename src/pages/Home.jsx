import Banner from '../components/Banner'
import Header from '../components/Header'
import InfiniteMarquee from '../components/InfiniteMarquee'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
const Home = () => {
  return (
    <div>
      <Header />
      <InfiniteMarquee />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home