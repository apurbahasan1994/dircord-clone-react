import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/alertActions';
 function AlertNotification({
    showAlertMessage,
    closeAlertMessage,
    alertMessageContent
 }) {
    return (
        <Snackbar autoHideDuration={6000} open={showAlertMessage} onClose={closeAlertMessage} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}><Alert severity='info'>{alertMessageContent?.message?alertMessageContent?.message:alertMessageContent}</Alert></Snackbar>
    )
}
const mapStateToProps=({alert})=>{
    return {...alert}
};

const mapActionsToProps=(dispatch)=>{
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStateToProps,mapActionsToProps)(AlertNotification);