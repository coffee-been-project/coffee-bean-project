import React, { Component} from 'react';
import "../../css/review/reviewlist.css";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

class CafeReviewListComponent extends Component
{
    constructor ( props){
        super(props);

        this.state= {

            reviews: [],
            message:null
        }
    }

    componentDidMount(){
        this.reloadReviewList();
    }

    reloadReviewList = () =>{

        fetch("http://localhost:8080/cafe_list/"+window.sessionStorage.getItem("cafe_code")+"/review_list")
            .then((response) => response.json())
            .then( response => {
                this.setState({

                    reviews: response
                })
            })

            .catch(err => {
                console.log('reloadReviewList() Error!',err);
            })

    }

    reviewDetail = (code) => {
        window.sessionStorage.setItem("review_code",code);
        window.location.href="/cafe-review-detail";
    }

    render(){

        return(
            <React.Fragment>
            <div>
                <div className="tableBox">
                    <table className="reviewList">
                        <thead>
                        <tr className="tr">
                            <th className="th">리뷰번호</th><th className="th">리뷰제목</th><th className="th">작성자번호</th><th className="th">리뷰작성날짜</th>
                        </tr>
                        </thead>
                        {this.state.reviews.map ( review =>
                            <tbody>
                            <script>
                            </script>
                            <tr className="tr">
                                <td className="td">{review.review_code}</td><td className="td"><Button onClick={() => this.reviewDetail(review.review_code)}>{review.review_title}</Button></td>
                                <td className="td">{review.user_code}</td><td className="td">{review.review_time}</td>
                            </tr>
                            </tbody>
                        )}
                    </table>
                    <div className="reviewWrite-button">
                        <CardActions>
                            <Button type="submit" size="small" color="primary" href={"http://localhost:8080/cafe-review-write"}>
                                리뷰 작성하기
                            </Button>
                        </CardActions>
                    </div>
                </div>
            </div>
                <div></div>
            </React.Fragment>
        )
    }
}

export default CafeReviewListComponent;