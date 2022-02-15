import React,{Component} from "react";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableContainer } from "@material-ui/core";

import CircleIcon from "@mui/icons-material/Circle";


import {
    Button,
    Typography,
} from "@material-ui/core";

import Paper from '@mui/material/Paper';
//import axios from "axios";

const { kakao } = window;

class CafeInfoComponent extends Component{

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

            reviews:[],
            message:null

        }
    }

    componentDidMount(){
        this.loadCafe();
        this.loadReview();

    }

    loadCafe = () =>{
        fetch("http://localhost:8080/cafe_list/"+window.localStorage.getItem("cafe_host_code"))
            .then((response) => response.json())
            .then(response =>{
                let cafe = response;
                this.setState({
                    cafe_host_code :cafe.cafe_host_code,
                    cafe_name: cafe.cafe_name,
                    cafe_phone: cafe.cafe_phone,
                    cafe_website: cafe.cafe_website,
                    cafe_time: cafe.cafe_time,
                    cafe_puppy_yesno: cafe.cafe_puppy_yesno,
                    cafe_oterrace_yesno: cafe.cafe_oterrace_yesno,
                    cafe_wifi_yesno: cafe.cafe_wifi_yesno,
                    cafe_location_x: cafe.cafe_location_x,
                    cafe_location_y: cafe.cafe_location_y
                })
                var container = document.getElementById('map');
                            var options = {
                                center: new kakao.maps.LatLng(cafe.cafe_location_y,cafe.cafe_location_x),
                                level: 1
                            };
                            var map = new kakao.maps.Map(container, options);

                            var marker = new kakao.maps.Marker({
                                // 지도 중심좌표에 마커를 생성합니다
                                position: map.getCenter()
                            });
                            // 지도에 마커를 표시합니다
                            marker.setMap(map);
                        }
                    )
                    .catch(err => {
                        console.log("하이"+this.state.cafe.cafe_host_code);
                        console.log('loadCafe() 에러',err);
                    });
    }


        // axios.get("http://localhost:8080/cafe_list/"+window.localStorage.getItem("cafe_host_code"))
        //     .then( res => {
        //             let cafe = res.data;
        //             this.setState({
        //                 cafe_host_code :cafe.cafe_host_code,
        //                 cafe_name: cafe.cafe_name,
        //                 cafe_phone: cafe.cafe_phone,
        //                 cafe_website: cafe.cafe_website,
        //                 cafe_time: cafe.cafe_time,
        //                 cafe_puppy_yesno: cafe.cafe_puppy_yesno,
        //                 cafe_oterrace_yesno: cafe.cafe_oterrace_yesno,
        //                 cafe_wifi_yesno: cafe.cafe_wifi_yesno,
        //                 cafe_location_x: cafe.cafe_location_x,
        //                 cafe_location_y: cafe.cafe_location_y
        //
        //             })
        //
        //             var container = document.getElementById('map');
        //             var options = {
        //                 center: new kakao.maps.LatLng(cafe.cafe_location_y,cafe.cafe_location_x),
        //                 level: 1
        //             };
        //             var map = new kakao.maps.Map(container, options);
        //
        //             var marker = new kakao.maps.Marker({
        //                 // 지도 중심좌표에 마커를 생성합니다
        //                 position: map.getCenter()
        //             });
        //             // 지도에 마커를 표시합니다
        //             marker.setMap(map);
        //         }
        //     )
        //     .catch(err => {
        //         console.log("하이"+this.state.cafe.cafe_host_code);
        //         console.log('loadCafe() 에러',err);
        //     });


    loadReview = () =>{
        console.log('loadreview() 에러');
        console.log(window.localStorage.getItem("cafe_host_code"));

        fetch("http://localhost:8080/cafe_list/"+window.localStorage.getItem("cafe_host_code")+"/review_list")
            .then( (response)=>response.json())
            .then (response =>{
                this.setState({
                    reviews : response
                })
                console.log('loadreview() 에러');
            })



        // axios.get("http://localhost:8080/cafe_list/"+window.localStorage.getItem("cafe_host_code")+"/review_list")
        //     .then( res=>{
        //         this.setState({
        //             reviews : res.data
        //         })
        //         console.log('loadreview() 에러');
        //     })
    }



    goReview = (code) => {

        window.localStorage.setItem("cafe_host_code",code);
        this.props.history.push('/cafe-review');
    }

    render(){
        return(
            <div>
                <TableContainer component={Paper} style={{width:"1000px", height:"auto"}}>
                    <Typography variant = "h2" style = {style}>Cafe </Typography>
                    {/* <Button variant = "contained" size="small" color = "secondary" onClick={() => this.goReview(this.state.cafe_host_code)} >Review</Button> */}
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Cafecode</TableCell>
                                <TableCell>CafeName</TableCell>
                                <TableCell align = "right">전화번호</TableCell>
                                <TableCell align = "right">사이트</TableCell>
                                <TableCell align = "right">영업 시간</TableCell>
                                <TableCell align = "right">반려견 출입 가능</TableCell>
                                <TableCell align = "right">야외 테라스</TableCell>
                                <TableCell align = "right">Wi-fi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key = {this.cafe_host_code}>
                                <TableCell align = "right" value = {this.state.cafe_host_code}>{this.state.cafe_host_code}</TableCell>
                                <TableCell align = "right">{this.state.cafe_name}</TableCell>
                                <TableCell align = "right">{this.state.cafe_phone}</TableCell>
                                <TableCell align = "right">{this.state.cafe_website}</TableCell>
                                <TableCell align = "right">{this.state.cafe_time}</TableCell>
                                <TableCell align = "right">{this.state.cafe_puppy_yesno}</TableCell>
                                <TableCell align = "right">{this.state.cafe_oterrace_yesno}</TableCell>
                                <TableCell align = "right">{this.state.cafe_wifi_yesno}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <div style ={{width:"1000px", height:"400px"}}>
                        <div style={{width:"500px", height:"400px",float:"left"}}>

                            <TableContainer component={Paper}>
                                <Typography variant = "h4" style = {style}></Typography>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align = "right">ID</TableCell>
                                            <TableCell align = "right">Text</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.reviews.slice(0,2).map ( review =>
                                            <TableRow key = {review.review_cafe_host_code}>
                                                <TableCell align = "center">{review.review_user_id}</TableCell>
                                                <TableCell align = "right">{review.text}</TableCell>
                                            </TableRow>
                                        )}
                                        <TableCell align = "right" >
                                            <CircleIcon fontSize="very small"></CircleIcon> <CircleIcon fontSize="very small"></CircleIcon> <CircleIcon fontSize="very small"></CircleIcon>
                                        </TableCell>

                                    </TableBody>

                                </Table>

                            </TableContainer>
                            <Button variant = "contained" size="large"  onClick={() => this.goReview(this.state.cafe_host_code)} >Review 작성 </Button>


                        </div>




                        <div id="map" style={{width:"500px", height:"400px", float:"left"}  }></div>
                    </div>

                </TableContainer>
            </div>

        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center',

}

export default CafeInfoComponent;