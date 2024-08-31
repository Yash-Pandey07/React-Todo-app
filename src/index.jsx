import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createLogger } from './components/logger'; 

const logger = createLogger();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
logger.log('Application has started');