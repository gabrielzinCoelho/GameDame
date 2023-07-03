import {Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login/index'
import { Register } from './pages/Register/index';
import { ForgetPassword } from './pages/ForgetPassword/index';
import { AccessPagesLayout } from './Layouts/AccessPagesLayout/index';
import { DefaultLayout } from './Layouts/DefautLayout/index';
import { UserAccount } from './pages/UserAccount/index';
import { GameShop } from './pages/GameShop/index';

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<AccessPagesLayout />} >
                <Route path="/" element={<Login />} />
                <Route path="/registrar" element={<Register />} />
                <Route path="/recuperar-senha" element={<ForgetPassword />} />
            </Route>
            <Route path="/GameDame" element={<DefaultLayout />}>
                <Route path="/GameDame/" element={<GameShop />}/>
                <Route path="/GameDame/minha-conta" element={<UserAccount />}/>
            </Route>
        </Routes>
    );
}