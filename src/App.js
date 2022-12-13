import Navbar from "./components/navbar/navbar"
import  Footer from "./components/footer/Footer"
import Uyeekrani from "./components/Uyeekrani/Uyeekrani"
import Entry from "./components/entry/entry";
import "./app.css"

function App() {
  return (
    <>
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="body">
          <div className="kayit">
              <Entry/>
          </div>
          <div className="uyeEkranıContainer">

          </div>
      </div>
      <div className="footer">
          <Footer note="Dedikodu Sistemi"/>
      </div>
    </div></>
  );
}
export default App;
