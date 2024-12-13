import { createRoot } from 'react-dom/client';
import { MissedCallDemo } from '../src/components/MissedCallDemo';

const root = createRoot(document.getElementById('chat-demo'));
root.render(<MissedCallDemo />);