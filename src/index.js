
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BasicRouter from './Components/BasicRouter';
//import Home from './Components/Home';
//import Topics from './Components/Topics';
//import About from './Components/About';

// const Home = () => 
//     <div>
//         <h2>Home</h2>
//     </div>

// const About = () => 
//     <div>
//         <h2>About</h2>
//     </div>

// const Topics = ({ match }) => 
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>
//                     Rendering with React
//           </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>
//                     Components
//           </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>
//                     Props v. State
//           </Link>
//             </li>
//         </ul>

//         <Route path={`${match.url}/:topicId`} component={Topic} />
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )} />
//     </div>


// const Topic = ({ match }) => 
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>


//export default BasicExample


const reactContainer = document.getElementById('reactContainer');
ReactDOM.render(<BasicRouter />, reactContainer);

registerServiceWorker();
