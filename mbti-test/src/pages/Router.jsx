import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import MbtiTest from "./MbtiTest";
import Profile from "./profile";
import Signup from "./signup";
import TestResult from "./TestResult";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mbti-test" element={<MbtiTest/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/test-result" element={<TestResult/>}/>
        </Routes>
        </BrowserRouter>
    )
}