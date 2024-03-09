import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import { CartWidget } from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido!"} />
    </div>
  )
}

export default App



