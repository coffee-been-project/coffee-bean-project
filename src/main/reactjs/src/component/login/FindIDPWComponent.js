import React, {useState} from 'react';
import "../../css/userRegister/findIdPw.css";
import PWComponent from "./PWComponent";
import IDComponent from "./IDComponent";

function FindIDPWComponent(){
    const [viewCalendar, setViewCalendar] = useState(true)
    const [tab, setTab] = useState('curr');

    return (
        <div className="find-container">
            <div className="find-wrap">
                <div className="btn-group">
                    <button className={`btn ${tab === 'curr' ? 'active' : ''}`}
                            onClick={() => {
                                setViewCalendar(true)
                                setTab('curr')
                            }}>ID 찾기</button>
                    <button className={`-btn ${tab === 'prev' ? 'active' : ''}`}
                            onClick={() => {
                                setViewCalendar(false)
                                setTab('prev')
                            }}>PW 찾기</button>
                </div>
                <div className="mainComponentWrapper">
                    { viewCalendar ? <IDComponent/> : <PWComponent/> }
                </div>
            </div>
        </div>
    );
}

export default FindIDPWComponent;