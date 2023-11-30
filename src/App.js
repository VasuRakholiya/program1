import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

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
  const removeBodyClasses =()=>{
    document.body.classList.remove('light')
    document.body.classList.remove('dark')
    document.body.classList.remove('success')
    document.body.classList.remove('warning')
    document.body.classList.remove('danger')
    document.body.classList.remove('primary')
    
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
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
  return (
    <Router>
      <>
        {/* <Navbar Title="TextUtils" Mode={Mode} toggleMode={toggleMode} tMode={tMode} /> */}
        <Navbar Title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        {/* <TextForm heading="Enter text" showAlert={showAlert} Mode={Mode} tMode={tMode} /> */}
        
          <Routes>
            <Route path="/" element={<TextForm heading="Enter text" showAlert={showAlert} Mode={Mode}/>} />
            <Route path="/about" element={<About mode={Mode}/>} /> 
          </Routes>
        </div>
      </>
      </Router>
  );
}
export default App;
