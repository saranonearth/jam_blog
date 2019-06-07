import React from 'react'

const ArticleList = () => {
  
    return (
        <div>
            <div className="card" >
                <div className="card-content">
                    <h3 className="catd-title" style={{marginTop:'0'}}>Title-1 
                    </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet minima dolorum eligendi asperiores soluta numquam? Architecto tenetur harum veritatis eligendi nulla. Impedit odit repellendus, id laudantium labore eum sapiente aut!</p>
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
