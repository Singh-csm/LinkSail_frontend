
import './App.css';
import { bgImgUri } from './component/Config';
import Footer from './component/Footer';
import Header from './component/Header';

import Urlshortner from './component/Urlshortner';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${bgImgUri})`,
      backgroundSize: 'cover',
      height: "1200px",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>
      <Header />
      <Urlshortner />
<Footer/>
    </div>
  );
}

export default App;
