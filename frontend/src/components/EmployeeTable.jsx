function EmployeeTable({ employees, onDelete }) {
    // Shared styles to keep the JSX clean
    const tableHeaderStyle = {
        padding: "12px 15px",
        textAlign: "left",
        backgroundColor: "#f8fafc",
        borderBottom: "2px solid #e2e8f0",
        color: "#64748b",
        fontSize: "0.85rem",
        textTransform: "uppercase",
        letterSpacing: "0.05em"
    };

    const cellStyle = {
        padding: "12px 15px",
        borderBottom: "1px solid #f1f5f9",
        color: "#334155",
        fontSize: "0.95rem"
    };

    return (
        <div style={{ overflowX: "auto", borderRadius: "8px", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", fontFamily: "Inter, system-ui, sans-serif" }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>ID</th>
                        <th style={tableHeaderStyle}>Name</th>
                        <th style={tableHeaderStyle}>Email</th>
                        <th style={tableHeaderStyle}>Dept.</th>
                        <th style={tableHeaderStyle}>Designation</th>
                        <th style={tableHeaderStyle}>Salary</th>
                        <th style={{ ...tableHeaderStyle, textAlign: "center" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr 
                            key={employee._id} 
                            style={{ transition: "background-color 0.2s" }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#fdfdfd"}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                        >
                            <td style={{ ...cellStyle, fontWeight: "600", color: "#1e293b" }}>{employee.emp_id}</td>
                            <td style={cellStyle}>{employee.name}</td>
                            <td style={{ ...cellStyle, color: "#64748b" }}>{employee.email}</td>
                            <td style={cellStyle}>
                                <span style={{ padding: "4px 8px", backgroundColor: "#f1f5f9", borderRadius: "4px", fontSize: "0.8rem" }}>
                                    {employee.department}
                                </span>
                            </td>
                            <td style={cellStyle}>{employee.designation}</td>
                            <td style={cellStyle}>${Number(employee.salary).toLocaleString()}</td>
                            <td style={{ ...cellStyle, textAlign: "center" }}>
                                <button
                                    onClick={() => onDelete(employee._id)}
                                    style={{
                                        padding: "6px 12px",
                                        backgroundColor: "#fee2e2",
                                        color: "#dc2626",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        fontWeight: "500",
                                        transition: "all 0.2s"
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = "#dc2626";
                                        e.target.style.color = "white";
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = "#fee2e2";
                                        e.target.style.color = "#dc2626";
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;
