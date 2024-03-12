import { BrowserRouter as Router} from 'react-router-dom';
import { Header, Main, Footer } from './Layouts';
import { ProjectPage } from './Pages';
import TaskBoard from './Components/TaskBoard';

function App() {
  return (
    <Router>
      <ProjectPage />
    </Router>
  );
}

export default App;
