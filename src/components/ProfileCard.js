import React, {useState} from 'react';
import image from "../assets/logo.svg";
import "./ProfileCard.css";

const ProfileCard = (props) => {
    let {username, hobby} = props
    const handleclick = () => {
        let newObject = {username: `Mr ${username}`, hobby: `My ${hobby}`}
        setState({...state, ...newObject})
    }


// TODO:-
// There are three levels of managing state in React:-
// i)   component level state management
// ii)  global level state management - Redox/context API
// iii) app level state management
//TODO
// Props: Used to pass data from mother component to child component
// State: Present condition (Data) of a component
// State Management: Creating, Retrieving, Updating data


    const [state, setState] = useState({username: username, hobby: hobby})

    return (
        <div className="profile-card">
            <img src={image} alt="profile-card" className="profile-card-avatar" />
            <div className="details-container">
                <div className="firstname-details">
                    <p>Name</p>
                    <h1>{state.username}</h1>
                </div>
                <div className="hobby-details">
                    <p>Hobby</p>
                    <h1>{state.hobby}</h1>
                </div>
            </div>
            <button onClick={handleclick} >Click Me</button>
        </div>
    )
}

export default ProfileCard

