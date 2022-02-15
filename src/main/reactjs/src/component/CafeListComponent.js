import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import SubjectIcon from '@mui/icons-material/Subject';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { TableContainer } from '@material-ui/core';
//import axios from "axios";



class CafeListComponent extends Component{

    constructor ( props){
        super(props);

        this.state= {
            cafes: [],
            message:null
        }
    }
    componentDidMount(){
        this.reloadCafeList();
    }

    reloadCafeList = () =>{

        fetch("http://localhost:8080/cafe_list")
            .then((response) => response.json())
            .then( response => {
                this.setState({
                    cafes: response
                })
            })


        // axios.get("http://localhost:8080/cafe_list")
        //     .then(res =>{
        //         this.setState({
        //             cafes:res.data
        //         })
        // })


            .catch(err => {
                console.log('reloadCafeList() Error!',err);
            })
    }

    cafeInfoDetail = (code) => {
        window.localStorage.setItem("cafe_host_code",code);
        this.props.history.push('/cafe-info');
    }

    render(){

        return (
            <div>
                <TableContainer  component={Paper}>
                    <Typography variant = "h2" style = {style}>Cafe List</Typography>
                    <Table stickyHeader aria-label="sticky table">
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
                            {this.state.cafes.map ( cafe =>
                                <TableRow key = {cafe.cafe_host_code}>
                                    <Button startIcon={<SubjectIcon />} variant="contained" size="small" color="success"  onClick={() => this.cafeInfoDetail(cafe.cafe_host_code) } > Cafe Info
                                    </Button>
                                    <TableCell align = "right">{cafe.cafe_name}</TableCell>
                                    <TableCell align = "right">{cafe.cafe_phone}</TableCell>
                                    <TableCell align = "right">{cafe.cafe_website}</TableCell>
                                    <TableCell align = "right">{cafe.cafe_time}</TableCell>
                                    <TableCell align = "right">{cafe.cafe_puppy_yesno}</TableCell>
                                    <TableCell align = "right">{cafe.cafe_oterrace_yesno}</TableCell>
                                    <TableCell align = "right">{cafe.cafe_wifi_yesno}</TableCell>
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




export default CafeListComponent;