import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../services/category.services'
import { getAllUsers } from '../../services/user.services'
import { useState, useEffect } from 'react'
import  SearchIcon  from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField } from '@mui/material'



function Body() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const result = await getAllUsers()
      setUsers(result)
    }
    getUsers()
  }, [])
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const result = await getAllCategories()
    setCategories(result)
  }

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <Box
      sx={{
        backgroundColor: 'D9D9D9',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fcb045',
          color: 'black',
          height: '7vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        CATEGORIES
      </Box>

      <Box
        sx={{
          backgroundColor: '#D9D9D9',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '20px 5px',
          width: '100vw',
          height: '7vh',
        }}
      >
        {categories.map((category, index) => {
          return (
            <Box
              key={index}
              sx={{
                color: 'white',
                width: '250px',
                height: '200px',
              }}
            >
              <Link to={`/dashboard/category/${category.category_type}`}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: 'blue' }}
                  sx={{
                    padding: '0 15px',
                    height: '50px',
                    color: 'white',
                    width: '50%',
                  }}
                >
                  {category.category_type}
                </Button>
              </Link>
            </Box>
          )
        })}
      </Box>

      {/*  <TextField

        sx={{

          backgroundColor: 'white',
          width:'30%',
          height:'20vh'

        }}
        id="outlined-basic"
        label="Search..."
        variant="standard"
        color="primary"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon color="primary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      /> */}
    </Box>
  )
}

export default Body
