import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;