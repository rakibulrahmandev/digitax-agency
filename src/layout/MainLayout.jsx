import { Route, Routes } from "react-router";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home/Home";

export default function MainLayout() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </>
    );
};