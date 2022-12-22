import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Presentation from './pages/Presentation';
import Routage from './pages/Routage';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Static from './pages/Static';
import State from './pages/State';
import Props from './pages/Props';
import Connexion from './pages/Connexion';
import { BackBtn } from './components/Buttons';
import Effect from './pages/Effect';
import Request from './pages/Request';
import Forms from './pages/Forms';
import UserDetails from './pages/UserDetails';
import NotFound from './pages/NotFound';
import Redux from './pages/Redux';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*  Ts les composants en dehors de la balise Routes est du contenu
              static :
              Commun à toutes les pages 
              + précisemment, il ne se rechargera pas à chaque clic sur lien*/}
            <Logo/>
            <Navigation/>
           
           

        <div className='main'>
          <Routes>
            <Route path="/" element={<Presentation/>} />
            <Route path="/routing" element={<Routage/>} />
            <Route path="/static" element={<Static/>} />
            <Route path="/hooks" element={<State/>} />
            <Route path="/props" element={<Props/>} />
            <Route path="/connexion" element={<Connexion/>} />
            <Route path="/effect" element={<Effect/>} />
            <Route path="/request" element={<Request/>} />
            <Route path="/forms" element={<Forms/>} />
            <Route path="/user/:id" element={<UserDetails/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/redux" element={<Redux/>} />

          </Routes>{/*c'est à l'intérieur de cette balise que React va charger les routes*/}
             
        </div>
        <BackBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;
