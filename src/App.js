// import './App.css';
// import Alert from './components/Alert';
// // import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React ,{useState}from 'react';


// function App() {
//   const [Mode, setMode] = useState('light')//whether mode ennabled or not
//   const [Red, setRed] = useState('light')
//   const [alert, setAlert] = useState(null)

//   const showAlert =(Message , type)=>{

//     setAlert({
//       msg: Message,
//       type: type
//     })
//     setTimeout(() => {
//       setAlert(null)
//     }, 3000);
//   }
// // dark light mode changing
//   const toggleMode=()=>{
//     if(Mode==='light'){
//       setMode(`dark`);
//       document.body.style.backgroundColor = '#042743';
//       showAlert("dark mode is enabled","success");
//     }
//     else{
//       setMode(`light`);
//       document.body.style.backgroundColor = '#fff';
//       showAlert("light mode has been enabled","success");
      
//     }
//   }
//   const tMode=()=>{
//     if(Red==='light'){
//       setRed(`dark`);
//       document.body.style.backgroundColor = '#FF0000';
//       showAlert("dark mode is enabled","Danger");
//     }
//     else{
//       setRed(`light`);
//       document.body.style.backgroundColor = '#fff';
//       showAlert("light mode has been enabled","Danger");
      
//     }
//   }
//   return (
//   <>

// <Navbar Title="TextUtils" Mode={Mode} toggleMode={toggleMode} tMode={tMode}/>
// <Alert alert={alert}/>
// <div className="container">
//   {/* called navbar darkmode in text form */}
// <TextForm heading='Enter text' showAlert={showAlert} Mode={Mode} tMode={tMode}/>
// {/* <About /> */}
// </div>
//   </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const [Mode, setMode] = useState('light');
  const [Red, setRed] = useState('light');
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

  const tMode = () => {
    if (Red === 'light') {
      setRed('dark');
      document.body.style.backgroundColor = '#FF0000';
      showAlert('Dark mode is enabled', 'Danger');
    } else {
      setRed('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light mode has been enabled', 'Danger');
    }
  };

  return (
    <Router>
      <>
      
        <Navbar Title="TextUtils" Mode={Mode} toggleMode={toggleMode} tMode={tMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter text" showAlert={showAlert} Mode={Mode} tMode={tMode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
