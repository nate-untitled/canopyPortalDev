import React from 'react'
import { Drawer, makeStyles, Hidden, AppBar, List, ListItem, Avatar, Box, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import PlusOneRoundedIcon from '@material-ui/icons/PlusOneRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import PublicIcon from '@material-ui/icons/Public';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import { AmplifySignOut } from '@aws-amplify/ui-react';

const drawerWidth = 280;
const appBarHeight = 70;
const background = '#fff';

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: '100vw',
    margin: '0 auto',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    height: appBarHeight,
    backgroundColor: background,
    position: 'sticky',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  icon: {
    minWidth: 14,
    color: '#333',
  },
  iconBig: {
    minWidth: 20,
    color: '#333',
  },
  account: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  accountInfo: {
    display: 'flex',
    marginBottom: 5,
  },
  avatar: {
    marginRight: 10,
  },
  listHeading: {
    backgroundColor: '#fff'
  },
  soloList: {
    margin: '10px 0',
    backgroundColor: '#fff'
  },
  menuItem: {
    display: 'inline'
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <ListItem>
        <Hidden mdUp>
            <AppBar className={classes.appBar}>
              <AmplifySignOut buttonText="Logout"></AmplifySignOut>
            </AppBar>
        </Hidden>
        <Hidden smDown implementation="css">
            <Drawer 
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left">
                <Box className={classes.account}>
                    <div className={classes.accountInfo}>
                      <div>
                        <Avatar className={classes.avatar}></Avatar>
                      </div>
                      <div>
                        <Typography variant='h5'>Company Name</Typography>
                      </div>
                    </div>
                    <div>
                        <Typography variant='p'> Status update and most important links</Typography>
                    </div>
                </Box>
                <List
                  subheader={
                      <ListItem component="div" className={classes.listHeading}>
                        <ListItemIcon><PlusOneRoundedIcon /></ListItemIcon>
                        <ListItemText>Minimum Requirements</ListItemText>
                      </ListItem>
                  }>
                    <ListItem button>
                      <ListItemIcon><PublicIcon /></ListItemIcon>
                      <ListItemText primary="External Impact" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon><SentimentVerySatisfiedIcon /></ListItemIcon>
                      <ListItemText primary="Culture" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon><FilterHdrIcon /></ListItemIcon>
                      <ListItemText primary="Leadership" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                      <ListItemText primary="Governance" />
                    </ListItem>
                </List>
                <List
                    subheader={
                        <ListItem component="div" className={classes.listHeading}>
                          <ListItemIcon><TrendingUpRoundedIcon /></ListItemIcon>
                          <ListItemText>Continuous Improvement</ListItemText>
                        </ListItem>
                    }>
                    <ListItem>
                      <ListItemText primary="Update Application" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="External Impact Reporting" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Electives" />
                    </ListItem>
                </List>
                  <ListItem button className={classes.soloList}>
                  <ListItemIcon><LibraryBooksRoundedIcon /></ListItemIcon>
                  <ListItemText primary="Curriculum" />
                </ListItem>
                <ListItem button className={classes.soloList}>
                  <ListItemIcon><HelpOutlineRoundedIcon /></ListItemIcon>
                  <ListItemText primary="Tools and Support" />
                </ListItem>
                <AmplifySignOut buttonText="Logout"></AmplifySignOut>
            </Drawer>
        </Hidden>
    </ListItem>
  );
}

export default NavBar;