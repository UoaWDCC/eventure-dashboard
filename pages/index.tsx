import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { EffectsButton } from '../components/EffectsButton/EffectsButton';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <EffectsButton />
    </>
  );
}
