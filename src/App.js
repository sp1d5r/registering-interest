import Navbar from "./components/navbar/navbar";
import RegisterInterest from "./components/register-interest/register-interest";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import ThankYou from "./components/thank-you/thank-you";
import Courses from "./components/courses/courses";
import course_options from "./course-click";
import {setUserIdFirst} from "./cloud-infrastructure/firebase";


function App() {
    setUserIdFirst();
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
                    path="/courses"
                    element={
                        <Courses />
                    }
                />

                {
                    course_options.map((item) => {
                        return <Route
                            path={item.route}
                            element={
                                <RegisterInterest
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                />
                            }
                        />
                    })
                }

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
