import Header from './components/header/Headrer';
import Sidebar from './components/sidebar/Sidebar';
import Maincontent from './components/maincontent/Maincontent';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (

    <div className="main1">
      <div className="main">
        <div className='main2'>
         
        <Header/> 
        <Sidebar/>
        <Maincontent/>
        <Footer/>
      </div>
      </div>
    </div>

  );
}

export default App;