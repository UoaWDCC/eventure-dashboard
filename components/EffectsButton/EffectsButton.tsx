import { useState } from 'react';
import classes from './Effects.module.css';

export function EffectsButton() {
  const [showAlert, setShowAlert] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setIsFadingOut(false);
    setTimeout(() => {
      setIsFadingOut(true);
    }, 1500); // Start fading out after 1 second
    setTimeout(() => {
      setShowAlert(false);
    }, 2000); // Hide after 2 seconds
  };

  return (
    <>
      <button type="button" className={classes.button} onClick={() => handleClick()}>
        More
      </button>

      {showAlert && (
        <div className={classes.popupOverlay}>
          <div className={`${classes.popupAlert} ${isFadingOut ? classes.fadeOut : ''}`}>
            This is a custom alert message!
          </div>
        </div>
      )}
    </>
  );
}
