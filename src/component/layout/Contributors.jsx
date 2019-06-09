import React from 'react'
import ContributorCard from './ContributorCard'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const Contributors = (props) => {
        if(props.users===undefined) return <div className="loader preloader-wrapper center active">
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
        
        console.log(props.users)    

        const filteredContributors = props.users.filter(user=>{
            return user.articleCount >= 2
        })
       
        const contributors = filteredContributors.map(user=>{
            console.log(user.id)
            return   <div className="col align-center" key={user.id}>
            <ContributorCard  user={user} />
            </div>
        })
    return (
        <div style={{width:'90%',margin:'0 auto'}}> 
       
            <div className="contianer center contri-section">
            <h4 style={{fontFamily: 'Abril Fatface'}}>Contributors</h4>
            <div className="row">
              {
                  contributors
              }
                
            </div>
            </div>
        </div>
    )
}
const mapStatetoProps=(state,ownProps)=>{
    
    return{
        users: state.firestore.ordered.users
    }
}


export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection:'users'}
    ])
)(Contributors)