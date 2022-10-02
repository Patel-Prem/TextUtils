import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import ThemeMode from './components/ThemeMode';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';

function App() {
  const [themeColor, setTheme] = useState('light');
  // const [alert, setAlert] = useState({type: 'sucess', msg: 'done'});
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const color = {
    darkTheme: 'dark',
    lightTheme: 'light',
    darkColor: '#2a2a2a',
    // darkColor: '#353535',
    lightColor: '#fff',
  }


  const toggleThemeColor = () => {
    if (themeColor === 'light') {
      // console.log('1 -- ', themeColor);
      document.getElementById('navbar').style.borderBottom = '1px solid white'
      document.body.style.backgroundColor = color.darkColor;
      setTheme('dark');
      showAlert('success', 'Dark Mode Enabled');
    } else {
      // console.log('2 -- ', themeColor);
      document.body.style.backgroundColor = color.lightColor;
      setTheme('light');
      showAlert('success', 'Light Mode Enabled');
    }
  }

  const colorAndTheme = {
    // For toggle Text Color
    toggleColor: themeColor === color.lightTheme ? color.darkColor : color.lightColor,
    // For toggle Background Color
    toggleTheme: themeColor === color.lightTheme ? color.darkTheme : color.lightTheme,
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" themeColor={themeColor} toggleThemeColor={toggleThemeColor} colorAndTheme={colorAndTheme} />
        {/* <Navbar title="TextUtils"/> */}
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the text to analyze" themeColor={themeColor} colorAndTheme={colorAndTheme} />} />
          <Route path='/about' element={<About />} />
        </Routes>
        {/* <TextForm heading="Enter the text to analyze" themeColor={themeColor} colorAndTheme={colorAndTheme} /> */}
      </Router>
      <ThemeMode toggleThemeColor={toggleThemeColor} colorAndTheme={colorAndTheme} />
    </>
  );
}

export default App;
