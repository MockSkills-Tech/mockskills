import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../Utils/modalSlice';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Slide, Fade } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import LoginSignup from './LoginSignup';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const LoginSignupModal = () => {
    const dispatch = useDispatch();
    const { isOpen, isLoginForm } = useSelector((state) => state.modal);
    const previousPath = useSelector((state) => state.modal.previousPath);

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <Dialog
            open={isOpen}
            onClose={handleCloseModal}
            TransitionComponent={Transition}
            transitionDuration={500}
            maxWidth="sm"
            PaperProps={{
                sx: {
                    borderRadius: '10px',
                    boxShadow: 24,
                    transform: 'scale(0.95)',
                    transition: 'transform 0.3s ease-out',
                    '&:hover': {
                        transform: 'scale(1)', // Zoom effect when the modal is hovered
                    },
                },
            }}
        >
           <LoginSignup isLoginForm={isLoginForm} />
            

        </Dialog>
    );
};

export default LoginSignupModal;
