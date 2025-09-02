import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={''} />
            </Routes>
        </>
    );
};