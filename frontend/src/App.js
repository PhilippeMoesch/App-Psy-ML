import Nav from './components/Nav/Nav';
import './assets/main.css';
import Home from './components/Home';
import Database from './components/Database';
import Prediction from './components/Prediction';
import Settings from './components/Settings';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Analytics from './components/Analytics';
import { PidContextProvider } from './components/contexts/TestContext';
import { RoutesType } from './types/routes';
import { AuthProvider} from './components/contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  
  // <Container className="d-flex align-items-center justify-content-center"
   //           style={{ minHeight: "100vh"}}>
  //  <div className="w-100" style={{ maxWidth: '400px'}}>
  // </div>
   //</Container>
   
 
  return (
   
   
   <Router>
      <div className="flex justify-center">
      
      <AuthProvider>
      <Nav />
      <PidContextProvider>
       <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path={RoutesType.Prediction} element={<PrivateRoute><Prediction/></PrivateRoute>}/>
        <Route path={RoutesType.Database} element={<PrivateRoute><Database /></PrivateRoute>}/>
        <Route path={RoutesType.Analytics} element={<PrivateRoute><Analytics /></PrivateRoute>}/>
        <Route path={RoutesType.Settings} element={<Settings />}/>
       </Routes>
       </PidContextProvider>
       </AuthProvider>
      </div>   
    </Router>
   
  );
}

/*const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)*/

export default App;

/*


<PidContextProvider>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Prediction" element={<Prediction/>}/>
        <Route path="/Database" element={<Database/>}/>
        <Route path="/Analytics" element={<Analytics/>}/>
       </Routes>
       </PidContextProvider>
       
      <Router>
      <div className="App">
      <Nav />
        
      </div>
      
    </Router>*/
