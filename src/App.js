import Navbar from "./components/navbar/navbar";
import RegisterInterest from "./components/register-interest/register-interest";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
                <Route
                    path="/dark-psychology"
                    element={
                        <RegisterInterest
                            title={"Dark Psychology"}
                            image={require("./assets/dark-psychology.png")}
                            description={"A breif introduction to evil. Proceed with caution."}
                        />
                    }
                />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
