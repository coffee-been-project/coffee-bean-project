import React, { Component } from 'react';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';

class IndexFooterComponent extends Component{
    render(){
        return(
            <footer className="index-footer">
                <div className="best-coffee-list">
                    <a href="/cafe-list/cafeaulait">
                        <div className="one best-coffee">
                            <div className="img-container">
                                <img intrinsicsize="" src={img1} alt="" />
                            </div>
                            <div>
                                <h2>벨벳 다크 모카...</h2>
                            </div>
                        </div>
                    </a>
                    <a href="/cafe-list/cafelatte">
                        <div className="two best-coffee">
                            <div className="img-container">
                                <img intrinsicsize="" src={img2} alt="" />
                            </div>
                            <div>
                                <h2>콜드 브루 몰트</h2>
                            </div>
                        </div>
                    </a>
                    <a href="/cafe-list/americano">
                        <div className="three best-coffee">
                            <div className="img-container">
                                <img intrinsicsize="" src={img3} alt="" />
                            </div>
                            <div>
                                <h2>콜드 브루 플로트</h2>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="four best-coffee">

                        </div>
                    </a>
                    <a href="#">
                        <div className="five best-coffee">

                        </div>
                    </a>
                    <a href="#">
                        <div className="six best-coffee">

                        </div>
                    </a>
                    <a href="#">
                        <div className="seven best-coffee">

                        </div>
                    </a>
                    <a href="#">
                        <div className="eight best-coffee">

                        </div>
                    </a>
                    <a href="#">
                        <div className="nine best-coffee">

                        </div>
                    </a>
                    <a href="#">
                        <div className="ten best-coffee">
                        </div>
                    </a>
                </div>
            </footer>
        );
    }

}

export default IndexFooterComponent;