import React from 'react'
import { Route } from 'react-router-dom'
import ArticleListView from './containers/ArticleListView'; 

function BaseRouter(){
    return(
        <div>
            <Route exact path="/" component={ArticleListView} />
            <Route exact path="/:articleID" component={ArticleListView} />
        </div>
    );
}

export default BaseRouter