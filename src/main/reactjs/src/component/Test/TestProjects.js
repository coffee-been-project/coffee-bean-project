import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TestProfile from "./TestProfile.js";
import TestProfileClass from "./TestProfileClass";

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {"Copyright © "}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Uncyted
//             </Link>{" "}
//             {new Date().getFullYear()}
//             {"."}
//         </Typography>
//     );
// }

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh"
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "96.25%" // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    }
}));

const cards = [
    {
        num: "아메리카노",
        url: 'http://localhost:8080/image/squcy.jpg'
        // url :"https://paikdabang.com/wp-content/uploads/2018/05/ICED-%EC%95%97%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8-450x588.png"
    }];
    // }, {
    //     num :"원조커피",
    //     url :"https://paikdabang.com/wp-content/uploads/2018/05/ICED-%EC%9B%90%EC%A1%B0%EC%BB%A4%ED%94%BC-450x588.png"
    // }, {
    //     num :"블랙펄카페라떼",
    //     url :"https://paikdabang.com/wp-content/uploads/2018/05/%EB%B8%94%EB%9E%99%ED%8E%84%EC%B9%B4%ED%8E%98%EB%9D%BC%EB%96%BC-450x588.png"
    // }, {
    //     num :"콜드브루",
    //     url :"https://paikdabang.com/wp-content/uploads/2018/05/%EB%94%94%EC%B9%B4%ED%8E%98%EC%9D%B8-%EC%BD%9C%EB%93%9C%EB%B8%8C%EB%A3%A8-1-450x588.png"
    // }, {
    //     num :"콜드브루라떼",
    //     url :"https://paikdabang.com/wp-content/uploads/2022/01/%EC%BD%9C%EB%93%9C%EB%B8%8C%EB%A3%A8%EC%97%B0%EC%9C%A0%EB%9D%BC%EB%96%BC-450x588.png"
    // }, {
    //     num :"원조커피",
    //     url :"https://paikdabang.com/wp-content/uploads/2018/01/%EB%B9%BD%EC%82%AC%EC%9D%B4%EC%A6%88-%EC%9B%90%EC%A1%B0%EC%BB%A4%ED%94%BC-32oz-%EA%B0%84%EC%96%BC%EC%9D%8C-450x588.png"
    // }, {
    //     num :"카페모카",
    //     url :"https://paikdabang.com/wp-content/uploads/2018/05/HOT-%EC%B9%B4%ED%8E%98%EB%AA%A8%EC%B9%B4-450x588.png"
    // }, {
    //     num :"카라멜마끼야또",
    //     url :"https://paikdabang.com/wp-content/uploads/2018/05/HOT-%EC%B9%B4%EB%9D%BC%EB%A9%9C%EB%A7%88%ED%82%A4%EC%95%84%EB%98%90-450x588.png"
    // }];

export default function Login() {


    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <TestProfileClass/>
                    </div>
                </Grid>
                <Grid item xs={false} sm={4} md={9}>
                    <main>
                        {/* Hero unit */}
                        <Container className={classes.cardGrid} maxWidth="md">
                            {/* End hero unit */}
                            <Grid container spacing={4}>
                                {cards.map((card) => (
                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={(card.url)}
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h7" component="h2">
                                                    {card.num}
                                                </Typography>
                                                {/*<Typography>*/}
                                                {/*    This is Coffee.*/}
                                                {/*</Typography>*/}
                                            </CardContent>
                                            {/*<CardActions>*/}
                                            {/*    <Button size="small" color="primary">*/}
                                            {/*        View*/}
                                            {/*    </Button>*/}
                                            {/*    <Button size="small" color="primary">*/}
                                            {/*        Edit*/}
                                            {/*    </Button>*/}
                                            {/*</CardActions>*/}
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </main>
                    {/* Footer */}
                   {/* <footer className={classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Footer
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            color="textSecondary"
                            component="p"
                        >
                            Something here to give the footer a purpose!
                        </Typography>
                        <Copyright />
                    </footer>*/}
                    {/* End footer */}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
