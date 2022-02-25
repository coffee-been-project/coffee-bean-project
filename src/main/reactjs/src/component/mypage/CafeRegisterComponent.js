import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "../../css/mypage/caferegister.css";

class CafeRegisterComponent extends Component
{
    render(){
        return(
            <div>
                <main className="main">
                    <div className="beforeContainer">
                        <div></div>
                        <div>
                            <Button size="small" color="primary">
                                카페 등록
                            </Button>
                            <Button size="small" color="primary">
                                카페 수정
                            </Button>
                            <Button size="small" color="primary">
                                커피 등록
                            </Button>
                        </div>
                    </div>
                    <container className="cafeRegister">
                        <div className="cafeName">이름</div>
                        <div className="Box"></div>
                        <div className="coffeeName">커피이름</div>
                        <div className="Box"></div>
                        <div className="cafeLocation">위치</div>
                        <div className="Box"></div>
                        <div className="coffeeUsedBean">사용원두</div>
                        <div className="Box"></div>
                        <div className="cafePhone">전화번호</div>
                        <div className="Box"></div>
                        <div className="coffeePrice">커피가격</div>
                        <div className="Box"></div>
                        <div className="cafeWebsite">웹사이트</div>
                        <div className="Box"></div>
                        <div className="coffeeProcessMethod">가공방식</div>
                        <div className="Box"></div>
                        <div className="cafeTime">운영시간</div>
                        <div className="Box"></div>
                        <div className="coffeePicture">커피사진</div>
                        <div className="Box">
                            <Button size="small" color="primary">
                                사진 업로드
                            </Button>
                        </div>
                        <div className="cafePicture">카페사진</div>
                        <div className="Box">
                            <Button size="small" color="primary">
                                사진 업로드
                            </Button>
                        </div>
                        <div className="coffeeList">등록커피목록</div>
                        <div className="Box"></div>
                    </container>
                </main>
            </div>
        )
    }
}

export default CafeRegisterComponent;