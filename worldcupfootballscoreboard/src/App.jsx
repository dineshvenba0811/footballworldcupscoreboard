import classes from './app.module.scss'
import Footer from "./components/Footer/index.jsx"
import Header from "./components/Header"
import './App.css'
import ScoreboardsGrid from "./components/ScoreboardsGrid"
function App() {

  return (
      <>
          <div className={classes.app}>
              <Header/>
              <ScoreboardsGrid/>
              <Footer/>
          </div>
      </>
  )
}

export default App
