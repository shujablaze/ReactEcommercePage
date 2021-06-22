import React,{useState} from 'react'
import './App.css'
import Nav from'./Navbar'
import MainContent from './Main'
import Footer from './Footer'

export const shopContext = React.createContext(null)

function App() {
  const [cartCount,SetCartCount] = useState(0)

  return (
    <div>
    <shopContext.Provider value={{cartCount,SetCartCount}}>
      <Nav/>
      <MainContent/>
    </shopContext.Provider>
    <Footer/>
    </div>
  );
}

export default App;
