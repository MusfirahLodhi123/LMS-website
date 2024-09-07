import React from 'react';
import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import StudentRegistration from './StudentRegistration';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import StudentList from './StudentList';
import TeacherRegistration from './TeacherRegistration';
import TeacherList from './TeacherList';
import SubjectAdd from './SubjectAdd';
import SubjectList from './SubjectList';
import FeeStructure from './FeeStructure';
import FeeSubmission from './FeeSubmission';
import Admission from './Admission';
import ExamSchedule from './ExamSchedule';
import ExamResults from './ExamResult';
import ResultSchedule from './ResultSchedule';
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  return (
    <>
      <Routes>
        {/* Routes without Sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/*" element={
            <div className="container">
              <Sidebar />
              <div className="content">
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path="/students/registration" element={<StudentRegistration />} />
                  <Route path="/students/list" element={<StudentList />} />
                  <Route path='/teachers/registration' element={<TeacherRegistration />} />
                  <Route path='/teachers/list' element={<TeacherList />} />
                  <Route path='/subjects/add' element={<SubjectAdd />} />
                  <Route path='/subjects/list' element={<SubjectList />} />
                  <Route path='fee-structure' element={<FeeStructure />} />
                  <Route path='fee-submission' element={<FeeSubmission />} />
                  <Route path='admission/form' element={<Admission />} />
                  <Route path='exams/schedule' element={<ExamSchedule />} />
                  <Route path='results' element={<ExamResults />} />
                  <Route path='result-schedule' element={<ResultSchedule />} />
                </Routes>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </>
  );
};

export default App;
