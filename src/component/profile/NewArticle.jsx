import React from 'react'

const NewArticle = () => {
    return (
        <div>   
           <div className="container" >
                <div className="card newarticle-card" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    
                    <div className="cont">
                        
                        <form>
                        <button className="btn black white-text right" style={{marginTop:'20px'}}>Publish</button>
                        <h4  style={{paddingTop:'30px',marginBottom:'0',fontSize:'18px'}}>Title</h4>
                        <div class="input-field col s12" style={{marginTop:'0'}}>
                            <input style={{fontSize:'22px',fontWeight:'700'}} id="title" type="text" class="validate" required/>
                        </div>  


                        <h4 style={{paddingTop:'30px',marginBottom:'0',fontSize:'18px'}}>Description</h4>
                        <div class="input-field col s12" style={{marginTop:'0'}}>
                        <textarea style={{height:'80px'}} id="textarea1" class="materialize-textarea grey-text" required></textarea>
                        </div> 


                        <h4 style={{paddingTop:'30px',marginBottom:'0',fontSize:'15px'}}>Article content</h4>
                        <div class="input-field col s12" style={{marginTop:'0'}}>
                        <textarea style={{height:'200px',marginBottom:'20px'}} id="textarea1" class="materialize-textarea" required></textarea>
                        </div> 
                        
                        </form>
                      
                    </div>     
                    </div>
                </div>
            </div>
        </div>
     
    )
}

export default NewArticle
