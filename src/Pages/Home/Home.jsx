import { Box, Typography } from '@mui/material'
import React from 'react'

function Home() {

  return (
    <>
      <Box
        className="home"

        sx={{
          backgroundColor: 'yellow',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          color: 'white',
          padding:'0.2px 50px',
         
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '25%',
            border: '1px solid white',
            marginBottom:'250px'
          }}
        >
          <Typography>NAKAMA GAMER</Typography>
          <Typography

          sx= {{
            marginTop:'5px'
          }}
          
          
          >
            Is a new application to find online playmates in a practical and
            simple way. In a few clicks you will get the results you are looking
            for.
          </Typography>
        </Box>

       
      </Box>
    </>
  )
}

export default Home