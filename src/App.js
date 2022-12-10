import Button from "./buttons/likeButton";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
function App() {
  return (
    <div className="App">
      <Button  />
        <Header title="My header" subtitle="angaragücü" />
        <Footer note="Footer Note" />
      <Main message="My content" />
    </div>
  );
}
export default App;
