import React from 'react'
import ArticleList from './ArticleList';
import Notification from './Notification';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


class Articles extends React.Component {
state={
    articles:[]
}

    render(){
        console.log(this.props.articles)
        
    return (
        <div className="container" style={{width:'90%', marginTop:'30px'}}>
            <div className="row">
                <div className="col s12 l7">
                <h4>Your Articles</h4>
                  
                
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
}


const mapStatetoProps=(state)=>{
    return{
        articles: state.firestore.ordered.articles
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection:'articles'}
    ])
)(Articles)
