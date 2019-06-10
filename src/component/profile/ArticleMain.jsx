import React, { Component } from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
export class ArticleMain extends Component {
    
    render() {




        const id = this.props.match.params.articleId


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

        const filteredArticle = this.props.articles.filter(article=>{
            return article.id === id
        })
      
        const article = filteredArticle.length? (filteredArticle.map(art=>{
          console.log(art)
                return <div key={art.id} style={{paddingTop:'20px',paddingBottom:'20px'}}> <h4 style={{fontWeight:'700'}}>{art.title}</h4>
                <p className="grey-text" style={{color:'#999999', fontWeight:'600',fontSize:'22px'}}>{art.description}</p>
                <p className="left-align" style={{fontSize:'18px'}}>{art.content}</p>
                </div>
        })) : (
                <h1>loading</h1>
        )
        return (
            <div>
                <div className="container" >
                <div className="card yo-card article-card about-card center edit-profile-card" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                     
                    <div className="container" syle={{marginTop:'20px',marginBottom:'20px'}}>
                            {
                                article
                            }
                    </div>     
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
    firestoreConnect([
    {collection:'articles'}
    ]),
    connect(mapStatetoProps)
)(ArticleMain)
