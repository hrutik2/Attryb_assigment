import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup';
import { CarForm } from './pages/addcar';
import { Navbar } from './components/Navbar';
import { ALLRoutes } from './components/allRoutes';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ALLRoutes/>
    </div>
  );
}

export default App;
