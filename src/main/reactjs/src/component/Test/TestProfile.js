import React, {useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import MapContainer from "./MapContainer";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    profileImage: {
        width: "90%",
        borderRadius: "20%"
    },
    content: {
        justifyContent: "left",
        textAlign: "left"
    },
    details: {
        marginTop: "-20px"
    },
    chip: {
        padding: "0 5px",
        margin: "2px 5px"
    },
    about: {
        margin: "10px 0",
        alignItems: "left",
        textAlign: "left"
    }
}));



export default function Profile() {
    const classes = useStyles();



    return (
        <React.Fragment>
            <div container>
                <img
                    className={classes.profileImage}
                    alt="Robert"
                    src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220107_59%2F1641508524887H76aL_JPEG%2Fupload_d2fa9568c20170403e50373d6798ccf0.jpg"
                />
                <div className={classes.content}>
                    <Typography component="h1" variant="h5">
                        <br></br>

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
                    <div >
                        <br></br>
                        <Chip
                            className={classes.chip}
                            color="primary"
                            label="Wifi"
                            size="small"
                        />
                        <Chip
                            className={classes.chip}
                            color="primary"
                            label="Terrace"
                            size="small"
                        />
                        <br></br>
                        <Chip
                            className={classes.chip}
                            color="secondary"
                            label="Pet"
                            size="small"
                        />
                        <Chip
                            className={classes.chip}
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
                    <div className={classes.about}>
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
