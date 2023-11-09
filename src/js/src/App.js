import React, {useEffect, useState} from 'react';

import './App.css';
import {Avatar, Table} from 'antd';
import Container from "./Container";
import {getAllStudents} from "./client";


function App(props) {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = () => {
        getAllStudents().then((res) => {
            setStudent(res);
        });
    }

    return (
        student && student.length > 0 && (
            <Container>
                {/*TODO*/}
                <Table
                    dataSource={student}
                    columns={columns}
                    pagination={false}
                    rowKey='studentId'
                />
            </Container>
        ))
}

const columns = [
    {
        title: '',
        key: 'avatar',
        render: (text, student) => {
            return (
                <Avatar size='large'>
                    {`${student.firstName.charAt(0).toUpperCase()}`}
                </Avatar>
            )
        }
    },
    {
        title: 'Student Id',
        dataIndex: 'studentId',
        key: 'studentId'
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName'
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender'
    }
];

export default App;
