import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  fab: {
    position: 'fixed',
    zIndex: 1101,
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    '&.MuiFab-root': {
      backgroundColor: '#023047',
      color: 'white',
    },
  },
}));

const ActionButton = () => {
  const classes = useStyles();

  const [isShown, setIsShown] = useState(true);

  const handleFabClick = () => {
    window.open(
      'https://www.immobilienscout24.de/anbieter/edel-real-estate-gmbh/a784903773e5aed7405977b',
      '_blank',
    );
  };
  return (
    <div>
      {isShown ? (
        <Fab className={classes.fab} onMouseEnter={() => setIsShown(false)}>
          <HomeIcon />
        </Fab>
      ) : (
        <Fab
          className={classes.fab}
          variant='extended'
          onMouseLeave={() => setIsShown(true)}
          onClick={handleFabClick}
        >
          <HomeIcon />
          ALL PROPERTIES
        </Fab>
      )}
    </div>
  );
};

export default ActionButton;
