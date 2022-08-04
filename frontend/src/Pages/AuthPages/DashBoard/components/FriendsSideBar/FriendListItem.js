import { Button, Typography } from '@mui/material';
import React from 'react'
import Avatar from '../../../../../shared/components/Avatar';
import OnlineIndicator from './OnlineIndicator';
export default function FriendListItem(props) {
    const { username, isOnline } = props.friend;
    console.log(props.friend);
    return (
        <Button style={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textTransform: 'none',
            color: 'black',
            position: 'relative'
        }}>
            <Avatar username={username} large={false}>
            </Avatar>
            <Typography variant='subtitle1' align='left'
                sx={{
                    fontWieght: 700,
                    color: '#8e9297',
                    marginLeft: '7px',
                }}>{username}</Typography>
            {isOnline && <OnlineIndicator />}
        </Button>
    )
}
