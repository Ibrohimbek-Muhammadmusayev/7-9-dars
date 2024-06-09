import { Route, Routes } from "react-router-dom"
import SignUp from '../pages/SignUp'
import App from "../App"

export const Routers = ()=> {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<h1>404 error not found</h1>} />
            </Routes>
        </>
    )
}