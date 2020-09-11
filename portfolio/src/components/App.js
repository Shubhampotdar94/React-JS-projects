import React, { Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.jpeg';
import Title from './Title';

class App extends Component{
    state = {displayBio : false};

    toggleDisplayBio = () =>    {
        this.setState({displayBio : !this.state.displayBio});
    }
    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello</h1>
                <p>My name is Shubham.</p>
                <Title /> 
                <p>I am always looking to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I live in Sangli, and code every day.</p>
                        <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                        <p>Besides coding, I also love photography and travelling!</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>) : (
                    <button onClick={this.toggleDisplayBio}>Read more</button>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;