import React from 'react';
// import MyButton from './components/MyButton';
import "./MyApp.css"
import ProfileCard from './components/ProfileCard';

const MyApp = () => {
    return (
        <div className="myapp-container">
            {/*<h1>My App</h1>*/}
                {/*<MyButton buttonName="Tolu" color="white" background="green"/>*/}
                {/*<MyButton buttonName="Lotachi"color="black" background="yellow"/>*/}
                {/*<MyButton buttonName="Adeola" color="white" background="blue"/>*/}
                <ProfileCard username="Teejay" hobby="Working" />
                <ProfileCard username="Jeremiah" hobby="Drumming" />
        </div>
    )
}

export default MyApp
