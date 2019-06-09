import React from 'react'
import ArticleList from './ArticleList';
import Notification from './Notification';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


class Articles extends React.Component {
    componentDidMount(){
        this.props.firestore.setListener({collection:'articles'})
    }
    
    render(){
        const Notifications =[
         { id:1 , content:'You get featured in the contributors section once you publish 2 articles.'},
         {id:2, content:'This WebApp is still in Beta version.'}
        ]
    
        if(this.props.articles === undefined) return <div className="loader preloader-wrapper center active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
        
        const filteredList = this.props.articles.filter(article=>{
            return article.authorId === this.props.firebase._.authUid
        })
        const newArticles = filteredList.length ? (
            filteredList.map(article=>{
                return <ArticleList key={article.id} article={article}/>
            })
        ): (
            <div>
                <h5 style={{fontSize:'1.2em'}}>No Articles</h5>
            <h6 className="grey-text" style={{fontSize:'1em'}}>Click on NEW ARTICLE to pusblish your first article</h6>
            </div>
        )

    return (
        <div className="container" style={{width:'90%', marginTop:'30px'}}>
            <div className="row">
                <div className="col s12 l7">
                <h4>Your Articles</h4>
                {
                    newArticles
                }  
                
                </div>
                <div className="col s12 l5">
                <div className="container">
                <h4>Notifications</h4>
                    {
                        Notifications.map(notification=>{
                            return <Notification key={notification.id} data={notification}/>
                        })
                    }
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
        {collection:'articles',orderBy:['postedDate','desc']}
    ])
)(Articles)
