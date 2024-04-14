import classes from './app.module.scss'
import Footer from "./components/Footer/index.jsx"
import Header from "./components/Header"
import './App.css'

function App() {

  return (
      <>
          <div className={classes.app}>
              <Header/>
              <Footer/>
          </div>
      </>
  )
}

export default App
