import Navbar from "./components/navbar/navbar";
import RegisterInterest from "./components/register-interest/register-interest";

function App() {
  return (
    <div className="App">
        <Navbar />
        <RegisterInterest
            title={"Dark Psychology"}
            image={require("./assets/dark-psychology.png")}
            description={"A breif introduction to evil. Proceed with caution."}
        />
    </div>
  );
}

export default App;
