/* eslint-disable prettier/prettier */
import React from 'react'
import { Search } from 'lucide-react'
import logo from '../../../assets/brand/logo.png'
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
function GettingStarted() {
  const navigate = useNavigate()
  const handleGettingStartedForAcc = () => {
    navigate('/HelpSupp/Getting-started/For-Accounts-Admins')
  }

  const handleGettingStartedForUser = () => {
    navigate('/HelpSupp/Getting-started/For-User')
  }

  const handleTheBasicsOfCredence = () => {
    navigate('/HelpSupp/The-Basics-Of-Credence')
  }

  const handleNavigatingCredence = () => {
    navigate('/HelpSupp/Navigating-Credence')
  }
  return (
    <div
      style={{ backgroundColor: 'white', borderBottom: '1px solid #dee2e6' }}
      className="pb-5 px-5"
    >
      {/*HEADER */}
      <div>
        <div className="ms-5 pt-2">
          <img src={logo} style={{ width: '180px' }} />
        </div>
      </div>
      <div className="text-center d-flex flex-column" style={{ fontWeight: '800' }}>
        <h4 style={{ fontWeight: '800' }}>Getting Started</h4>
        <div className="d-flex justify-content-center mt-2">
          <div className="bg-warning rounded-5" style={{ height: '4px', width: '80px' }}></div>
        </div>
      </div>
      {/**Articles Nav Bar */}
      <div className="mt-5 d-flex justify-content-center">
        <CCard
          className="shadow rounded-4"
          style={{ width: '50rem', paddingTop: '20px', border: 'none' }}
        >
          <CCardBody>
            <CCardTitle
              className="py-3 btn"
              style={{ fontSize: '20px', fontWeight: 'bold', border: 'none' }}
              onClick={handleNavigatingCredence}
            >
              Navigating Credence Tracker: Standard Menus, Buttons, Icons and Pages
            </CCardTitle>
            <hr />
            <CCardTitle
              className="py-3 btn"
              style={{ fontSize: '20px', fontWeight: 'bold', border: 'none' }}
            >
              Welcome to Credence Tracker
            </CCardTitle>
            <hr />
            <CCardTitle
              className="py-3 btn"
              style={{ fontSize: '20px', fontWeight: 'bold', border: 'none' }}
            >
              Navigate, Search, Filter
            </CCardTitle>
            <hr />
            <CCardTitle
              className="py-3 btn"
              style={{ fontSize: '20px', fontWeight: 'bold', border: 'none' }}
            >
              Credence Tracker Quick Start Guide
            </CCardTitle>
          </CCardBody>
        </CCard>
      </div>
    </div>
  )
}
export default GettingStarted
