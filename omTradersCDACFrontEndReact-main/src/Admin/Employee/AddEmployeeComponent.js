import React, { useState, useEffect } from 'react';
import EmployeeService from './EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './AddEmployeeComponent.css';

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [AadharCardNo, setAadharCardNo] = useState('');
  const [mobileNo, setmobileNo] = useState('');
  const [Salary, setSalary] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const employeeData = { firstName, lastName, email, AadharCardNo,mobileNo,Salary};

  function saveEmployee(e) {
    e.preventDefault();

    if (employeeData.firstName !== "" && employeeData.lastName !== "" && employeeData.email !== "" && employeeData.AadharCardNo !== "" && employeeData.mobileNo !== "" && employeeData.Salary !== "") {
      if (id) {
        EmployeeService.updateEmployee(id, employeeData)
          .then(() => navigate("/admin/employee"))
          .catch(e => console.log(e));
      } else {
        EmployeeService.saveEmployee(employeeData)
          .then(() => navigate("/admin/employee"))
          .catch(e => console.log(e));
      }
    } else {
      alert("Please, fill in all inputs");
    }
  }

  function title() {
    return id ? "Update Employee" : "Add Employee";
  }

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then(res => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
          setAadharCardNo(res.data.AadharCardNo);
          setmobileNo(res.data.mobileNo);
          setSalary(res.data.Salary);
        })
        .catch(e => console.log(e));
    }
  }, [id]);

  return (
    <div className="my-form-container">
      <div className="header">
        <h2>{title()}</h2>
      </div>
      <div className="form">
        <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input
                  className="textbox"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input
                   className="textbox"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                   className="textbox"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">AadharCardNo</label>
                <input
                   className="textbox"
                  type="text"
                  value={AadharCardNo}
                  onChange={(e) => setAadharCardNo(e.target.value)}
                  placeholder="Enter Aadhar Card Number "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-950 text-sm font-bold mb-2">Mobile Number </label>
                <input
                   className="textbox"
                  type="text"
                  value={mobileNo}
                  onChange={(e) => setmobileNo(e.target.value)}
                  placeholder="Enter Mobile Number "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-950 text-sm font-bold mb-2">Salary</label>
                <input
                   className="textbox"
                  type="text"
                  value={Salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Enter Salary "
                />
              </div>
              <div className="flex justify-end">
                <button onClick={(e) => saveEmployee(e)} className="flex justify-end">
                  Save
                </button>
                <Link to="/admin/employee" className="cancel-button">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
     
  );
};

export default AddEmployeeComponent;
