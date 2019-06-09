import React from 'react'
import {connect} from 'react-redux';
import {remove} from '../../actions/articleAction';

const ArticleList = (props) => {
    
    return (
        <div>
            <div className="card" >
                <div className="card-content">
                    <h4 className="catd-title" style={{marginTop:'0'}}>{props.article.title}
                    </h4>
                    <p>{props.article.description}</p>
                </div>
                <div className="card-action" style={{padding:'8px 16px'}}>
                    <p className="grey-text">published on 24 May, 2019</p>
                    <button onClick={()=>props.removeArticle(props.article.id)} className="black btn white-text">Delete</button>
                </div>
            </div>
            
        </div>
    )
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        removeArticle: (id)=>{
            dispatch(remove(id))
        }
    }
}


export default connect(null,mapDispatchtoProps)(ArticleList)
