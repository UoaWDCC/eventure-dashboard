import { useState } from 'react';
import {TextInput, Button, Stack, Group } from '@mantine/core';
import classes from './NewInput.module.css';

export function NewInput() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const floating = value.trim().length !== 0 || focused || undefined;
  const [submits, setSubmits] = useState('')

  const handleSubmit = () => {
    setSubmits(`Last Note: ${value}`);
    if (value.trim() === '') {
      setSubmits('Add a note');
    }
  }
  return (
    <Stack>
      <Group justify="center" mt="xl">
        <TextInput
          label="New note"
          placeholder="Add a note"
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
        <Button type="button" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Group>
      <div className={classes.submittedText}>
      {submits}
      </div>
    </Stack>
  );
}
