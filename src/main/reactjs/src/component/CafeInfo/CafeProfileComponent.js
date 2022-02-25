import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import KakaoMap from "../KakaoMap/KakaoMap";
class TestProfileClass extends Component {

    constructor(props){
        super(props);

        this.state = {
            cafe_host_code:'',
            cafe_name: '',
            cafe_phone: '',
            cafe_website: '',
            cafe_time: '',
            cafe_puppy_yesno: '',
            cafe_oterrace_yesno: '',
            cafe_wifi_yesno: '',
            cafe_location_x: '',
            cafe_location_y: '',
            message:null

        }
    }

    componentDidMount(){
        this.loadCafe();
        window.sessionStorage.setItem("location_x",this.state.cafe_location_x);
        window.sessionStorage.setItem("location_y",this.state.cafe_location_y);
    }

    loadCafe = () =>{
        fetch("http://localhost:8080/cafe_list/"+window.sessionStorage.getItem("cafe_code"))
            .then((response) => response.json())
            .then(response =>{
                    let cafe = response;
                    this.setState({
                        cafe_code :cafe.cafe_code,
                        cafe_name: cafe.cafe_name,
                        cafe_phone: cafe.cafe_phone,
                        cafe_website: cafe.cafe_website,
                        cafe_time: cafe.cafe_time,
                        cafe_pet: cafe.cafe_pet,
                        cafe_oterrace: cafe.cafe_oterrace,
                        cafe_wifi: cafe.cafe_wifi,
                        cafe_parking: cafe.cafe_parking,
                        cafe_location_x: cafe.cafe_location_x,
                        cafe_location_y: cafe.cafe_location_y,
                        user_code: cafe.user_code,
                        cafe_text:cafe.cafe_text,
                        cafe_image:cafe.cafe_image
                    })
                }
            )

    }

    goReview = () =>{
        window.location.href="/cafe-review-list"
    }


    render()
    {
        return (
            <React.Fragment>
                <div>
                    <img
                        style={profileImage}
                        alt="Robert"
                        src={this.state.cafe_image}
                    />
                    <div style={content}>
                        <Typography component="h1" variant="h5">
                            <br></br>
                            {this.state.cafe_name}

                        </Typography>
                        <p>{this.state.cafe_phone}</p>
                        <br></br>
                        <Button variant="outlined" color="primary" fullWidth onClick={()=>this.goReview()}>
                            Review
                        </Button>
                        <div>
                            <br></br>
                            {
                                this.state.cafe_wifi === 'O'
                                    ?
                                    <Chip
                                        style={chip}
                                        color="primary"
                                        label="Wifi o"
                                        size="small"
                                    />
                                    :

                                    <Chip
                                        style={chip}
                                        color="secondary"
                                        label="Wifi x"
                                        size="small"
                                    />
                            }
                            {
                                this.state.cafe_pet === 'O'
                                    ?
                                    <Chip
                                        style={chip}
                                        color="primary"
                                        label="Pet o"
                                        size="small"
                                    />
                                    :

                                    <Chip
                                        style={chip}
                                        color="secondary"
                                        label="Pet x"
                                        size="small"
                                    />
                            }
                            {
                                this.state.cafe_oterrace === 'O'
                                    ?
                                    <Chip
                                        style={chip}
                                        color="primary"
                                        label="Terrace o"
                                        size="small"
                                    />
                                    :

                                    <Chip
                                        style={chip}
                                        color="secondary"
                                        label="Terrace x"
                                        size="small"
                                    />
                            }
                            {
                                this.state.cafe_parking === 'O'
                                    ?
                                    <Chip
                                        style={chip}
                                        color="primary"
                                        label="Parking o"
                                        size="small"
                                    />
                                    :

                                    <Chip
                                        style={chip}
                                        color="secondary"
                                        label="Parking x"
                                        size="small"
                                    />
                            }

                        </div>
                        <div style={about}>
                            <Typography component="h3" variant="h6">

                                About Cafe:
                                <p></p>
                            </Typography>

                            <br></br>
                            <p></p>
                            <p>넓고 쾌적한 공간으로 베트남 현지에서 즐길 수 있는 창고형 카페.
                            </p>
                            <p>Q-grder 생두감별사가 직접 로스팅하는 스페셜티를 맛보실 수 있습니다.
                            </p>
                            <br></br>
                            <br></br>
                            <KakaoMap/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const profileImage ={
    width:"100%",
    borderRadius: "20%"
}
const content =
    {
        justifyContent: "left",
        textAlign: "left"
    }

const chip =
    {
        padding: "0 5px",
        margin: "2px 5px"
    }
const about=
    {
        margin: "10px 0",
        alignItems: "left",
        textAlign: "left"
    }


export default TestProfileClass;