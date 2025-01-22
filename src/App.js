import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/home/Home";
import Navbar from "./component/Navbar/Navbar";
import Login from "./component/auth/Login";
import PageNotFound from "./component/pagenotfound/PageNotFound";

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
