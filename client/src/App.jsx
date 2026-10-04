import './paddy.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectScope from './components/ProjectScope';
import Milestones from './components/Milestones';
import Downloads from './components/Downloads';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="paddy-app min-h-screen bg-white">
      <Navbar />
      <main>
        <Home />
        <ProjectScope />
        <Milestones />
        <Downloads />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
