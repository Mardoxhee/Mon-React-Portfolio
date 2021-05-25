
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Header/NavBar';
import Formulaire from './components/Main/Formulaire';
import Realisations from './components/Main/Realisations';
import SectionAbout from './components/Main/SectionAbout';
import SectionAvis from './components/Main/SectionAvis';
import SectionCv from './components/Main/SectionCv';
import SectionMap from './components/Main/SectionMap';
import SectionPresentation from './components/Main/SectionPresentation';
import SectionServices from './components/Main/SectionServices';
import SectionSkills from './components/Main/SectionSkills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SectionPresentation/>
      <SectionAbout/>
      <SectionServices/>
      <SectionCv/>
      <SectionSkills/>
      <Realisations />
      <SectionAvis/>
      <Formulaire/>
      <SectionMap/>
      <Footer/>

    </div>
  );
}

export default App;
