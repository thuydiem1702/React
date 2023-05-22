import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import * as studentService from '../../service/studentService'
import * as studentTypeService from '../../service/studentServiceType'
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';


export default function StudentEdit() {
    const [student, setStudent] = useState({});
    const [studentTypes, setStudentTypes] = useState(null);
    let navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            setStudent(await studentService.findById(id))
        }
        fetchApi();
    }, [])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await studentTypeService.findAll();
            setStudentTypes(result);
        }

        fetchApi();
    }, []);
    const handleSuccessAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Student edit successfully!',
            showConfirmButton: false,
            timer: 1500
        });
    };

    // if (!student.id) return null;
    return (
        studentTypes && student.id && <>
            <div className="container">
                <Formik
                    initialValues={
                        { ...student, studentType: student.studentType.id }
                    }
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Name is Required')
                            .min(5, 'Name to short'),
                        score: Yup.number()
                            .required('Score is Required')
                            .min(0, 'Score must be greater than or equal to 0')
                            .max(10, 'Score must be less than or equal to 10'),
                        studentType: Yup.number()
                            .required('Student Type is Required')
                    })}
                    onSubmit={(values) => {
                        debugger
                        const studentType = studentTypes.find(it => it.id === +values.studentType);

                        studentService.update({ ...values, id: student.id, studentType: studentType });
                        handleSuccessAlert();
                        navigate("/");
                    }}
                >
                    {
                        <Form>
                            <h1 className="text-center">Edit Student</h1>

                            <div className="input-group mb-3">
                                <div className="col-md-2"></div>
                                <label className="col-md-1" htmlFor="name">Name</label>
                                <Field className="col-md-6" type="text"
                                    name="name" id="name" className="form-control" placeholder="Name" />
                                <div className="col-md-3 text-danger">
                                    <ErrorMessage name="name" />
                                </div>
                            </div>


                            <div className="input-group mb-3">
                                <div className="col-md-2"></div>
                                <label className="col-md-1" htmlFor="score">Score</label>
                                <Field className="col-md-6" type="number"
                                    name="score" id="score" className="form-control" placeholder="Score" />
                                <div className="col-md-3 text-danger">
                                    <ErrorMessage name="score" />
                                </div>
                            </div>

                            <div className="input-group  mb-3">
                                <div className="col-md-2"></div>
                                <label className="col-md-1" htmlFor="studentType">Student Type</label>
                                <Field as="select" className="form-select col-md-6" name="studentType" id="studentType">
                                    <option value="">Your chose</option>
                                    {
                                        studentTypes.map(studentType => (
                                            <option value={studentType.id}>{studentType.name}</option>
                                        )
                                        )
                                    }
                                </Field>
                                <div className="col-md-3 text-danger">
                                    <ErrorMessage name="studentType" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3"></div>
                                <button type="submit" name="" id=""
                                    className="btn btn-primary btn-lg col-md-2">
                                    Update
                                </button>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </>
    )
}
