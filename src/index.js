import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './style/style.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

// Earlier App was being used as central router. Now we don't have central single component and hence no need of App component with Routers
// You can delete the app.js file in components too
// import App from './components/app';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Sample routing code and can be removed if you want to remove sample routes code
class Hello extends React.Component {
  render() { return <div>Hello!</div>}
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye!</div>}
}

// Take component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
        <Route path="/" component={PostsIndex} />
       </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

  registerServiceWorker();
