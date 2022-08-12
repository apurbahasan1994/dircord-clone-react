import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react'
import Avatar from '../../../../../../shared/components/Avatar';
const MainContainer = styled('div')({
    width: '98%',
    display: 'flex',
    flexDirection:'column',
    marginTop: '10px',
});
export default function MessageHeader({ name }) {
    return (
        <MainContainer>
            <Avatar large="true" username={name}>
            </Avatar>
            <Typography variant="h4" sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    marginRight: '5px',
                    marginLeft: '5px'
                }}>{name}</Typography>
                <Typography sx={{
                    color: '#b9bbbe',
                    marginRight: '5px',
                    marginLeft: '5px'
                }}>conversations with {name}</Typography>
        </MainContainer>
    )
}
