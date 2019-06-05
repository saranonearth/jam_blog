import React from 'react'

const About = (props) => {
    console.log(props);
    const profileImg = "http://placehold.jp/200x200.png";
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-contents">
                        <img src={profileImg} alt="profile-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
