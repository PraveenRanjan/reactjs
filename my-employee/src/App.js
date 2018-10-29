import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './App.css';





class EmpItem extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    let isSelected = false;
    if(this.props.emp === this.props.selectedEmp ){
      isSelected = true;
    }
    return(
      <ListItem button selected={isSelected} onClick={() =>this.props.onClick(this.props.emp)}>
          {this.props.emp.name}
      </ListItem>
    );
  }
}



class EmployeeList extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let employeeList = [];
    if(this.props.searchText.length > 0){
      this.props.empList.forEach((value, index) =>{
        if(value.name.search(new RegExp(this.props.searchText, "i")) > -1){
          employeeList.push(value);
        }
      });

    }else{
      employeeList = this.props.empList;
    }
    let rows = [];
    if(empList.length > 0){
        rows = employeeList.map((emp) => <EmpItem emp={emp} key={emp.id}
        onClick={this.props.handleListItemClick}
         selectedEmp={this.props.selectedEmp} />
       );
    }
      return(
        <div>
        <List component="nav">
          {rows}

        </List>
      </div>
      );
  }
}

class EmpDetails extends Component {
  render(){
    let selection = this.props.selectedEmp ? true : false;
    if(this.props.selectedEmp.id){
      return(
          <ul>
            <label>Id: </label>
             {this.props.selectedEmp.id}
           <br/>
             <label>Name: </label>
           {this.props.selectedEmp.name}
         <br/>
          <label>Salary: </label>
             {this.props.selectedEmp.salary}
          </ul>
      );
    }else{
      return(
        <div>select Employee </div>
      );
    }

  }
}

class SearchPanel extends Component {
  render(){
    const inputProps = {
  step: 300,
};
    return(
      <div>
        <TextField
          id="standard-search"
          label="Search"
          type="search"

          margin="normal"
          onChange={this.props.onSearch}
        />

      </div>
    );
  }
}

class LeftNav extends Component {
  constructor(props){
    super(props);
    this.state = {searchText:""};
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e){
    this.setState({searchText:e.target.value});
  }

  render(){
    return(
      <div>
          <SearchPanel onSearch={this.onSearch}/>
          <Divider />
          <EmployeeList empList={this.props.empList} handleListItemClick={this.props.handleListItemClick}
            selectedEmp={this.props.selectedEmp} searchText={this.state.searchText}/>
      </div>
    );
  }
}
class  Footer extends Component {
  render(){
    return(
      <div width="100%" align="center">
        Copy right..
      </div>
    );
  }
}
const empList = [
  {
    id:1, name:"Praveen", salary:10000
  },
  {
    id:2, name:"Prakash", salary:11000
  },
  {
    id:3, name:"Mahesh", salary:13000
  }
];

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appFrame: {
    height: 630,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 10,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class PermanentDrawer extends Component {
  constructor(props){
    super(props);

    this.state = {selectedEmp:{},
                  orgName:"Synerzip",
                  loggedInUser: "Admin",
                  open: true,
                  anchor: 'left'
                  };
      this.handleListItemClick = this.handleListItemClick.bind(this);
  }



  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  handleListItemClick(emp){
    this.setState({selectedEmp:emp});
    console.log(this.state);
  }

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    return (
 <div className={classes.root}>
   <div className={classes.appFrame}>
     <AppBar
       className={classNames(classes.appBar, {
         [classes.appBarShift]: open,
         [classes[`appBarShift-${anchor}`]]: open,
       })}
     >
            <Toolbar disableGutters={!open}>
              <IconButton

                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />

              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>

              {this.state.orgName}
            </Typography>
            <IconButton>
              <AccountCircle />
            </IconButton>
              <Button color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="persistent"
            anchor={anchor}
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
                  <LeftNav empList={empList} handleListItemClick={this.handleListItemClick}
                    selectedEmp={this.state.selectedEmp}/>
          </Drawer>
    <main className={classes.content}>
        <div className={classes.toolbar} />

        <EmpDetails selectedEmp={this.state.selectedEmp} />


      </main>

</div>
<Footer/>
</div>


    );
  }
}


PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(PermanentDrawer);
