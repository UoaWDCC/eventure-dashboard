import classes from './Effects.module.css';

export function EffectsButton() {
  return (
    <button
      type="button"
      className={classes.button}
      onClick={() => alert('Button has been clicked.')}
    >
      More
    </button>
  );
}
