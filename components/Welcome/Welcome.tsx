import { useState } from 'react';
import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  const [name, setName] = useState(''); // State to store the user's name
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  const handleButtonClick = () => {
    if (name.trim()) {
      setIsModalOpen(true); // Open the modal if a name is entered
    } else {
      alert('Please enter your name'); // Alert if no name is entered
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Eventure
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is a starter component{' '}
      </Text>
      <div className={classes.name}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name} // Bind the input value to the state
          onChange={(e) => setName(e.target.value)} // Update the state on input change
        />
        <button onClick={handleButtonClick}>Submit</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <h2>Hello {name}!</h2>
            <img
              src="/girl_waving.gif"
              alt="Greeting"
              className={classes.image}
            />
            <button onClick={closeModal} className={classes.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}