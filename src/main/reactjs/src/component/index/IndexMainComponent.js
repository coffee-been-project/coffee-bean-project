import React, { Component, useRef } from 'react';
import svg1 from "./magnifying-glass-solid.svg";

let bean;
let method_js;
let area;
let info_js;

const onChange1 = (event) => {
    bean = event.target.value;
}
const onChange2 = (event) => {
    method_js = event.target.value;
}
const onChange3 = (event) => {
    area = event.target.value;
}
const onChange4 = (event) => {
    info_js = event.target.value;
}
const onSubmit = (event) => {
    window.sessionStorage.setItem("bean", bean);
    window.sessionStorage.setItem("method", method_js);
    window.sessionStorage.setItem("area", area);
    window.sessionStorage.setItem("info", info_js);
};

class IndexMainComponent extends Component{

    render(){
        return(
            <main className="index-main">
                <form action="/cafe-list" method="get" className="search-box">
                    <input className="search-bean" type="text" list="beans-list" placeholder="어떤 원두를 찾으시나요?" name="bean" id="bean" onChange={onChange1}/>
                    <datalist id="beans-list">
                        <option value="케냐AA" />
                        <option value="피베리" />
                        <option value="과테말라 안티구아" />
                        <option value="브라질 산토스" />
                        <option value="수프레모" />
                        <option value="코스타리카 따라주" />
                    </datalist>

                    <div className="screen"></div>

                    <input className="search-method" type="text" list="extraction-method" placeholder="추출 방식" name="method" id="method_js" onChange={onChange2}/>
                    <datalist id="extraction-method">
                        <option value="에스프레소" />
                        <option value="핸드 드립" />
                        <option value="콜드 브루" />
                        <option value="달임식" />
                    </datalist>

                    <div className="screen"></div>

                    <input className="search-area" type="text" list="area" placeholder="지역" name="area" id="area" onChange={onChange3}/>
                    <datalist id="area">
                        <option value="서울" />
                        <option value="부산" />
                        <option value="인천" />
                        <option value="대구" />
                        <option value="대전" />
                        <option value="광주" />
                        <option value="울산" />
                    </datalist>

                    <div className="screen"></div>

                    <input className="search-cafe" type="text" list="cafe-info" placeholder="카페 특이사항" name="info" id="info" onChange={onChange4}/>
                    <datalist id="cafe-info">
                        <option value="없음" />
                        <option value="반려동물 출입 가능" />
                        <option value="야외 테라스 존재" />
                    </datalist>

                    <button  type="submit" className="search-btn" onClick={onSubmit}>
                        <img src={svg1} className="icon"/>
                    </button>
                </form>
            </main>
        );
    }
}



export default IndexMainComponent;