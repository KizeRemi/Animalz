import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useStyles } from './styles';

import { LanguageContext } from '../../store/LanguageProvider';

const options = [
  {
    key: 'en',
    label: 'Anglais',
    shortcut: 'EN',
  },
  {
    key: 'fr',
    label: 'Français',
    shortcut: 'FR',
  },
];

const MenuLanguages = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
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
      <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="Split button">
        <Button>{options.find(item => lang === item.key).shortcut}</Button>
        <Button
          color="primary"
          variant="contained"
          size="small"
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {options.map(option => (
                    <MenuItem
                      key={option.key}
                      selected={lang === option.key}
                      onClick={() => {
                        changeLanguage(option.key);
                        setOpen(false);
                      }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
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
