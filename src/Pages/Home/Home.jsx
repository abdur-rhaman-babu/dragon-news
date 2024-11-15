
import Header from './../../components/Header/Header';
import NewsLetter from './../../components/NewsLetter/NewsLetter';
import Navbar from './../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import NavbarLeft from './../../components/NavbarLeft/NavbarLeft';
import NavbarRight from './../../components/NavbarRight/NavbarRight';
const Home = () => {
  return (
    <div>
      <Header/>
      <NewsLetter/>
      <Navbar/>
      <main className='lg:flex justify-between max-w-7xl mx-auto my-5'>
        <div className='w-3/12 mx-auto'>
        <NavbarLeft/>
        </div>
        <div className='w-6/12 mx-auto mb-5'>
          <Outlet/>
        </div>
        <div className='w-3/12 mx-auto'>
        <NavbarRight/>
        </div>
      </main>
    </div>
  );
};

export default Home;