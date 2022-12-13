import Navbar from "./components/navbar/navbar"
import  Footer from "./components/footer/Footer"
import Uyeekrani from "./components/Uyeekrani/Uyeekrani"
import Entry from "./components/entry/entry";
import EntryCard from "./components/entry/entryCard";
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
              <EntryCard entryCategory ="Entry Kategori" entryName ="Entry Adı"/>
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
