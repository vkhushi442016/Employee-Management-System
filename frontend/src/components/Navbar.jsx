import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    function logout() {

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        navigate('/login');
    }

    return (

        <div
            style={{
                display: 'flex',
                gap: '20px',
                padding: '20px',
                background: '#222',
                color: 'white'
            }}
        >

            <Link to="/dashboard">
                Dashboard
            </Link>

            <Link to="/employees">
                Employees
            </Link>
            
            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Navbar;