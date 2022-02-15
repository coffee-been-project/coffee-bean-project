import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import Paper from '@mui/material/Paper';
import { TableContainer } from '@material-ui/core';

//import axios from "axios";


class CafeReviewComponent extends Component{


    constructor ( props){
        super(props);

        this.state= {
            reviews: [],
            message:null
        }
    }
    componentDidMount(){
        console.log('loadreview() 에러');

        this.loadReview();
    }


    loadReview = () =>{
        console.log('loadreview() 에러');

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
        //
        //     })
    }

    render(){

        return (
            <div>
                <TableContainer component={Paper}>
                    <Typography variant = "h2" style = {style}>Cafe Review</Typography>
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                                <TableCell align = "right">전화번호</TableCell>
                                <TableCell align = "right">사이트</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.reviews.map ( review =>
                                <TableRow key = {review.review_cafe_host_code}>
                                    <TableCell align = "right">{review.review_user_id}</TableCell>
                                    <TableCell align = "right">{review.text}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default CafeReviewComponent;