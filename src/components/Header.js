import React, { useState } from 'react'
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import {AppBar,Tab,Tabs,Toolbar, Typography } from '@mui/material';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState()
  return (
    
    <div>
      <AppBar sx={{backgroundColor: 'green'}} position='sticky'>
        <Toolbar>
          <AssuredWorkloadOutlinedIcon/>
          <Typography>Counselling and Vistor System</Typography>
          <Tabs textColor='inhert' indicatorColor='primary' 
          sx={{ml:"auto"}} value={value} 
          onChange={(e,val)=>setValue(val)}>
            <Tab  LinkComponent={NavLink} to= "/Signup"label='Signup'/>
            <Tab  LinkComponent={NavLink} to= "/signin" label='Signin'/>
            <Tab  LinkComponent={NavLink} to= "/Certifications" label='Certifications'/>
            <Tab  LinkComponent={NavLink} to= "/Admin" label='Admin'/>

          </Tabs>
        </Toolbar>
      </AppBar>
      </div>
      
  )
}

export default Header