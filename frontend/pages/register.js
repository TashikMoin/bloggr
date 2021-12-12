import React, {useState, useEffect} from 'react';
import { styled } from "@material-ui/core/styles";
import styles from "./styles/register.module.css";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import axios from "axios"; 
import Router from "next/router";
import Link from 'next/link';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ]
    },
}));

export default function Register() {

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('Token')){
            Router.push("/feed");
        }
        else{
            setShowRegister(true);
        }
    }, []);

    const registerUser = (event) => 
    {
        event.preventDefault();
        if (Firstname == "" || Lastname == "" || Email == "" || Password == "") 
        {
          alert(`Please fill all the required fields!`);
        } 
        else 
        {
            const formData = {
            Firstname: Firstname,
            Lastname: Lastname,
            Email: Email,
            Password: Password
            };
            axios.post('http://localhost:37606/api/register', formData)
            .then(response => {alert(`User Registered Successfully!`); Router.push('/login')} )
            .catch(error => alert(error));
        }

    };


    return (
        <>
        { showRegister && 
            (<Grid container direction="row"
                justifyContent="center"
                alignItems="stretch" spacing={0}
                className={styles.gridContainer}>
                <Grid item xs={5}>
                    <div>
                        <Container className={styles.containerSpacing} style={{ paddingLeft: "130px", paddingRight: "130px" }}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="stretch"
                            >
                                {/* Logo */}
                                <Grid item>
                                    <img src="/logo.png" alt="logo" style={{ width: "64px", height: "64px" }} />
                                </Grid>

                                {/* Login Content */}
                                <Grid item>
                                    <p className={styles.loginTitle}>
                                        Sign Up
                                    </p>

                                    <p className={styles.loginContent}>
                                        See your growth and expose your writing talent to the world!
                                    </p>
                                </Grid>

                                {/* Separator */}
                                {/* <Grid item> */}
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="stretch"
                                >
                                    <Grid item xs={4} className={styles.alignDivider}
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <div style={{ justifyContent: "center", paddingRight: "5px" }}>
                                            <span className={styles.halfDivider}> </span>
                                        </div>
                                    </Grid>

                                    <Grid item xs={4} className={styles.dividerContent}>
                                        <p>Sign Up With Email
                                        </p>

                                    </Grid>

                                    <Grid item xs={4} className={styles.alignDivider}
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <div style={{ justifyContent: "center", paddingLeft: "5px" }}>
                                            <span className={styles.halfDivider}> </span>
                                        </div>
                                    </Grid>
                                </Grid>
                                {/* </Grid> */}

                                {/* Form */}
                                <Grid item>
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="flex-start"
                                        alignItems="stretch"
                                    >
                                        <FormControl variant="standard">

                                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                                First Name
                                            </InputLabel>

                                            <BootstrapInput 
                                            onChange={(e) => setFirstname(e.target.value)}
                                            value={Firstname} 
                                            id="bootstrap-input" 
                                            className={styles.formStyle} 
                                            />

                                        </FormControl>

                                        <Grid item style={{ height: "10px" }}></Grid>

                                        <FormControl variant="standard">

                                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                                Last Name
                                            </InputLabel>

                                            <BootstrapInput 
                                            onChange={(e) => setLastname(e.target.value)}
                                            value={Lastname}
                                            id="bootstrap-input" 
                                            className={styles.formStyle} 
                                            />

                                        </FormControl>

                                        <Grid item style={{ height: "10px" }}></Grid>

                                        <FormControl variant="standard">
                                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                                Email
                                            </InputLabel>
                                            <BootstrapInput 
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={Email}
                                            id="bootstrap-input" 
                                            className={styles.formStyle} />
                                        </FormControl>

                                        <Grid item style={{ height: "10px" }}></Grid>

                                        <FormControl variant="standard">
                                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                                Password
                                            </InputLabel>
                                            <BootstrapInput 
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={Password} 
                                            id="bootstrap-input" 
                                            className={styles.formStyle} 
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid item style={{ height: "40px" }}></Grid>

                                {/* Button */}
                                <Grid item>
                                    <Grid container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="stretch"
                                    >
                                        <Grid item xs={12}>
                                            <div style={{ cursor: 'pointer'}} onClick={registerUser} className={styles.loginButton}>
                                                <span className={styles.loginButtonContent}>Sign Up</span>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* End Remarks */}
                                <Grid item style={{ paddingTop: "40px" }}>
                                <p className={styles.registerInfo}>Already have an account? &nbsp; <Link href="/login"><a><span className={styles.linkToRegister}> Sign in</span> </a></Link></p>

                                    <p className={styles.trademark}>@2021 Bloggr all rights reserved</p>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Grid>
                <Grid item xs={7} className={styles.view} />
            </Grid>)
        }
        </>
    )
}