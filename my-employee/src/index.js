import React from 'react';


import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './container/App';
import rootReducers from './reducers'

const logger = (store) => (next) => (action) => {
  console.log("action fired:: ", action);
  next(action);
}

const middleware = applyMiddleware(logger);

const store = createStore(rootReducers, middleware);

store.subscribe(() =>{
  console.log("state changed:: ",store.getState())
});





//store.dispatch(loadEmp(empList));
//store.dispatch(selectEmp(empList[0]));
//store.dispatch(searchEmp('Praveen'));
//store.dispatch(selectEmp(empList[1]));


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//ReactDOM.render(<PermanentDrawer />, document.getElementById('root'));
