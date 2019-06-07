import React from 'react'

const About = (props) => {
    console.log(props);
    const profileImg = "http://placehold.jp/200x200.png";
    return (
        <div>
            <div className="container" >
                <div className="card yo-card about-card center" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    <div className="container">
                    <img  className="profile-image" src={profileImg} alt="profile-img"/>
                        <div className="card-title">Saran</div>
                        <p style={{width:'50%$'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit, illo aliquam facere a sapiente, laborum adipisci amet atque nisi dignissimos? Optio, magnam possimus ipsam beatae dolores culpa consequuntur totam.</p>
                    </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
