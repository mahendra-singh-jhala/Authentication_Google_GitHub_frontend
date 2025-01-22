import { Box, Typography, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userData, setuserData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get("https://authentication-google-github-backend.onrender.com/login/success", { withCredentials: true })
                setuserData(res.data.user)
            } catch (error) {
                console.log("Not get user", error)
            }
        }

        getUser()
    }, [])

    return (
        <div>
            {userData && Object?.keys(userData || {}).length > 0 ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }} >
                    <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 320, width: '100%', padding: 4, backgroundColor: 'white', border: '1px solid', borderColor: 'grey.200', borderRadius: 2, boxShadow: 3 }}>

                        <img className="w-24 h-24 mb-2 shadow-md rounded-full"
                            src={userData.image}
                            alt="userImg"
                        />

                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'medium', color: 'text.primary' }}>
                            {userData.displayName}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {userData.email}
                        </Typography>
                    </Paper>
                </Box>
            ) : (
                navigate("/login")
            )}
        </div>
    )
}

export default Home

