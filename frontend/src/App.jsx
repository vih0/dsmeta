import "./index.css";
import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="sales">
        <div class="dsmeta-container">
          <SalesCard/>
        </div>
      </section>
    </div>
  );
}

export default App;
