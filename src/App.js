import Navbar from "./components/navbar/navbar"
import  Footer from "./components/footer/Footer"

function App() {
  return (
    <>
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="body">

      </div>
      <div className="footer">
          <Footer note="deneme"/>
      </div>
    </div></>
  );
}
export default App;
