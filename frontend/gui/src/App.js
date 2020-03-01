import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/CustomLayout'
import ArticleListView from './containers/ArticleListView'; 

function App() {
  return (
    <div className="App">
        <CustomLayout>
            <ArticleListView/>
        </CustomLayout>
    </div>
  );
}

export default App

