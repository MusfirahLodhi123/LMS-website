import React, { useState } from 'react';
import { IoPersonCircle, IoPersonRemove } from "react-icons/io5";
import { RiMenuUnfold2Fill, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FaUserPlus, FaList, FaChalkboardTeacher, FaBook, FaMoneyBill, FaFileInvoice, FaCalendarAlt, FaGrav } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, signOut } from './configuration/firebase';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubOptions = (link) => {
    setActiveLink(activeLink === link ? null : link);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      signOut(auth)
        .then(() => {
          console.log('User logged out');
          navigate('/login'); 
        })
        .catch((error) => {
          console.error('Error logging out:', error);
        });
    }
  };

  const sidebarLinks = [
    { 
      name: 'Students', 
      route: '/students',
      icon: <FaUserPlus />,
      subOptions: [
        { name: 'Student Registration', route: '/students/registration' },
        { name: 'Student List', route: '/students/list' }
      ]
    },
    { 
      name: 'Teachers', 
      route: '/teachers',
      icon: <FaChalkboardTeacher />,
      subOptions: [
        { name: 'Teacher Registration', route: '/teachers/registration' },
        { name: 'Teacher List', route: '/teachers/list' }
      ]
    },
    { 
      name: 'Subjects', 
      route: '/subjects',
      icon: <FaBook />,
      subOptions: [
        { name: 'Subject Add', route: '/subjects/add' },
        { name: 'Subject List', route: '/subjects/list' }
      ]
    },
    { 
      name: 'Fee Submission', 
      route: '/fee-submission',
      icon: <FaMoneyBill />,
      subOptions: [
        { name: 'Fee Structure', route: '/fee-structure' },
        { name: 'Fee Submission', route: '/fee-submission' }
      ]
    },
    { 
      name: 'Admission', 
      route: '/admission',
      icon: <FaFileInvoice />,
      subOptions: [{ name: 'Admission Form', route: '/admission/form' }] 
    },
    { 
      name: 'Exams', 
      route: '/exams',
      icon: <FaCalendarAlt />,
      subOptions: [{ name: 'Exam Schedule', route: '/exams/schedule' }] 
    },
    { 
      name: 'Results', 
      route: '/results',
      icon: <FaGrav />,
      subOptions: [
        { name: 'Result Schedule', route: '/result-schedule' },
        { name: 'Result', route: '/results' }
      ]
    }
  ];

  return (
    <>
      <Navbar fixed="top" style={{ backgroundColor: '#8E1DFF' }}>
        <Container fluid>
          <div className="navb-text">Learning Management System</div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <button className='logout-icon' onClick={handleLogout}>
              <abbr title="Logout"><IoPersonRemove /></abbr>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="menu-icon-wrapper">
        <RiMenuUnfold2Fill className="menu-icon" onClick={toggleSidebar} />
      </div>

      <div className={`sidebar-wrapper ${isOpen ? "open" : "closed"}`}>
        <div className={`slide ${isOpen ? "open" : "closed"}`}>
          <div className="sidebar-links">
            {sidebarLinks.map((linkItem) => (
              <div className="sidebar-item" key={linkItem.route}>
                <a href="#" onClick={() => toggleSubOptions(linkItem.route)}>
                  {linkItem.icon}
                  &nbsp; {linkItem.name}
                  {activeLink === linkItem.route ? <RiArrowUpSLine className="expand-icon" /> : <RiArrowDownSLine className="expand-icon" />}
                </a>
                {activeLink === linkItem.route && (
                  <div className="sub-options">
                    {linkItem.subOptions.map((subOption) => (
                      <NavLink key={subOption.route} to={subOption.route} className="sub-option-link">
                        {subOption.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
