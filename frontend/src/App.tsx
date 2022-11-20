
import Header from './components/Header'
import SalesCard from './components/SalesCard'
import './index.css'

function App() {


  return (
    <div className="App">
      <Header />
      <section id="sales">
        <div className="dsmeta-container"></div>
        <SalesCard/>
        </section>
    </div>
  )
}

export default App
