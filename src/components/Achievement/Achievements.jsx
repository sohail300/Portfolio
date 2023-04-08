import react from 'react';
import './Achievements.css'

function Achievements(){
    return(
        <div id="achievement-container">
            <h2>Achievements</h2>
            <div id="achievment-btn-container">
            <button className='achievment-btn'>Experience</button>
            <button className='achievment-btn'>Open Source</button>
            <button className='achievment-btn'>Community Work</button>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
        </div>
    );
}

export default Achievements;