import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import '../../../src/App.css' 
import logo from '../../assets/mando.png'
import { Typography } from "@mui/material";


function HeaderSignupAndLogin() {
  return (
    <Box
      sx={{
        backgroundColor: '#404040',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        height: '10vh',
       
      }}
    >
      <Box

        sx={{
          height: '20px',
          widht: '200px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
      
        }}
      >
        
        <img src={logo} width={200} height={100} style={{marginLeft:'200px'}} />

        <Typography color="white">NAKAMA GAMER</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Link underline="none" className="enlace3" to={'/login'}>
          <Button
            variant="contained"
            color="primary"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FF5100',
              width: '150px',
              height: '35px',
              textAlign: 'center',
              lineHeight: '20px',
            }}
          >
            LOGIN
          </Button>
        </Link>

        <Link underline="none" className="enlace4" to={'/signup'}>
          <Button
            variant="contained"
            color="primary"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0 10px',
              backgroundColor: '#FF5100',
              width: '150px',
              height: '35px',
              textAlign: 'center',
              lineHeight: '20px',
              marginRight: '100px',
              marginLeft: '30px',
            }}
          >
            SIGNUP
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default HeaderSignupAndLogin
