import React from 'react'
import BlogListContent from './BlogListContent';
import Jam from './Jam';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';


const Blog = (props) => {

    if(props.articles === undefined) return <div className="loader preloader-wrapper center active">
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

    const blogPosts =  props.articles.map(article=>{
            return <BlogListContent key={article.id} article={article} />})
    return (
        <div>

        <header className="header-img" >
        {/* header image */}
        </header>

        <div className="blog-wrapper">
        <div className="row">
            <div className="col s12 l7">
            <h3 style={{marginTop:'15px',fontFamily:'Abril Fatface'}}>Latest</h3>
                
                    {
                        blogPosts
                    }      
            </div>

            <div className="col s12 l5 blog-sidebar">
            <Jam/>
                </div>
        
            </div>
        </div>

        </div>
            
   
    )
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
)(Blog)
