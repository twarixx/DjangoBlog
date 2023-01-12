import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/auth/LoginPage";
import {RegisterPage} from "./pages/auth/RegisterPage";
import {Layout} from "./components/Layout";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Layout/>
            ),
            children: [
                {
                    path: '/',
                    element: <HomePage/>,
                },
            ],
        },
        {
            path: '/login',
            element: <LoginPage/>,
        },
        {
            path: '/register',
            element: <RegisterPage/>,
        }
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
