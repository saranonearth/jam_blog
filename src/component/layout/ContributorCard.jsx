import React from 'react'

const ContributorCard = ({user}) => {
    console.log(user)
    
    return (
        <div className="center">
            <div className="card z-depth-0">
                    <div className="card-contents">
                    
                    <img style={{marginBottom:'0'}} className="profile-image" src={user.profileImage} alt="contri-img"/>
                    <h6 className="center">{user.username}</h6>
                    </div>
                    
                </div>
            </div>
    
    )
}

export default ContributorCard
