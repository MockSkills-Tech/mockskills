import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../Utils/modalSlice";

const TriggerLoginModal = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    useEffect(() => {
        // If the user is already logged in, don't set up the interval
        if (user) return;

        // Set up an interval to open the login modal every 20 seconds
        const interval = setInterval(() => {
            // Open the login modal if the user is not logged in
            if (!user) {
                dispatch(openLoginModal());
            }
        }, 20000); // 20000ms = 20 seconds

        // Clear the interval when the user logs in
        return () => {
            clearInterval(interval);
        };
    }, [dispatch, user]);

    return null; // This component does not render anything visible
};

export default TriggerLoginModal;
