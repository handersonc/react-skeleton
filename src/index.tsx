import { createRoot } from 'react-dom/client';

import 'assets/styles/styles.css'

import RootContainer from './containers/Root'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RootContainer />)
