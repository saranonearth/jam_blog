import React from 'react'
import ArticleList from './ArticleList';
import Notification from './Notification';
const Articles = () => {
    return (
        <div className="container" style={{width:'90%', marginTop:'30px'}}>
            <div className="row">
                <div className="col s12 l7">
                <h4>Your Articles</h4>
                <ArticleList/>
                <ArticleList/>
                <ArticleList/>
                </div>
                <div className="col s12 l5">
                <div className="container">
                <h4>Notification</h4>
                    <Notification/>
                    <Notification/>
                </div>
               
                </div>
            </div>
            
        </div>
    )
}

export default Articles
