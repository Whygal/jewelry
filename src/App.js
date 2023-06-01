import { ContactUs } from './components/EmailForm/Emailjs';
import Header from './components/EmailForm/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import "./style.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
