import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const settings = ['Logout'];


const Navbar = () => {
    const [user, setUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setUser(null);
    };

    const [userData, setuserData] = useState({})

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get("http://localhost:5000/login/success", {withCredentials: true})
                setuserData(res.data.user)
            } catch (error) {
                console.log("Not get user", error)
            }
        }

        getUser()
    }, [])

    const logout = () => {
        window.open("http://localhost:5000/logout", "_self")
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                        <AdbIcon sx={{ display: 'flex', mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </Box>
                    {userData && Object.keys(userData || {}).length > 0 ? (
                        <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <img alt="userImg" src={userData?.image} className="w-12 h-12 border-2 border-white rounded-full" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={user}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(user)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography sx={{ textAlign: 'center' }} onClick={logout}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    ) : (
                        <Link to="/login" className="p-1 px-4 border-2 bg-white text-gray-600 shadow-lg rounded-md font-bold text-md">
                            Login
                        </Link>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar

