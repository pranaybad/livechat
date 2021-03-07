// import { ChatEngine } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed'

// import './App.css';

// const App = () => {
//         return ( <
//             ChatEngine height = "100vh"
//             projectID = "f181f08d-cf87-422d-9a3b-a8892a31e43d"
//             userName = "pranay"
//             userSecret = "123123"
//             renderChatFeed = {
//                 (chatAppProps) => < ChatFeed {...chatAppProps }
//                 />} / >

//             );
//         };
//         export default App;



import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'f181f08d-cf87-422d-9a3b-a8892a31e43d';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;