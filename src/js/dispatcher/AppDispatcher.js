/**
 * Created by tinhonng on 7/9/15.
 */
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
    this.dispatch({
       source: 'VIEW_ACTION',
        action: action
    });
};

module.exports = AppDispatcher;