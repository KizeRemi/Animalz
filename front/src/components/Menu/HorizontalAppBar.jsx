import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuLanguages from './MenuLanguages';

import { useStyles } from './styles';

const HorizontalAppBar = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Animalz
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className={classes.grow} />
            {children}
          <MenuLanguages />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HorizontalAppBar;
