import { useState } from 'react';
import {Group, TextInput } from '@mantine/core';
import classes from './input.module.css';

export function NewInput() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const floating = value.trim().length !== 0 || focused || undefined;

  return (
    <Group justify="center" mt="xl">
      <TextInput
        label="Name"
        placeholder="Enter your name"
        required
        classNames={classes}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        mt="md"
        autoComplete="nope"
        data-floating={floating}
        labelProps={{ 'data-floating': floating }}
      />
      <button type = "button">
        Submit
      </button>
    </Group>
  );
}
