import Navbar from "./components/navbar/navbar"
import  Footer from "./components/footer/Footer"
import Uyeekrani from "./components/Uyeekrani/Uyeekrani"
import "./app.css"

function App() {
  return (
    <>
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="body">
          <div className="uyeEkranıContainer"> 
              <Uyeekrani/>
          </div>
      </div>
      <div className="footer">
          <Footer note="deneme"/>
      </div>
    </div></>
  );
}
export default App;
