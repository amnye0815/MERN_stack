import './App.css';

import axios from 'axios';
import {Router, navigate} from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './components/Update';

function App() {
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/products/delete/${id}`)
      .then((res) => { 
        console.log("delete success!", res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Router>
        <Main path="/" deleteHandler={deleteHandler} />
        <Detail path="/products/:id" deleteHandler={deleteHandler} />
        <Update path="/products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
