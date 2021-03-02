import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import { useScrollDirection } from '../../hooks/useScrollDirection';

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

const ActionButton = ({ lang }) => {
  const TEXT = {
    English: {
      PROPERTIES: `ALL PROPERTIES`,
    },
    Deutschland: {
      PROPERTIES: `ALLE OBJEKTE`,
    },
  };
  const scrollDirection = useScrollDirection();

  const classes = useStyles();

  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    if (scrollDirection === 'up') {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  }, [scrollDirection]);
  const handleFabClick = () => {
    window.open(
      'https://www.immobilienscout24.de/anbieter/edel-real-estate-gmbh/a784903773e5aed7405977b',
      '_blank',
    );
  };
  return (
    <div>
      <Fab
        className={classes.fab}
        variant={isShown ? 'extended' : 'round'}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={handleFabClick}
      >
        <HomeIcon />
        {isShown && TEXT[lang].PROPERTIES}
      </Fab>
    </div>
  );
};

export default ActionButton;
