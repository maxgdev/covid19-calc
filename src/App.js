import React from 'react';
import MyAppBar from './AppBar'
import Footer from './Footer'
import FormInputs from './TextField'

function App() {
  return (
    <div className="App">
      <h1>Covid 19 Calculator</h1>
      <MyAppBar />
      < FormInputs />
      < Footer />
    </div>
  );
}

export default App;
