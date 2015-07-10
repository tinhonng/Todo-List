/**
 * Created by tinhonng on 7/9/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var todoActions = {
  addItem: function(item){
      AppDispatcher.handleActions({
         actionType: appConstants.ADD_ITEM,
         data: item
      });

  },
  removeItem: function(index){
      AppDispatcher.handleActions({
         actionType: appConstants.REMOVE_ITEM,
          data: index
      });
  }
};