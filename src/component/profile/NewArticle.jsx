import React, { Component } from 'react'
import {connect} from 'react-redux';
import {NewArticle} from '../../actions/articleAction';

export class newArticle extends Component {
    state={
        title:'',
        description:'',
        content:''
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.newArticle(this.state);
    }

    render() {
        return (
            <div>
                 <div>   
           <div className="container" >
                <div className="card newarticle-card" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    
                    <div className="cont">
                        
                        <form onSubmit={this.handleSubmit}>
                        <button className="btn black white-text right" style={{marginTop:'20px'}}>Publish</button>
                        <h4  style={{paddingTop:'30px',marginBottom:'0',fontSize:'18px'}}>Title</h4>
                        <div className="input-field col s12" style={{marginTop:'0'}}>
                            <input id="title" onChange={this.handleChange} style={{fontSize:'22px',fontWeight:'700'}}  type="text" className="validate" required/>
                        </div>  


                        <h4 style={{paddingTop:'30px',marginBottom:'0',fontSize:'18px'}}>Description</h4>
                        <div className="input-field col s12" style={{marginTop:'0'}}>
                        <textarea id="description" onChange={this.handleChange} style={{height:'80px'}}  className="materialize-textarea grey-text" required></textarea>
                        </div> 


                        <h4 style={{paddingTop:'30px',marginBottom:'0',fontSize:'15px'}}>Article content</h4>
                        <div className="input-field col s12" style={{marginTop:'0'}}>
                        <textarea id="content" onChange={this.handleChange} style={{height:'200px',marginBottom:'20px'}}  className="materialize-textarea" required></textarea>
                        </div> 
                        
                        </form>
                      
                    </div>     
                    </div>
                </div>
            </div>
                 </div>
            </div>
        )
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        newArticle: (newarticle)=>{dispatch(NewArticle(newarticle))}
    }
}

export default connect(null,mapDispatchtoProps)(newArticle)
