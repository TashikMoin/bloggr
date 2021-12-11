import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './styles/profile.module.css';
import jwt from 'jwt-decode'
import { styled } from "@material-ui/core/styles";
import Router from "next/router";

import {
    Container,
    Grid,
    FormControl,
    InputLabel,
    InputBase,
    Typography,
    Box,
    Modal,
    Button,

} from "@material-ui/core";

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

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: '24px',
    p: 4,
    borderRadius: '20px',
};

export default function Profile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [email, setEmail] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [avatar, setAvatar] = useState();

    const updateUser = (event) => {
        event.preventDefault();
        if (firstname == "" || lastname == "" || password == "" || confirmPassword == "") 
        {
          alert(`Please fill all the required fields!`);
        } 
        else 
        {
            if(password == confirmPassword)
            {
                const formData = {
                    Firstname: firstname,
                    Lastname: lastname,
                    Password: password
                };
                const Token = localStorage.getItem('Token');
                const user = jwt(Token);
                axios.put(`http://localhost:37606/api/users/${user.Id}`, formData, { headers: {"Authorization" : `Bearer ${Token}`} })
                .then(response => {alert(`Profile Updated Successfully!`); Router.push('/feed')} )
                .catch(error => alert(error));
            }
            else{
                alert(`Password does not matches!`);
            }

        }
    }

    useEffect(() => {
        const fetchData = async () => { 
            const Token = localStorage.getItem('Token');
            const user = jwt(Token);
            console.log(user);
            await axios.get(`http://localhost:37606/api/users/${user.Id}`, { headers: {"Authorization" : `Bearer ${Token}`} })
            .then((response) => { setAvatar(`${response.data.firstname.charAt(0).toUpperCase()}${response.data.lastname.charAt(0).toUpperCase()}`); setEmail(response.data.email); setFirstname(response.data.firstname); setLastname(response.data.lastname);})
            .catch((error) => console.log(error));
        }  
        fetchData();
    }, []);

    return (
        <Container className={styles.container}>
            <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={2} className={styles.gridContainerStyle}>
                <Grid item xs={4} className={styles.gridItem}>
                    <div style={{color: '#ffffff', fontSize: '3rem'}} className={styles.profileLogo}>
                        {avatar}
                    </div>
                </Grid>

                <Grid item xs={4} className={styles.gridItem}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="stretch"
                    >
                        <FormControl variant="standard">
                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                Email
                            </InputLabel>
                            <BootstrapInput style={{color: 'grey'}} readOnly value={email} id="bootstrap-input" className={styles.formStyle} />
                        </FormControl>

                        <Grid item style={{ height: "5px" }}></Grid>

                        <FormControl variant="standard">
                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                First Name
                            </InputLabel>

                            <BootstrapInput 
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname} 
                            id="bootstrap-input" 
                            className={styles.formStyle} 
                            />

                        </FormControl>

                        <Grid item style={{ height: "5px" }}></Grid>

                        <FormControl variant="standard">
                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                Last Name
                            </InputLabel>

                            <BootstrapInput 
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname} 
                            id="bootstrap-input" 
                            className={styles.formStyle} 
                            />
                        </FormControl>

                        <Grid item style={{ height: "5px" }}></Grid>

                        <FormControl variant="standard">
                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                Password
                            </InputLabel>

                            <BootstrapInput 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} 
                            id="bootstrap-input" 
                            className={styles.formStyle} 
                            />
                        </FormControl>    

                        <Grid item style={{ height: "5px" }}></Grid>

                        <FormControl variant="standard">
                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                Confirm password
                            </InputLabel>

                            <BootstrapInput 
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword} 
                            id="bootstrap-input" 
                            className={styles.formStyle} 
                            />
                        </FormControl>              

                        
                    </Grid>
                </Grid>

                <Grid item xs={4} className={styles.gridItem}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={1}
                    >
                        <Grid item xs={6}>
                            <Button onClick={updateUser} className={styles.loginButton}>
                                <span className={styles.loginButtonContent}>Update Profile</span>
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}