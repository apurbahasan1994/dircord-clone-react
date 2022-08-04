import React, { useEffect, useState } from 'react'
import { validateEmail } from '../../../../../shared/Utils/validators';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import InputWithLabel from '../../../../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../../../../shared/components/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../../../../store/actions/friendsActions';
function AddFriendDialog(props) {
    const { isDialogOpen, closeDialogHandler, sendFrindInvitation } = props;
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const handleSendInvitation = () => {
   
        sendFrindInvitation({ email }, closeDialogHandler);
    }
    const handleCloseDialog = () => {
        closeDialogHandler();
        setEmail('');
    }
    useEffect(() => {
        setIsFormValid(validateEmail(email))
    }, [email, setIsFormValid]);

    return (
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
            <DialogTitle><Typography>Invite a Friend</Typography></DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>Enter e-mail address pf friend which you would like to invite</Typography>
                </DialogContentText>
                <InputWithLabel label="E-mail" type='text' value={email} setValue={setEmail} placeholder="Enter email address"></InputWithLabel>
            </DialogContent>
            <DialogActions>
                <CustomPrimaryButton onClick={handleSendInvitation} disabled={!isFormValid} label="Send" additionalStyles={{
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: '10px'
                }}></CustomPrimaryButton>
            </DialogActions>
        </Dialog>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialog);
