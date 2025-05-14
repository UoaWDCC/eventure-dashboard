import React from 'react';
import styles from './ButtonEugene.module.css';
import { useState } from 'react';

type ButtonEugeneProps = {
	labelsList: string[];
};

const ButtonEugene: React.FC<ButtonEugeneProps> = ({ labelsList }) => {
	

	const [index, setIndex] = useState<number>(0);
	const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

	const handleClick = () => {
		const nextIndex = index + 1;
		 if (nextIndex >= labelsList.length - 1) {
			alert("BOOOOOOM 💥");
			setButtonDisabled(true);
		}
		setIndex(nextIndex);
	};

	return (
		<button
			className={styles.button}
			onClick={handleClick}
			disabled={buttonDisabled}
		>
			{labelsList[index]}
		</button>
	);
};

export default ButtonEugene;
