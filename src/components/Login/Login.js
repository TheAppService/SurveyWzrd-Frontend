import React from 'react';
import {Helmet} from "react-helmet";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
     Checkbox,
    Container, FormControlLabel,
    Grid,
    TextField,
} from "@material-ui/core";
import {Face, Fingerprint} from "@material-ui/icons";
import {postLogin} from "../../services/user/login-service";

export class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    setEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    setPassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    componentDidMount() {

    }

    loginActionSubmit = () =>{

        console.log("Test");
        console.log(this.state.email)
        console.log(this.state.password)
        postLogin(this.state.email, this.state.password)
            .then((res) =>{
                console.log(res.data.authKey)
                localStorage.setItem("authKey", res.data.authKey)
                this.props.history.push('/overview/')
            })
            .catch(err => console.log(err));


    }

    render(){
        return (
            <React.Fragment >
                <Helmet>
                    <style>{'body { background-color: #D9DCE1; }'}</style>
                </Helmet>
                <Container>
                    <Container style={{marginTop: '15px'}}>
                        <Card>
                            <CardHeader
                                titleTypographyProps={{variant:'h5' }}
                                avatar={
                                    <img src="/assets/logo_with_text.png" style={{width: "180px", height:"160px", marginBottom: "-5px"}} alt="Logo"/>
                                }
                                style={{backgroundColor: "#254563", color: 'white', height: "35px", textAlign: "right"}}>
                            </CardHeader>
                            <CardContent>
                                    <div >
                                        <Grid container spacing={4} alignItems="flex-end">
                                            <Grid item>
                                                <Face />
                                            </Grid>

                                            <Grid item md={true} sm={true} xs={true}>
                                                <TextField id="email" label="Email" type="email" fullWidth autoFocus required onChange={this.setEmail} value={this.state.email}/>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={4} alignItems="flex-end">
                                            <Grid item>
                                                <Fingerprint />
                                            </Grid>
                                            <Grid item md={true} sm={true} xs={true}>
                                                <TextField id="password" label="Password" type="password" fullWidth required onChange={this.setPassword} value={this.state.password}/>
                                            </Grid>
                                        </Grid>
                                        <br/>
                                        <br/>
                                        <Grid container alignItems="center" justify="space-between">
                                            <Grid item>
                                                <FormControlLabel control={
                                                    <Checkbox
                                                        color="primary"
                                                    />
                                                } label="Remember me" />
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                                            <Button  color="primary" onClick={this.loginActionSubmit} style={{fontWeight: "bold", textTransform: "none", backgroundColor: "#B4A0B9", color: "white" }}>Login</Button>
                                            <br/>
                                        </Grid>
                                    </div>
                            </CardContent>
                        </Card>

                </Container>
                </Container>

            </React.Fragment>
        )
    }
}
