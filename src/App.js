import {Routes, Route}from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/common.css';
import Home from './pages/Home';
import Exhibition from './pages/Exhibition';
import ExhibitionDetail from './pages/ExhibitionDetail';
import Location from './pages/Location';
import Ticket from './pages/Ticket';
import TicketBooking from './pages/TicketBooking';
import About from './pages/About';

function App() {
  return (
    <div className="App">

      <ScrollToTop />
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exhibition" element={<Exhibition/>} />
        <Route path="/exhibition/:id" element={<ExhibitionDetail/>}/>
        <Route path="/location" element={<Location/>} />
        <Route path="/ticket" element={<Ticket/>} />
        <Route path="/ticket/:id" element={<TicketBooking />} />
        <Route path="/about" element={<About/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
