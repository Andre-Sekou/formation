import React, {useState} from 'react';

import './App.css';
import {Avatar, Table} from 'antd';
import Container from "./Container";


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

    // setStudent((student) => {
    //         return [
    //             student = getAllStudents()
    //         ]
    //     }
    // );
    const d = [
        {
            studentId: '2', firstName: 'ZONGO', lastName: 'Sekou', email: 'aszongo@gmail.com', gender: 'MALE'
        },
        {
            studentId: '2', firstName: 'ZONGO', lastName: 'Sekou', email: 'aszongo@gmail.com', gender: 'MALE'
        },
        {
            studentId: '2', firstName: 'ZONGO', lastName: 'Sekou', email: 'aszongo@gmail.com', gender: 'MALE'
        }
    ]
    return (<Container>
        <Table dataSource={[d]} columns={columns} pagination={false} rowKey='studentId'/>
    </Container>)

}

export default App;
