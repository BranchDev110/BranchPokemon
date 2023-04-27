import './App.css';
import { Sidebar } from './Containers/Sidebar';
import { Navbar } from './Containers/Navbar';
import { RSidebar } from './Containers/RSidebar';
import { Home } from './Containers/Home';
import { Route, Routes } from 'react-router-dom';
import { Detail } from './Containers/Detail';
import { History } from './Containers/History';
import { About } from './Containers/About';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='main__container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/details/:name" element={<Detail />}/>
        </Routes>
      </div>
      <RSidebar />
    </div>
  );
}

export default App;
