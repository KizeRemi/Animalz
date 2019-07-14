import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { useStyles } from './styles';
import FacebookConnect from '../../containers/Login/FacebookConnect';
import { Login } from '../../containers/Login';

const MenuLanguages = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div className={classes.languages}>
      <Button
        ref={anchorRef}
        color="primary"
        variant="contained"
        size="small"
        aria-label="Split button"
        aria-owns={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={() => setOpen(prevOpen => !prevOpen)}
      >
        Login
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement ? 'center top' : 'center bottom' }}
          >
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem>
                    <FacebookConnect />
                  </MenuItem>
                  <MenuItem>
                    <Login />
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default MenuLanguages;
