/**
 * Created by tinhonng on 7/9/15.
 */

var ListContainer = require('./components/ListContainer');
var React = require('react');

var App = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <ListContainer />
                </div>
            </div>
        )
    }
});

React.render(<App />, document.getElementById('main'));