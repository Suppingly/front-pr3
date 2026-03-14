import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/routes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router basename='/front-pr3'>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
