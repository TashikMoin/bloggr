import React from 'react';

import styles from './styles/profile.module.css';

import { styled } from "@material-ui/core/styles";

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

    return (
        <Container className={styles.container}>
            <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={2} className={styles.gridContainerStyle}>
                <Grid item xs={4} className={styles.gridItem}>
                    <div className={styles.profileLogo}>
                        <span>JD</span>
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
                            <BootstrapInput defaultValue="johndoe@website.com" id="bootstrap-input" className={styles.formStyle} />
                        </FormControl>

                        <Grid item style={{ height: "30px" }}></Grid>

                        <FormControl variant="standard">
                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                First Name
                            </InputLabel>
                            <BootstrapInput defaultValue="john" id="bootstrap-input" className={styles.formStyle} />
                        </FormControl>

                        <Grid item style={{ height: "30px" }}></Grid>

                        <FormControl variant="standard">
                            <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                Last Name
                            </InputLabel>
                            <BootstrapInput defaultValue="doe" id="bootstrap-input" className={styles.formStyle} />
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
                            <Button className={styles.loginButton}>
                                <span className={styles.loginButtonContent}>Save Changes</span>
                            </Button>
                        </Grid>

                        <Grid item xs={6}>
                            <Button onClick={handleOpen} className={styles.changePasswordButton}>
                                <span className={styles.changePasswordButtonContent}>Change Password</span>
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={modalStyle}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Change Password
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <Grid
                                            container
                                            direction="column"
                                            justifyContent="flex-start"
                                            alignItems="stretch"
                                        >
                                            <FormControl variant="standard">
                                                <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                                    New Password
                                                </InputLabel>
                                                <BootstrapInput defaultValue="12345" id="bootstrap-input" className={styles.formStyle} />
                                            </FormControl>

                                            <Grid item style={{ height: "30px" }}></Grid>

                                            <FormControl variant="standard">
                                                <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                                    Confirm Password
                                                </InputLabel>
                                                <BootstrapInput defaultValue="*****" id="bootstrap-input" className={styles.formStyle} />
                                            </FormControl>
                                        </Grid>
                                        <Grid container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="stretch"
                                            spacing={1}
                                            style={{ padding: "10px" }}
                                        >
                                            <Grid item xs={6}>
                                                <Button className={styles.loginButton}>
                                                    <span className={styles.loginButtonContent}>Save Changes</span>
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button onClick={handleClose} className={styles.changePasswordButton}>
                                                    <span className={styles.changePasswordButtonContent}>Cancel</span>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </Box>
                            </Modal>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}