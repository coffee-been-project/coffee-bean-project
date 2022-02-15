import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import MapContainer from "./MapContainer";
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
                }
            )
    }
    render()
    {
        return (
            <React.Fragment>
                <div container>
                    <img
                        style={profileImage}
                        alt="Robert"
                        src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220107_59%2F1641508524887H76aL_JPEG%2Fupload_d2fa9568c20170403e50373d6798ccf0.jpg"
                    />
                    <div style={content}>
                        <Typography component="h1" variant="h5">
                            <br></br>
                            {this.state.cafe_name}
                            카페코지 웨어하우스
                        </Typography>
                        <p>043-211-9292</p>
                        <br></br>
                        <Button variant="outlined" color="primary" fullWidth>
                            Review
                        </Button>
                        {/*   <Grid container justify="space-between">
                        <Grid item>
                            <p>Project Views</p>
                        </Grid>
                        <Grid item>
                            <p>12870</p>
                        </Grid>
                    </Grid>*/}
                        {/*<Grid container justify="space-between" className={classes.details}>*/}
                        {/*    <Grid item>*/}
                        {/*        <p>Characteristic</p>*/}
                        {/*    </Grid>*/}
                        {/*  /!*  <Grid item>*/}
                        {/*        <p>142</p>*/}
                        {/*    </Grid>*!/*/}
                        {/*</Grid>*/}
                        <div>
                            <br></br>
                            <Chip
                                style={chip}
                                color="primary"
                                label="Wifi"
                                size="small"
                            />
                            <Chip
                                style={chip}
                                color="primary"
                                label="Terrace"
                                size="small"
                            />
                            <br></br>
                            <Chip
                                style={chip}
                                color="secondary"
                                label="Pet"
                                size="small"
                            />
                            <Chip
                                style={chip}
                                color="secondary"
                                label="Parking Area"
                                size="small"
                            />
                            {/*  <Chip
                            className={classes.chip}
                            color="primary"
                            label="Tags"
                            size="small"
                        />
                        <Chip
                            className={classes.chip}
                            color="primary"
                            label="Tags"
                            size="small"
                        />*/}
                        </div>
                        <div style={about}>
                            <Typography component="h3" variant="h6">

                                About Cafe:
                                <p></p>
                            </Typography>
                            <p>
                                <br></br>
                                <p></p>
                                <p>넓고 쾌적한 공간으로 베트남 현지에서 즐길 수 있는 창고형 카페.
                                </p>
                                <p>Q-grder 생두감별사가 직접 로스팅하는 스페셜티를 맛보실 수 있습니다.
                                </p>
                                <br></br>
                                <br></br>

                                <MapContainer/>
                            </p>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const avatar = {
    margin:makeStyles((theme)=>theme.spacing(1)),
    backgroundColor:makeStyles((theme)=>theme.palette.secondary.main)
}
const profileImage ={
    width:"90%",
    borderRadius: "20%"
}
const content =
{
    justifyContent: "left",
    textAlign: "left"
}
const details =
{
    marginTop: "-20px"
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