import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Cities from "./components/Cities";
import Calculator from "./components/Calculator";
import Filter from "./components/Filter";
import Kontrolnaya from "./components/Kontrolnaya";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginForm from "./components/LoginForm/LoginForm";
//import Home from "./components/HomeView/Home";
import Network from "./components/Network/Network";
import FetcherQuery from "./components/Network/Network";
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
import Home from "./views/Home";
import Layout from "./views/Layout";
import LoginView from "./views/LoginView";
import RegistrationView from "./views/RegistrationView";

function App() {
    return <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/login' element={<LoginView/>}/>
                <Route path='/registration' element={<RegistrationView/>}/>
            </Route>
        </Routes>
    </>;
}


//const queryClient = new QueryClient();
// function App() {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <Calculator/>
//         </QueryClientProvider>
//     );
// }

// function App() {
//     return (<div className="App">
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/login">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/registration">Registration</Link>
//                         </li>
//                         <li>
//                             <Link to="/network/:id">Network</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Routes>
//                     <Route path="/login" element={<LoginForm/>}/>
//                     <Route path="/registration" element={<RegistrationForm/>}/>
//                     <Route path="/network/:id" element={<Network/>}/>
//                     <Route path="/" element={<Home/>}/>
//                 </Routes>
//             </div>
//         </div>
//     );
// }
export default App;
