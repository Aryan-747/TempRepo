// Ques1 -> UserCard

/*import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';

const App = () => (
  <div>
    <UserCard name="John Doe" age={28} location="New York" />
    <UserCard name="Jane Smith" age={34} location="Los Angeles" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
*/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

