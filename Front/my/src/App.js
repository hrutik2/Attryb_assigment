import logo from './logo.svg';
import './App.css';
import AuthPage from './page/login';
import { Login } from './component/login';
import { Home } from './page/home';
import { Delear } from './page/Delear';
import { Navbar } from './component/navbar';
import { AllRoutes } from './component/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     
      <AllRoutes/>
     
      
    </div>
  );
}

export default App;
