import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import LogoutConfirmationButton from '../Buttons/LogoutConfirmationButton';

export default function ProfileButton() {
  const { logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/userpanel');
    handleClose();
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirm = () => {
    logout();
    navigate('/');
  };

  const handleLogoutCancel = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <div>
      <Button
        id="profile-button"
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='text-white'
      >
        <button className='bg-[#38bdf8] text-black font-bold rounded-full py-1 px-6  hover:bg-white duration-500'>Perfil</button>
      </Button>
      <Menu
        id="profile-menu"
        aria-labelledby="profile-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleProfileClick}>Mi Perfil</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Cerrar Sesión</MenuItem>
      </Menu>
      {showLogoutConfirmation && (
        <LogoutConfirmationButton
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      )}
    </div>
  );
}