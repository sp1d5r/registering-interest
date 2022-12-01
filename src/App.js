import Navbar from "./components/navbar/navbar";
import RegisterInterest from "./components/register-interest/register-interest";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import ThankYou from "./components/thank-you/thank-you";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />

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

                <Route
                    path="/thank-you"
                    element={
                        <ThankYou />
                    }
                />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
