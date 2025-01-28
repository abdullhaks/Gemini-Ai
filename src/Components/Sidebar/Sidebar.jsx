import React, { useContext, useState } from 'react'
import  './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../Context/context';

function Sidebar() {

const [extended,setExtended] = useState(false);
function handleClick(){
  setExtended((extended)=>extended?false:true)
};

const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);
const loadPrompt = (promt)=>{
  setRecentPrompt(promt)
  onSent(promt)
}

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={handleClick}
          src={assets.menu_icon}
          alt="Menu"
        />
        <div className="new_chat" onClick={()=>newChat()}>
          <img src={assets.plus_icon} alt="." />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>

            {prevPrompts.map((item, indx) => {
              return (
                <div
                  className="recent-entry"
                  key={indx}
                  onClick={() => {
                    loadPrompt(item);
                  }}
                >
                  <img src={assets.message_icon} alt="." />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="?" />
          {extended && <p>Help</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="?" />
          {extended && <p>Activity</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="?" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar
