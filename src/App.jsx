import { BrowserRouter as Router} from 'react-router-dom';
import { Header, Main, Footer } from './Layouts';
import ProjectPage from './Pages/ProjectPage';

function App() {
  return (
    <Router>
      {/* <Header />
      <Main />  
      <Footer /> */}

      <ProjectPage/>
    </Router>
  );
}

export default App;
