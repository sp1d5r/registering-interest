import {BrowserRouter, Route, Routes} from "react-router-dom";
import ThankYou from "./components/thank-you/thank-you";
import {setUserIdFirst} from "./cloud-infrastructure/firebase";
import Home from "./components/home/home";
import RegisterInterest from "./components/register-interest/RegisterInterest";
import ScrollingBanner from "./components/scrolling-banner/ScrollingBanner";


function App() {
    setUserIdFirst();
    return (
      <BrowserRouter>
        <div className="App">
            {/*<ScrollingBanner />*/}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />

                <Route
                    path="/register-interest"
                    element={
                        <RegisterInterest isPrimary={true}/>
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
