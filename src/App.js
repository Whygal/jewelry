import { ContactUs } from './components/EmailForm/Emailjs';
import Header from './components/EmailForm/Header/Header';
import Footer from './components/Footer/Footer';
import "./style.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
