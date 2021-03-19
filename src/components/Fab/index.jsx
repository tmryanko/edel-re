import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import LanguageIcon from '@material-ui/icons/Language';

import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'fixed',
    zIndex: 1101,
    top: theme.spacing(2),
    right: theme.spacing(2),
    '& .MuiFab-primary': {
      backgroundColor: '#023047',
    },
    '& .MuiFab-root': {
      height: 46,
      width: 46,
    },
  },
}));

// import './style.css';
const actions = [
  // { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <Avatar> DE</Avatar>, name: 'Deutschland' },
  { icon: <Avatar> EN</Avatar>, name: 'English' },
];
const Fab = ({ onClick }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  // const [hidden, setHidden] = React.useState(false);

  // const handleVisibility = () => {
  //   setHidden((prevHidden) => !prevHidden);
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SpeedDial
        direction='down'
        className={classes.speedDial}
        // className={`${classes.speedDial} MuiFab-primary`}
        ariaLabel='SpeedDial openIcon example'
        // hidden={hidden}
        icon={<LanguageIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => onClick(action.name)}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default Fab;
