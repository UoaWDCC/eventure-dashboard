import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { NewInput } from '@/components/NewInput/NewInput';
export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <NewInput />
    </>
  );
}
