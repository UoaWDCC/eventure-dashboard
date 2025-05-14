import React from 'react';
import ButtonEugene from './ButtonEugene';

const tempButtonLabels: string[] = [
		"Click me 😄",
		"Again 👆",
		"More 🔁",
		"Keep going 💪",
		"Don't stop 🚫",
		"Still here? 👀",
		"Tap! 🖱️",
		"You're close 🤏",
		"Almost ⏳",
		"One more ➕",
		"Just once 🔂",
		"Do it 💥",
		"Hit it 🥊",
		"Push! 🧠",
		"Yes! ✅",
		"Try again 🔄",
		"Click harder 🤜",
		"You got this 🚀",
		"More, please 🙏",
		"Seriously? 🤨",
		"Come on 🫵",
		"Almost done 🏁",
		"Keep clicking 🎯",
		"Still not done 😬",
		"Click click 🐭",
		"Don't give up 🫡",
		"Nearly there 🌈",
		"Please? 🥺",
		"Last one 😈",
		"Promise 🤞",
		"Okay now? 🤔",
		"Nope 😅",
		"More!! 🔥",
		"Final click 🧨",
		"Button Pemanently Disabled",
	];

export default {
  title: 'Example/ButtonEugene',
  component: ButtonEugene,
};

export const Basic = () => <ButtonEugene labelsList={tempButtonLabels} />;
