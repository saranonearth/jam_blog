import React from 'react';
import {Link} from 'react-router-dom';

const BlogListContent = ({article}) => {

    return (
        <div>
 

    <div className="card z-depth-0 horizontal">
      
      <div className="card-stacked">
        
        <div className="card-content" style={{padding:'6px 6px 6px 12px'}}>
        <Link className="black-text" to={`/article/${article.id}`}><p style={{fontWeight:'700',fontSize:'22px'}}>{article.title}</p></Link>
          <p className="block-text grey-text">{article.description}</p>
        </div>
        <div className="card-action" style={{padding:'8px 16px'}}>
          <p style={{margin:'0px',fontSize:'11px'}} >May 27</p>
          <p style={{margin:'0px',fontSize:'12px'}} >posted by {article.author}</p>
        </div>
      </div>
    </div>
  </div>  
 
    )
}

export default BlogListContent
