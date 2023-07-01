import React from 'react'
import DashboardToggle from '../dashboard/DashboardToggle'
import CreateRoomBtnModal from './CreateRoomBtnModal'

function Sidebar() {
  return (
    <div className="h-100 pt-2" >
      <div>
        <DashboardToggle />
        <CreateRoomBtnModal/>
      </div>
      
    </div>
  )
}

export default Sidebar
