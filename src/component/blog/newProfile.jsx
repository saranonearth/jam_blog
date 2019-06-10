import React, { Component } from 'react'
import firebase from 'firebase'

export class newProfile extends Component {
    
    handleChange=(event)=>{
        const uid = 'SDLEDDC5514552';
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref();
        const spaceRef = storageRef.child(`profileImg/${uid}`);

        spaceRef.put(file).then(snapshot=>{
            console.log('uploaded')
        })
        }


        

        handleClick=(event)=>{
         const spaceRef = firebase.storage().ref().child('profileImg/SDLEDDC5514552');
         spaceRef.getDownloadURL().then(url=>{
             console.log(url);
         }).catch(err=>{
             console.log(err)
         })
        }
    render() {
        

        return (
            <div>
                <input type="file"
                    name="proFile"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>GET</button>
            </div>
        )
    }
}

export default newProfile
