/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const UserProfile = ({ user, handleSignOut }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar
                            sx={{
                                width: 32,
                                height: 32,
                                bgcolor: 'blue', // Background color
                                color: 'white', // Text color
                            }}
                        >
                            {user?.email[0]?.toUpperCase()}
                        </Avatar>
                    </IconButton>
                </Tooltip>
                {/* Live Status Indicator */}
                <Box
                    sx={{
                        width: 12, // Larger size
                        height: 12,
                        bgcolor: 'green',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: -4, // Position above the avatar
                        right: -4, // Adjust to the top-right corner
                        border: '2px solid white', // Border to create separation
                    }}
                />
            </Box>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                
                <MenuItem onClick={handleClose}
                    sx={{
                        transition: 'background-color 0.3s, color 0.3s', // Smooth transition
                        '&:hover': {
                            backgroundColor: 'primary.main', // Change to your desired background color
                            color: 'white', // Change to your desired text color
                        },
                    }}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                
             
                <MenuItem onClick={() => {
                    handleSignOut();
                    handleClose(); // Close the menu after logout
                }}
                    sx={{
                        transition: 'background-color 0.3s, color 0.3s', // Smooth transition
                        '&:hover': {
                            backgroundColor: 'red', // Change to your desired background color
                            color: 'white', // Change to your desired text color
                            '& .MuiListItemIcon-root': { // Target the icon specifically
                                color: 'white', // Change icon color to white (or any color you want)
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
export default UserProfile;