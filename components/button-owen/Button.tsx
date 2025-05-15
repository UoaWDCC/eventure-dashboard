import React, { useState } from 'react';
import styles from './Button.module.css';

export function Button() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setShowImage(!showImage)}
      >
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>
      {showImage && (
        <img
          src="https://png.pngtree.com/png-clipart/20230824/ourmid/pngtree-flame-burning-sparks-splash-broken-bomb-explosion-realistic-photography-decorative-pattern-png-image_9183768.png"
          alt="explosion"
          className={styles.image}
        />
      )}
    </div>
  );
}