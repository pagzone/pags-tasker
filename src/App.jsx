import { BrowserRouter as Router} from 'react-router-dom';
import { Header, Main, Footer } from './Layouts';
import { ProjectPage } from './Pages';

function App() {
  return (
    <Router>
      <ProjectPage/>
    </Router>
  );
}

export default App;
