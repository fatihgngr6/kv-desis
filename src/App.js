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
              <EntryCard entryCategory ="Akademisyen" entryName ="Murat Paşa Uysal"/>
              <EntryCard entryCategory ="Akademisyen" entryName ="Gizem Öğütçü"/>
              <EntryCard entryCategory ="Ders" entryName ="Nesne Yönelimli Programlama Dersi"/>
              <EntryCard entryCategory ="Ders" entryName ="Proje Yönetimi Dersi"/>
          </div>
          <div className="uyeEkranıContainer">
              <Uyeekrani/>
          </div>
      </div>
      <div className="footer">
          <Footer note="Dedikodu Sistemi"/>
      </div>
    </div></>
  );
}
export default App;
