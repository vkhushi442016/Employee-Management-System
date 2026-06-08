import React, {useEffect, useState} from 'react'
import EmployeeForm from '../components/EmployeeForm'
import EmployeeTable from '../components/EmployeeTable'
import Navbar from '../components/Navbar'
import API from '../services/api'
import axios from 'axios'


const Employees = () => {
    const [employees, setEmployees] = useState([]);

    async function fetchEmployees() {

        try {
            const res = await API.get('/employees/get/emp')
            //http://localhost:5000/api/employees/get/emp
           // const res = await axios.get('http://localhost:5000/api/employees/get/emp');

            setEmployees(res.data);

        } catch (error) {

            console.log(error);
        }
    }

        useEffect(() => {

        fetchEmployees();

    }, []);

    async function addEmployee(employeeData) {

        try {

            await API.post(
                '/employees',
                employeeData
            );

            fetchEmployees();

        } catch (error) {

            console.log(error);
        }
    }

    async function deleteEmployee(id) {

        try {

            await API.delete(`/employees/${id}`);

            fetchEmployees();

        } catch (error) {

            console.log(error);
        }
    }

    return (
        <div>
            <Navbar />
             <h1 className='bg-red-300'>Employee Management</h1>
             <h3>Created by Khushi</h3>
             <h2>Yes the changes are reflecting</h2>
            <EmployeeForm
                onAddEmployee={addEmployee}
            />

            <EmployeeTable
                employees={employees}
                onDelete={deleteEmployee} />
        </div>
    )
}

export default Employees
