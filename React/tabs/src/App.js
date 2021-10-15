import './App.css';
import Tabs from './components/Tabs';
import Header from './components/Header';
import TabContentDisplay from './components/TabContentDisplay';
import { useState } from 'react';

function App() {
  // const [tabContent, setTabContent] = useState(["This is the yellow tab. It should change the window to yellow.", 
  //   "This is the magenta tab. It should change the window to magenta.", 
  //   "This is the cyan tab. It should change the window to cyan.",
  //   ]);

  const [tabContent, setTabContent] = useState("This is the yellow tab. It should change the window to yellow.");

  return (
    <div className="App">
      <Header />
      <Tabs tabContent={tabContent} setTabContent={setTabContent} />
      <TabContentDisplay tabContent={tabContent} setTabContent={setTabContent} />
    </div>
  );
}

export default App;
