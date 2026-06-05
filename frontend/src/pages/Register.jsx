import { useState } from 'react';
import API from '../services/api';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Employee' // Default role
    });

    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: '20px'
    };

    const cardStyle = {
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #f1f5f9'
    };

    const inputGroupStyle = { marginBottom: '20px' };
    const labelStyle = { display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600', color: '#64748b' };
    const inputStyle = {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        fontSize: '1rem',
        boxSizing: 'border-box',
        outline: 'none',
        transition: 'border-color 0.2s'
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await API.post('/auth/register', formData);
            alert(res.data.message);
        } catch (error) {
            alert(error.response?.data?.message || "Registration failed");
            console.log(error);
        }
    }

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h1 style={{ margin: '0 0 8px 0', color: '#1e293b', fontSize: '1.75rem' }}>Create Account</h1>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Join the management system today</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            style={inputStyle}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            style={inputStyle}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            style={inputStyle}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>System Role</label>
                        <select 
                            style={inputStyle} 
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        >
                            <option value="Employee">Employee</option>
                            <option value="Manager">Manager</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <button 
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginTop: '10px',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                    >
                        Create Account
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.85rem', color: '#64748b' }}>
                    Already have an account? <a href="/login" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>Log in</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
