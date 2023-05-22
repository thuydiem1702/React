import React, { Component } from "react";

class StudentInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [
                {
                    id: 1,
                    name: 'Nguyen A',
                    age: 20,
                    addRess: 'DN'
                },
                {
                    id: 2,
                    name: 'Nguyen B',
                    age: 20,
                    addRess: 'DN'
                }
            ]
        }
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map(student => (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.addRess}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    };
}
export default StudentInfo;