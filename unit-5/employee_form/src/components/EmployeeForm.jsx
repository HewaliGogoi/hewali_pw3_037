import React, {useState} from 'react';
import EmployeeData from './EmployeeData';
import './EmployeeForm.css';

const EmployeeForm = () => {
    const initState = {
        name : '',
        age : '',
        address : '',
        department : '',
        isMarried : '',
        salary : ''
    };  

    const [data, setData] = useState(initState);
    const [list, setList] = useState([]);

    const {name, age, address, department, isMarried, salary} = data; 

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setData({...data, 
                [name] : type=="checkbox"?checked:value
        })
        // console.log(e.target)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let myData = await fetch(`https://hewali-fakeserver.herokuapp.com/employee`, {
            method: 'POST',
            body : JSON.stringify(data),
            headers: {'Content-Type' : 'application/json'}
        });
        console.log(myData);
        console.log(data);
        getData();
    }

    const getData = async () => {
        let myData = await fetch(`https://hewali-fakeserver.herokuapp.com/employee`);
        myData = await myData.json();
        setList([...myData]);
        // console.log(list);
    }

    return (
    <>
        <h1>Form : Employee Details</h1>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="">
                Name <input onChange={handleChange} type="text" name='name' value={name}/>
            </label>
            <label htmlFor="">
                Age <input onChange={handleChange} type="number" name='age' value={age}/>
            </label>
            <label htmlFor="">
                Address <textarea onChange={handleChange} name="address" value={address} cols="30" rows="10"></textarea>
            </label>
            <label htmlFor="">
                Department 
                <select onChange={handleChange} name="department" value={department} id="">
                    <option value="CS">Customer Support</option>
                    <option value="Eng">Engineering</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                </select>
            </label>
            <label htmlFor="">
                Salary <input onChange={handleChange} type="number" name='salary' value={salary}/>
            </label>
            <label htmlFor="">
                Marital State <input onChange={handleChange} type="checkbox" name='isMarried' value={isMarried}/>
            </label>
            <button type="submit">SUBMIT</button>
        </form>
        <div>
            {
                list.map((e) => <EmployeeData data={e}/>)
            }
        </div>
    </>
    )
}

export default EmployeeForm;