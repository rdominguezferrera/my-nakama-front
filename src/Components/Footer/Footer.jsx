import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'


function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#404040',
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width: '100vw',
        height: '10vh',
        color: 'white',
      }}
    >
      <Typography>Copyright 2023</Typography>
      <Typography>Privacy Policy</Typography>
      <Typography>Cookies Policy</Typography>
      <Typography>Legal notice and terms of use</Typography>
      
    </Box>
  )
}

export default Footer
