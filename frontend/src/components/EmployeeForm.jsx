import { useState } from 'react';

function EmployeeForm({ onAddEmployee }) {
    const [formData, setFormData] = useState({
        emp_id: '',
        name: '',
        email: '',
        department: '',
        designation: '',
        salary: ''
    });

    // Consistent styles for label and input
    const containerStyle = { display: 'flex', flexDirection: 'column', gap: '6px' };
    const labelStyle = { fontSize: '0.85rem', fontWeight: '600', color: '#475569', marginLeft: '2px' };
    const inputStyle = {
        padding: '10px 12px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.2s',
    };

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddEmployee(formData);
        setFormData({ emp_id: '', name: '', email: '', department: '', designation: '', salary: '' });
    }

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '28px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            marginBottom: '40px',
            border: '1px solid #f1f5f9',
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            <h3 style={{ marginTop: 0, marginBottom: '24px', color: '#1e293b', fontSize: '1.25rem' }}>
                Employee Information
            </h3>
            
            <form onSubmit={handleSubmit} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px'
            }}>
                {/* Employee ID */}
                <div style={containerStyle}>
                    <label style={labelStyle}>Employee ID</label>
                    <input
                        style={inputStyle}
                        type="text"
                        name="emp_id"
                        placeholder="e.g. EMP-101"
                        value={formData.emp_id}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Name */}
                <div style={containerStyle}>
                    <label style={labelStyle}>Full Name</label>
                    <input
                        style={inputStyle}
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email */}
                <div style={containerStyle}>
                    <label style={labelStyle}>Email Address</label>
                    <input
                        style={inputStyle}
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Department */}
                <div style={containerStyle}>
                    <label style={labelStyle}>Department</label>
                    <input
                        style={inputStyle}
                        type="text"
                        name="department"
                        placeholder="Engineering"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </div>

                {/* Designation */}
                <div style={containerStyle}>
                    <label style={labelStyle}>Designation</label>
                    <input
                        style={inputStyle}
                        type="text"
                        name="designation"
                        placeholder="Software Engineer"
                        value={formData.designation}
                        onChange={handleChange}
                    />
                </div>

                {/* Salary */}
                <div style={containerStyle}>
                    <label style={labelStyle}>Annual Salary ($)</label>
                    <input
                        style={inputStyle}
                        type="number"
                        name="salary"
                        placeholder="0.00"
                        value={formData.salary}
                        onChange={handleChange}
                    />
                </div>
                
                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <button 
                        type="submit"
                        style={{
                            backgroundColor: '#2563eb',
                            color: 'white',
                            padding: '12px 30px',
                            border: 'none',
                            borderRadius: '6px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '0.95rem'
                        }}
                    >
                        Save Employee
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EmployeeForm;
