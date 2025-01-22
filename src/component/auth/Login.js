import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import github from "../../asset/github.png"
import google from "../../asset/google.png"


const Login = () => {

    const loginwithgoogle = () => {
        window.open("https://authentication-google-github-backend.onrender.com/auth/google", "_self")
    };

    const loginwithgithub = () => {
        window.open("https://authentication-google-github-backend.onrender.com/auth/github", "_self")
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 400, width: '100%', padding: 4, backgroundColor: 'white', border: '1px solid', borderColor: 'grey.200', borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600}}>
                    Sign in
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Welcome, please sign in to continue
                </Typography>

                <Button fullWidth sx={{ background: "white", border: 1, color: "black", borderColor:"black", mt: 2, p: "10px", fontSize: "16px" }} onClick={loginwithgithub}>
                    <Avatar alt="GitHub logo" src={github} sx={{ mr: 2, width: "32px", height: "32px" }} />
                    Sign In With GitHub
                </Button>

                <Button fullWidth sx={{ background: "white", border: 1, color: "black", borderColor:"black", mt: 2, p: "10px", fontSize: "16px" }} onClick={loginwithgoogle}>
                    <Avatar alt="Google logo" src={google} sx={{ mr: 2, width: "32px", height: "32px" }} />
                    Sign In With Google
                </Button>
            </Paper>
        </Box>
    )
}

export default Login

