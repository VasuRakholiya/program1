import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [Mode, setMode] = useState('light');
  // const [Red, setRed] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode is enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  // const tMode = () => {
  //   if (Red === 'light') {
  //     setRed('dark');
  //     document.body.style.backgroundColor = '#FF0000';
  //     showAlert('Dark mode is enabled', 'Danger');
  //   } else {
  //     setRed('light');
  //     document.body.style.backgroundColor = '#fff';
  //     showAlert('Light mode has been enabled', 'Danger');
  //   }
  // };

  return (
    // <Router>
      <>
      
        {/* <Navbar Title="TextUtils" Mode={Mode} toggleMode={toggleMode} tMode={tMode} /> */}
        <Navbar Title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        {/* <TextForm heading="Enter text" showAlert={showAlert} Mode={Mode} tMode={tMode} /> */}
        <TextForm heading="Enter text" showAlert={showAlert} Mode={Mode}/>
          {/* <Routes>
            <Route path="/" element={line 50 be here} />
            <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      </>
    // {/* </Router> */}
  );
}

export default App;
