import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from '@mui/material'

import { Link, redirect } from 'react-router-dom'
import { signup } from '../../services/auth.services'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Signup = () => {
  const [user_firstname, setFirstName] = useState('')
  const [user_lastname, setLastName] = useState('')
  const [user_nickname, setNickName] = useState('')
  const [gameId, setGame] = useState('')
  const [user_role, setRole] = useState('Player')
  const [user_DNI, setDNI] = useState('')
  const [user_email, setEmail] = useState('')
  const [user_password, setPassword] = useState('')
  const [user_direction, setDirection] = useState('')
  const [user_discord_user, setUserDiscord] = useState('')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleNickName = (e) => {
    setNickName(e.target.value)
  }

  const handleGame = (e) => {
      setGame(e.target.value)
    }

  const handleDNI = (e) => {
    setDNI(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleDirection = (e) => {
    setDirection(e.target.value)
  }
  const handleUserDiscord = (e) => {
    setUserDiscord(e.target.value)
  }

  const handleSignup = async (e) => {
     e.preventDefault()
     const body = {
       user_firstname,
       user_lastname,
       user_nickname,
       user_role,
       user_DNI,
       user_email,
       user_password,
       user_direction,
       user_discord_user,
       gameId,
     }
     const post = await signup(body)
     
  }

  return (
    <Box
      className="lateral"
      sx={{
        height: '100vh',
        widht: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box className="ok"></Box>

      <Box
        className="signup"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'space-around',
          width: '35%',
          padding: '0 180px',
          opacity: '0.9',
        }}
      >
        <Card sx={{ border: '2px solid black' }}>
          <CardHeader sx={{ backgroundColor: '#FF5100' }} title="Sign up">
            Sign up
          </CardHeader>
          <CardContent sx={{ backgroundColor: '#white' }}>
            <TextField
              onChange={handleFirstName}
              fullWidth
              margin="dense"
              label="firstname"
              type="email"
              variant="standard"
            ></TextField>

            <TextField
              onChange={handleLastName}
              fullWidth
              margin="dense"
              label="lastname"
              type="email"
              variant="standard"
            ></TextField>

            <TextField
              onChange={handleNickName}
              fullWidth
              margin="dense"
              label="nickname"
              type="email"
              variant="standard"
            ></TextField>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  favourite games
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gameId}
                  label="Age"
                  onChange={handleGame}
                >
                  <MenuItem value={2}>Counter Strike</MenuItem>
                  <MenuItem value={3}>League of Legends</MenuItem>
                  <MenuItem value={4}>Supermario Bros</MenuItem>
                  <MenuItem value={5}>Valorant</MenuItem>
                  <MenuItem value={7}>Tetris</MenuItem>
                  <MenuItem value={1}>Zelda</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField
              onChange={handleDNI}
              fullWidth
              margin="dense"
              label="DNI"
              type="email"
              variant="standard"
            ></TextField>

            <TextField
              onChange={handleEmail}
              fullWidth
              margin="dense"
              label="email"
              type="email"
              variant="standard"
            ></TextField>

            <TextField
              onChange={handlePassword}
              fullWidth
              margin="dense"
              label="password"
              type="email"
              variant="standard"
            ></TextField>
            <TextField
              onChange={handleDirection}
              fullWidth
              margin="dense"
              label="direction"
              type="email"
              variant="standard"
            ></TextField>
            <TextField
              onChange={handleUserDiscord}
              fullWidth
              margin="dense"
              label="user_discord"
              type="email"
              variant="standard"
            ></TextField>
          </CardContent>
        </Card>
        <Divider></Divider>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link underline="none" className="enlace6" to={'/login'}>
            <Button
              onClick={handleSignup}
              sx={{ backgroundColor: '#FF5100', marginLeft: '10px' }}
              variant="contained"
              color="error"
            >
              Sign up
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Box>
  )
}

export default Signup
