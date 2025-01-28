import React from 'react'
import { assets } from '../../assets/assets';
import './Main.css'

function Main() {



  
  return (
    <div className='main'>
        
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
          </div>

          <div className="cards">

            <div className="card">
              <p>Suggest some beautifull places in kerala for a oneday trip.</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
              <p>give me a beautifull topic to a presentaion with some intresting points.</p>
              <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
              <p>I want to learn react . give me a detail road map.</p>
              <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
              <p>what is redux.give basic and adavace things about it.</p>
              <img src={assets.code_icon} alt="" />
            </div>

          </div>

          <div className="main-bottom">

            <div className="search-box">

              <input type="text" placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>

            <p className="bottom-info">
              Gemimi may display inaccurate info, including about people, so double check its reponse. Your privacy and Gemini App
            </p>

          </div>

        </div>
      
    </div>
  )
}

export default Main
