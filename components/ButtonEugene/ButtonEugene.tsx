import React, { useEffect, useState } from 'react';
import styles from './ButtonEugene.module.css';

type ButtonEugeneProps = {};

const labelsList: string[] = [
  'Click me 😄',
  'Again 👆',
  'More 🔁',
  'Keep going 💪',
  "Don't stop 🚫",
  'Still here? 👀',
  'Tap! 🖱️',
  "You're close 🤏",
  'Almost ⏳',
  'One more ➕',
  'Just once 🔂',
  'Do it 💥',
  'Hit it 🥊',
  'Push! 🧠',
  'Yes! ✅',
  'Try again 🔄',
  'Click harder 🤜',
  'You got this 🚀',
  'More, please 🙏',
  'Seriously? 🤨',
  'Come on 🫵',
  'Almost done 🏁',
  'Keep clicking 🎯',
  'Still not done 😬',
  'Click click 🐭',
  "Don't give up 🫡",
  'Nearly there 🌈',
  'Please? 🥺',
  'Last one 😈',
  'Promise 🤞',
  'Okay now? 🤔',
  'Nope 😅',
  'More!! 🔥',
  'Final click 🧨',
];

const ButtonEugene: React.FC<ButtonEugeneProps> = () => {
  const [index, setIndex] = useState<number>(0);
  const [colorClass, setColorClass] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [label, setLabel] = useState<string>(labelsList[0]);

  const handleClick = () => {
    const nextIndex = index + 1;

    if (nextIndex === labelsList.length - 1) {
      setColorClass('danger');

      setLabel(labelsList[nextIndex]);
      setCountdown(5);
      return;
    }

    if (nextIndex < labelsList.length) {
      setIndex(nextIndex);
      setLabel(labelsList[nextIndex]);
    }
  };

  useEffect(() => {
    if (countdown === null) {
      return;
    }

    if (countdown === 0) {
      // alert('💥 BOOOOOOM 💥');
      setButtonDisabled(true);
      setColorClass('disabled');
      setLabel('Button disabled');
      return;
    }

    const timer = setTimeout(() => {
      const next = countdown - 1;
      setCountdown(next);
      setLabel(`${labelsList[labelsList.length - 1]} ${next}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[colorClass]}`}
      onClick={handleClick}
      disabled={buttonDisabled}
    >
      {label}
    </button>
  );
};

export default ButtonEugene;
