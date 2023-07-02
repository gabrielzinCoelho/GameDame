import {Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login/index'
import { Register } from './pages/Register/index';
import { ForgetPassword } from './pages/ForgetPassword/index';
import { AccessPagesLayout } from './Layouts/AccessPagesLayout';

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<AccessPagesLayout />} >
                <Route path="/" element={<Login />} />
                <Route path="/registrar" element={<Register />} />
                <Route path="/recuperarSenha" element={<ForgetPassword />} />
            </Route>
        </Routes>
    );
}