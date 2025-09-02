import { Route, Routes } from "react-router";
import Header from "../components/Header/Header";

export default function MainLayout() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={''}></Route>
            </Routes>
        </>
    );
};