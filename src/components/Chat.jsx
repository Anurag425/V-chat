import React, { useContext } from 'react'
import Cam from "../image/Cam.png"
import Add from "../image/add.png"
import More from "../image/more.png"
import { Messages } from "./Messages"
import { Input } from "./Input"
import { ChatContext } from '../context/ChatContext'

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
