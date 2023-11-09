import React, {useState} from 'react';

import './App.css';
import {Avatar, Table} from 'antd';
import Container from "./Container";
import {getAllStudents} from "./client";


function App(props) {

   const [student, setStudent] = useState([]);

    const columns = [
        {title: '', key: 'avatar', render: (text, student) => {
            <Avatar size='large'>
                {`${student.firstName.charAt(0).toUpperCase()}`}
            </Avatar>
        }
    }, {
        title: 'Student Id', dataIndex: 'studentId', key: 'studentId'
    }, {
        title: 'First Name', dataIndex: 'firstName', key: 'firstName'
    }, {
        title: 'Last Name', dataIndex: 'lastName', key: 'lastName'
    }, {
        title: 'Email', dataIndex: 'email', key: 'email'
    }, {
        title: 'Gender', dataIndex: 'gender', key: 'gender'
    }]

    getAllStudents().then((res) =>
        setStudent((prev) => {
            return ({...prev, student: res.json()});
        }));

    return (<Container>
        {/*TODO*/}
        <Table dataSource={student.data} columns={columns} pagination={false} rowKey='studentId'/>
    </Container>)

}

export default App;
