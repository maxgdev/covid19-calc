import React from 'react';
import MyAppBar from './AppBar'
import Footer from './Footer'
import ValidationTextFields from './TextField'



import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Covid 19 Calculator</h1>
      <MyAppBar />
      < ValidationTextFields />
      < Footer />
    </div>
  );
}

export default App;
