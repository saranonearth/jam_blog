import React from 'react'

const ArticleList = (props) => {
  
    return (
        <div>
            <div className="card" >
                <div className="card-content">
                    <h3 className="catd-title" style={{marginTop:'0'}}>props.article.title
                    </h3>
                    <p>props.article.description</p>
                </div>
                <div className="card-action" style={{padding:'8px 16px'}}>
                    <p className="grey-text">published on 24 May, 2019</p>
                    <button className="black btn white-text">Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default ArticleList
