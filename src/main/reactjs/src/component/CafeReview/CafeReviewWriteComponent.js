import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import "../../css/review/reviewwrite.css";
const browseBtn = document.querySelector('.browse-btn');
const realInput = document.querySelector('#real-input');

// browseBtn.addEventListener('click',()=>{
//     realInput.click();
// });

class CafeReviewWriteComponent extends Component
{


    render(){
        return(
            <React.Fragment>
            <div>
                <main className="main">
                    <form action="/api/reviewWrite" method="post"/>
                    <div className="review-container">
                        <div className="review-order">
                            <p>리뷰번호</p>
                        </div>
                        <div className="review-date">
                            <input type={'date'} />
                        </div>
                        <div className="review-title">
                            <input type='text' id='title_txt' name='title' placeholder='리뷰제목'/>
                        </div>
                        <div className="review-userid">
                            <p>작성자아이디</p>
                        </div>
                        <div className="review-content">
                            <input type={'text'} placeholder={'리뷰를 작성해주세요.'}/>
                        </div>
                        <div className="review-picture">
                            <input type="file" id="imageFileOpenInput" className="image_inputType_file" accept="image/jpg" />

                            <button className="browse-btn">리뷰사진 업로드</button>
                        </div>

                        <div className="reviewDone-button">
                            <CardActions>
                                <Button type="submit" size="small" color="primary">
                                    리뷰 작성완료
                                </Button>
                            </CardActions>
                        </div>

                    </div>
                </main>
            </div>
                <div></div>
                <div></div>
            </React.Fragment>
        )
    }
}

export default CafeReviewWriteComponent;