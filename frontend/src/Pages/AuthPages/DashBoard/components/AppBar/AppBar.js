import React from 'react'
import { styled } from '@mui/system';
import DropDownMenu from './DropDownMenu/DropDownMenu';

const MainContainer=styled('div')({
   position:'absolute',
   right:'0',
   top:'0',
   height:'48px',
   borderBottom:'1px solid black',
   backgroundColor:'#36393f',
   width:'calc(100% - 326px)',
   display:'flex',
   alignItems:'ccenter',
   justifyContent:'space-between',
   padding:'0 15px'
  });
export default function AppBar() {
  return (
    <MainContainer>
        <DropDownMenu></DropDownMenu>
    </MainContainer>
  )
}