import React from 'react'
import BlogListContent from './BlogListContent';

const Blog = () => {
    return (
        <div>

        <header className="header-img" >
        {/* header image */}
        </header>

        <div className="blog-wrapper">
        <div className="row">
            <div className="col s12 l7">
            <h3 style={{marginTop:'15px',fontFamily:'Abril Fatface'}}>Latest</h3>
                
                    <BlogListContent />
                    <BlogListContent />  
                    <BlogListContent />          
            </div>

            <div className="col s12 l5">
                </div>
             
            </div>
        </div>
        </div>
            
   
    )
}

export default Blog
