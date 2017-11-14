import React from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from './Topic';

const Topics = ({ match }) => 
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/Rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/Components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/Props-vs-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>

export default Topics;
