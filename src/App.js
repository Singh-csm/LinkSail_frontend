
import './App.css';
import { bgImgUri } from './component/Config';
import Footer from './component/Footer';
import Header from './component/Header';

import Urlshortner from './component/Urlshortner';

function App() {
  return (
    <div className="App" >
      <Header />
      <Urlshortner />
<Footer/>
    </div>
  );
}

export default App;
