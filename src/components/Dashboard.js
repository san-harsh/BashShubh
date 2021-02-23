import React from 'react'
import DashboardImage from '../images/dashboard.png'

const Dashboard = () => {
    return (
      <div>
        <img src={DashboardImage} alt='dashboard' style={{ maxWidth: '100%', maxHeight: 'cover' }} />
      </div>
    )
}

export default Dashboard
