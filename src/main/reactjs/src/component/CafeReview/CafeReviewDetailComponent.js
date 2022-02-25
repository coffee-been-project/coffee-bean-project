import React, { Component } from 'react';
import "../../css/review/reviewlist.css";
import Container from "@material-ui/core/Container";


class CafeReviewDetailComponent extends Component
{
    constructor ( props){
        super(props);

        this.state= {
            review_code:'',
            review_title: '',
            review_text: '',
            review_image: '',
            review_time: '',
            review_hide: '',
            cafe_code: '',
            user_code: '',

            message:null
        }
    }

    componentDidMount(){
        this.reloadReviewDetail();
    }

    reloadReviewDetail = () =>{

        fetch("http://localhost:8080/cafe_list/"+window.sessionStorage.getItem("cafe_code")+"/review_list/"
            +window.sessionStorage.getItem("review_code")+"/review_detail")
            .then((response) => response.json())
            .then( response => {
                let review = response;
                this.setState({
                    review_code:review.review_code,
                    review_title: review.review_title,
                    review_text: review.review_text,
                    review_image: review.review_image,
                    review_time: review.review_time,
                    review_hide: review.review_hide,
                    cafe_code: review.cafe_code,
                    user_code: review.user_code,
                })
            })

            .catch(err => {
                console.log('reloadReviewDetail() Error!',err);
            })
    }

    render(){
        return(
            <Container>
            <div>
                <main className="main">

                    <div className="review-container">
                        <div className="review-order">
                            <p>{this.state.review_code}</p>
                        </div>
                        <div className="review-date">
                            <p>{this.state.review_time}</p>
                        </div>
                        <div className="review-title">
                            <p>{this.state.review_title}</p>
                        </div>
                        <div className="review-userid">
                            <p>{this.state.user_code}</p>
                        </div>
                        <div className="review-content">
                            <p>{this.state.review_text}</p>
                        </div>
                        <div className="review-picture">
                            <p>{this.state.review_image}</p>
                        </div>
                    </div>

                </main>
            </div>
            </Container>
        )
    }
}

export default CafeReviewDetailComponent;