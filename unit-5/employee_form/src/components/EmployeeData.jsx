import React from 'react';
import './EmployeeForm.css';

const EmployeeData = ({data}) => {
    const {name, age, address, department, isMarried, salary} = data; 

  return (
    <div className="table">
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Address : {address}</p>
        <p>Department : {department}</p>
        <p>Salary : {salary}</p>
        <p>isMarried : {isMarried?'Yes':'No'}</p>
    </div>
  )
}

export default EmployeeData;