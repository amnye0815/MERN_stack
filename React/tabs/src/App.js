import './App.css';
import Tabs from './components/Tabs';
import Header from './components/Header';
import TabContentDisplay from './components/TabContentDisplay';
import { useState } from 'react';

function App() {
  const [tabContent, setTabContent] = useState([]);

  return (
    <div className="App">
      <Header />
      <Tabs />
      <TabContentDisplay />
    </div>
  );
}

export default App;
