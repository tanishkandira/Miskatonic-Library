import './App.css';
import Header from './assets/Header'; 
import ScrollToTop from './assets/Scrolltotop';
import BooksSection from './assets/BooksSection';
function App() {
  return (
    <div className="App">
      <Header/>
      <BooksSection/>
      <ScrollToTop/> 
    </div>
  );
}

export default App;