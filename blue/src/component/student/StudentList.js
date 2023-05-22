import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as studentService from '../../service/studentService'


export default function StudentList() {
    let navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState([]);

    const fetchApi = async () => {
        const result = await studentService.findAll();
        debugger
        setStudents(result);
    }

    useEffect(() => {

        fetchApi();
    }, []);

    const deleteStudent = async () => {
        await studentService.deleteById(student.id);
        fetchApi();
    }

    return (
        <>
            <div className="container">
                <button onClick={() => navigate('/create')} className="btn btn-primary btn-lg col-md-2">
                    Create
                </button>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Student type</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, index) => (
                                <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.score}</td>
                                    <td>{student.studentType?.name}</td>
                                    <td>
                                        <button onClick={() => navigate(`/edit/${student.id}`)} type="submit" name="" id=""
                                            className="btn btn-primary btn-lg col-md-5">
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        {/*<button onClick={() => navigate(`/edit/${student.id}`)}  type="submit" name="" id=""*/}
                                        {/*        className="btn btn-danger btn-lg col-md-3">*/}
                                        {/*    Delete*/}
                                        {/*</button>*/}
                                        <button onClick={() => setStudent(student)} type="button"
                                            className="btn btn-danger btn-lg col-md-5" data-bs-toggle="modal"
                                            data-bs-target="#modelId">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="modelTitleId"></h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Do you want delete <span className="text-danger">{student.name}</span>?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => deleteStudent()} type="button" className="btn btn-primary"
                                data-bs-dismiss="modal">Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
