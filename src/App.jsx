import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, Footer } from './Layouts';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
