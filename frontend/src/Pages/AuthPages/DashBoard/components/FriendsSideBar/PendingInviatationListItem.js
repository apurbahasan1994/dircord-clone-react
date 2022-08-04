import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import Avatar from '../../../../../shared/components/Avatar';
import InvitationDecisionButton from './InvitationDecisionButton';
import { connect } from 'react-redux';
import { getActions } from '../../../../../store/actions/friendsActions';
function PendingInviatationListItem(props) {


    const {  username, email} = props.invitation?.senderId;
    const {_id}=props.invitation;
    const{acceptFrindInvitation,rejectFrindInvitation}=props;
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const handleAcceptInvitation = () => {
        acceptFrindInvitation({ id:_id });
        setButtonsDisabled(true);
    }
    const handleRejectInvitation = () => {
        rejectFrindInvitation({ id:_id });
        setButtonsDisabled(true);
    }
    return (
        <Tooltip title={email}>
            <div style={{ width: '100%' }}>
                <Box sx={{
                    width: '100%',
                    height: '42px',
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Avatar username={username}>
                    </Avatar>
                    <Typography sx={{
                        marginLeft: '7px',
                        fontWeight: 700,
                        color: '#8e9297',
                        flexGrow: 1
                    }}>{username}</Typography>
                    <InvitationDecisionButton disabled={buttonsDisabled} acceptInvitationHandler={handleAcceptInvitation} rejectInvitationHandler={handleRejectInvitation}></InvitationDecisionButton>
                </Box>


            </div>
        </Tooltip>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    };

}
export default connect(null, mapActionsToProps)(PendingInviatationListItem);