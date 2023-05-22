import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mainRoutes } from "./routes";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {mainRoutes?.map((item) => (
                    <Route key={item.path} path={item.path} element={item.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
