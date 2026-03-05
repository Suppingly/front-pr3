import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/routes'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <AppRoutes/>
      </Router>
    </>
  )
}

export default App
