import React from 'react'
import ContributorCard from './ContributorCard'
const Contributors = () => {
    
    return (
        <div style={{width:'90%',margin:'0 auto'}}> 
       
            <div className="contianer center" style={{width:'60%',margin:'0 auto'}}>
            <h4 style={{fontFamily: 'Abril Fatface'}}>Contributors</h4>
            <div className="row">
                <div className="col align-center">
                <ContributorCard/>
                </div>
                <div className="col align-center">
                <ContributorCard/>
                </div>
                <div className="col align-center">
                <ContributorCard/>
                </div>
                <div className="col align-center">
                <ContributorCard/>
                </div>
                <div className="col align-center">
                <ContributorCard/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contributors
