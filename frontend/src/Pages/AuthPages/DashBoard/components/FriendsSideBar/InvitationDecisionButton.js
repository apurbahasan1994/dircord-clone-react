import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
export default function InvitationDecisionButton({ disabled, acceptInvitationHandler, rejectInvitationHandler }) {
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <IconButton style={{ color: 'white' }} disabled={disabled} onClick={acceptInvitationHandler}><CheckIcon></CheckIcon></IconButton>
            <IconButton style={{ color: 'red' }} disabled={disabled} onClick={rejectInvitationHandler}><ClearIcon></ClearIcon></IconButton>
        </Box>
    )
}
