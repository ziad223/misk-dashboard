import './App.css'
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Moving from './pages/Moving';
function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <div className='app flex gap-7'>
     <div className="sidebar-part">
      <Sidebar/>
     </div>
     <div className='pages-part'>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/employee' element = {<Employees/>} />
        <Route path='/moving' element = {<Moving/>} />
      </Routes>
     </div>
    </div>

    </BrowserRouter>
  )
}

export default App
