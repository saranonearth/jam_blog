import React from 'react';

const BlogListContent = ({article}) => {
    return (
        <div>
 

    <div className="card z-depth-0 horizontal">
      
      <div className="card-stacked">
        
        <div className="card-content" style={{padding:'6px 6px 6px 12px'}}>
        <p style={{fontWeight:'700',fontSize:'22px'}}>{article.title}</p>
          <p className="block-text grey-text">{article.description}</p>
        </div>
        <div className="card-action" style={{padding:'8px 16px'}}>
          <p style={{margin:'0px',fontSize:'11px'}} >May 27</p>
          <p style={{margin:'0px',fontSize:'12px'}} >posted by {article.author}</p>
        </div>
      </div>
      <div className="card-image">
        <img className="blog-img" src="https://lorempixel.com/80/80/nature/6" alt="blogimg"/>
      </div>
    </div>
  </div>  
 
    )
}

export default BlogListContent
