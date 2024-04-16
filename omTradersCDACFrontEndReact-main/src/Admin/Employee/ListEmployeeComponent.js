import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from './EmployeeService';

const ListEmployeeComponent = () => {
    const [employeeArray, setEmployeeArray] = useState([]);

    useEffect(() => {
        getAllEmployee();
    }, []);

    function getAllEmployee() {
        EmployeeService.getAllEmployee()
            .then(res => { setEmployeeArray(res.data); console.log(res); })
            .catch(e => console.log(e));
    }

    function deleteEmployee(e, id) {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then(getAllEmployee()).catch(e => console.log(e));
    }

    return (
        <div className='container mx-auto'>
            <Link to={"/admin/add-employee"} className='bg-blue-500 text-white py-2 px-4 rounded mb-2 mt-3 inline-block'>
                Add Employee
            </Link>
            <h2 className='text-center mb-4 text-2xl font-bold'>List Employee</h2>
            <table className='table-auto w-full border'>
                <thead>
                    <tr>
                        <th className='border px-4 py-2'>Employee ID</th>
                        <th className='border px-4 py-2'>Employee First Name</th>
                        <th className='border px-4 py-2'>Employee Last Name</th>
                        <th className='border px-4 py-2'>Employee Email</th>
                        <th className='border px-4 py-2'>Employee AadharCardNo</th>
                        <th className='border px-4 py-2'>Employee Mobile No. </th>
                        <th className='border px-4 py-2'>Employee Salary </th>
                        <th className='border px-4 py-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeArray.map(employee =>
                        <tr key={employee.id}>
                            <td className='border px-4 py-2'>{employee.id}</td>
                            <td className='border px-4 py-2'>{employee.firstName}</td>
                            <td className='border px-4 py-2'>{employee.lastName}</td>
                            <td className='border px-4 py-2'>{employee.email}</td>
                            <td className='border px-4 py-2'>{employee.AadharCardNo}</td>
                            <td className='border px-4 py-2'>{employee.mobileNo}</td>
                            <td className='border px-4 py-2'>{employee.Salary}</td>
                            <td className='border px-4 py-2'>
                                <Link to={`/admin/add-employee/${employee.id}`} className='bg-blue-500 text-white py-1 px-2 rounded inline-block mr-2'>
                                    Update
                                </Link>
                                <button onClick={(e) => deleteEmployee(e, employee.id)} className='bg-red-500 text-white py-1 px-2 rounded inline-block'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;
