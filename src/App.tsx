import './App.css'
import Category from './components/Category'
import BenefitsBar from './layouts/BenefitsBar'
import Header from './layouts/Header'
import Topbar from './layouts/Topbar'

function App() {

  return (
    <div>
      <Topbar />
      <Header />
      <BenefitsBar />
      <Category />
    </div>
  )
}

export default App
