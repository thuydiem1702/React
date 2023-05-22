import './App.css';
import { Route, Routes } from "react-router-dom";
import StudentList from "./component/student/StudentList";
import StudentCreate from "./component/student/StudentCreate";
import Navbar from "./component/shared/Navbar";
import StudentEdit from "./component/student/StudentEdit";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/create" element={<StudentCreate />} />
        <Route path="/edit/:id" element={<StudentEdit />} />
      </Routes>
    </>
  );
}

export default App;
