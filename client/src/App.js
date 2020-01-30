import React from 'react';
// import axios from 'axios'
// import ContactList from './contacts/tableContact'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import Add from './components/Addcontact'
import ContactShow from './components/Show'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles(theme => ({
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


const  App=(props)=>{
  
//   componentDidMount()
//   {
//       axios.get('http://localhost:5000/contacts')
//       .then(response=>{
//  //       console.log(response.data)
//         this.setState(()=>({
//           contacts:response.data,

//         }))
//   }
//       })
//  render()
//  {

  const classes = useStyles();
    return(
        <div class={classes.root}>
        <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">  
        {/* <MenuIcon/> */}
        </IconButton>

        <BrowserRouter>
         
        <h1>Contact manager</h1><br/>
        <Link to="/"> Home </Link> 
        <Link to="/contacts">Contacts</Link>

        
        <Switch> 
            <Route path="/" component={Home} exact={true} />
            <Route path="/contacts" component={List} exact={true}/>
            <Route path="/contacts/addcontact" component={Add} exact={true}/>
            <Route path="/contacts/:id" component={ContactShow}/>
            </Switch>
            </BrowserRouter>
         
          </Toolbar>  
          </AppBar>  
      </div>
    )
//  }
}

export default App