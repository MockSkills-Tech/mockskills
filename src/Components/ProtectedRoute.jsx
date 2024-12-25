import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openLoginModal, closeModal } from "../Utils/modalSlice";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (!user) {
            // Trigger the login modal and store the current path
            dispatch(openLoginModal(location.pathname));
        }
    }, [user, dispatch, location.pathname]);

    useEffect(() => {
        if (user) {
            // Close the login modal if the user logs in
            dispatch(closeModal());
        }
    }, [user, dispatch]);

    if (user) return children; // Render the protected content if the user is authenticated

    return null; // Render nothing while showing the login modal
};

export default ProtectedRoute;
