"use strict";
var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var routes = (
    <Route name="app" path="/" handler={require('./components/app2')}>
        <DefaultRoute handler={require('./components/homePage')}/>
    </Route>
);
module.exports = routes;