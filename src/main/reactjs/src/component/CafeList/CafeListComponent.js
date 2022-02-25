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
import { createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@mui/material/styles';
import '../../css/cafelist/list.css'
import Container from "@material-ui/core/Container";


class CafeListComponent extends Component{

    constructor (props){
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

        let bean = sessionStorage.getItem("bean");
        let method_js = sessionStorage.getItem("method");
        let area = sessionStorage.getItem("area");
        let info_js = sessionStorage.getItem("info");

        fetch(`http://localhost:8080/cafe_list?bean=${bean}&method=${method_js}&area=${area}&info=${info_js}`
        )
            .then((response) => response.json())
            .then( response => {
                this.setState({
                    cafes: response
                })
            })
            .catch(err => {
                console.log('reloadCafeList() Error!',err);
            })
    }

    cafeInfoDetail = (code,x,y) => {
        window.sessionStorage.setItem("cafe_code",code);
        window.sessionStorage.setItem("cafe_location_x",x);
        window.sessionStorage.setItem("cafe_location_y",y);
        this.props.history.push('/cafe-info');
    }

    render(){

        return (
            <Container className="list-flex-container">
            <div>
                <div style={contain_style}></div>
                <TableContainer  component={Paper}>
                    <div style={contain_style}></div>
                    <Typography variant = "h2" style = {style} className="font">Cafe List</Typography>
                    <div style={contain_style}></div>

                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="font">Info</TableCell>
                                <TableCell className="font">Name</TableCell>
                                <TableCell align = "center" className="font">전화번호</TableCell>
                                <TableCell align = "center" className="font">사이트</TableCell>
                                <TableCell align = "center" className="font">영업 시간</TableCell>
                                <TableCell align = "center" className="font">반려견 출입 가능</TableCell>
                                <TableCell align = "center" className="font">야외 테라스</TableCell>
                                <TableCell align = "center" className="font">Wi-fi</TableCell>
                                <TableCell align = "center" className="font">주차장</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.cafes.map ( cafe =>
                                <TableRow key = {cafe.cafe_code}>
                                    <TableCell>
                                        <ThemeProvider theme={theme}>
                                            <Button startIcon={<SubjectIcon />} align = "center"  variant="contained" size="small" color="neutral"  onClick={() => this.cafeInfoDetail(cafe.cafe_code,cafe.cafe_location_x,cafe.cafe_location_y) } > Cafe Info
                                            </Button>
                                        </ThemeProvider>
                                    </TableCell>

                                    <TableCell align = "left" className="font">{cafe.cafe_name}</TableCell>
                                    <TableCell align = "left" className="font">{cafe.cafe_phone}</TableCell>
                                    <TableCell align = "left" className="font">{cafe.cafe_website}</TableCell>
                                    <TableCell align = "left" className="font">{cafe.cafe_time}</TableCell>
                                    <TableCell align = "right" className="font">{cafe.cafe_pet}</TableCell>
                                    <TableCell align = "right" className="font">{cafe.cafe_oterrace}</TableCell>
                                    <TableCell align = "right" className="font">{cafe.cafe_wifi}</TableCell>
                                    <TableCell align = "right" className="font">{cafe.cafe_parking}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            </Container>
        );
    }
}

// 제목 서식 중앙 정렬
const style = {
    display: 'flex',
    justifyContent: 'center'
}

// 제목 높이
const contain_style ={
    height: '20px'
}

//버튼 컬러
const theme = createTheme({
    palette: {
        neutral:{
            main:'#bf360c',
            contrastText: '#fff',
        },
    },

});


export default CafeListComponent;