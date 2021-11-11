import './App.css';
import {Router} from '@reach/router';
import Form from './components/Form';
import Display from './components/Display';
import Update from './components/Update';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <h1><u>Favorite Authors</u></h1>
      <Router>
        <Display path="/" />
        <Form path="/new" />
        <Update path="/edit/:id" />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;