import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {  useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const navigate=useNavigate();
  let user=[];
   user = useSelector((state) => state.userReducer);
  console.log(user)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" >
          {/* Hey {user} */}
          </Typography>
          <Typography variant="h6" className={classes.title}>
          Grocery Shop
          </Typography>
          <Typography variant="h6" >    
           
          </Typography>
          <Button color="inherit" onClick={()=>navigate('/')} >Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
