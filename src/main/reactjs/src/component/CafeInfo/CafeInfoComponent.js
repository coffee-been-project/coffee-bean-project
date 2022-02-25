import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CafeProfileComponent from "./CafeProfileComponent";
import '../../css/cafelist/list.css'

class TestProjects extends Component {
    constructor ( props){
        super(props);

        this.state= {
            coffees: [],
            message:null
        }
    }
    componentDidMount(){
        this.reloadCafeCoffee();
    }

    reloadCafeCoffee = () =>{
        fetch("http://localhost:8080/cafe_list/"+window.sessionStorage.getItem("cafe_code")+"/coffee")
            .then((response) => response.json())
            .then( response => {
                this.setState({
                    coffees: response
                })
            })
            .catch(err => {
                console.log('reloadCafeList() Error!',err);
            })
    }

    render(){
        return(
            <React.Fragment>
            <Container>
                <Grid container component="main" style={root} >
                    <CssBaseline />
                    <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
                        <div style={paper}>
                            <CafeProfileComponent />
                        </div>
                    </Grid>
                    <Grid item xs={false} sm={4} md={9}>
                        <main>
                            <Container style={cardGrid} maxWidth="md">
                                <Grid container spacing={4}>
                                    {this.state.coffees.map(coffee => (
                                        <Grid item key={coffee.coffee_code} xs={12} sm={6} md={4}>
                                            <Card style={card}>
                                                <CardMedia
                                                    style={cardMedia}
                                                    image={(coffee.coffee_image)}
                                                    title="Image title"
                                                />
                                                <CardContent style={cardContent}>
                                                    <Typography gutterBottom variant="inherit" component="h2">
                                                        {coffee.coffee_name}
                                                        <p></p>
                                                        {coffee.coffee_use_bean}
                                                        <p></p>
                                                        {coffee.coffee_price}원
                                                        <p></p>
                                                        {coffee.coffee_method}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </main>
                    </Grid>
                </Grid>



            </Container>
                <div></div>
                <div></div>

                <div></div>
                <div></div>

                <div></div>
            </React.Fragment>
        );
    }

}


const root ={
    height: "10vh"
}
const paper ={
   // margin: makeStyles(theme=>theme.spacing(8,4)),
     margin:'50px 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}


const cardGrid={
    paddingTop: makeStyles((theme)=>theme.spacing(8)),
    paddingBottom:makeStyles((theme)=>theme.spacing(8))
}

const card={
    height: "100%",
    display: "flex",
    flexDirection: "column"
}

const cardMedia ={
    paddingTop: "96.25%" // 16:9
}

const cardContent ={
    flexGrow: 1
}


export default TestProjects;
