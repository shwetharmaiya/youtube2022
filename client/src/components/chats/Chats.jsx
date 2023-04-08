import React from "react"

import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

//import { auth } from "../firebase"

export default function Chats() {
 // const history = useHistory()

//   async function handleLogout() {
//     await auth.signOut()
//     history.push("/")
//   }

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Unichat
        </div>

        {/* <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div> */}
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='98976b60-c084-4ff1-8c1a-4b613fc76cd7'
        userName='shwetha'
        userSecret='cdcd9c71-018e-49d8-ad3e-ac907282a306'
      />
    </div>
  )
}