import {BrowserRouter, Route, Routes} from "react-router-dom";
import ThankYou from "./components/thank-you/thank-you";
import {setUserIdFirst} from "./cloud-infrastructure/firebase";
import Home from "./components/home/home";


function App() {
    setUserIdFirst();
    return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
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
