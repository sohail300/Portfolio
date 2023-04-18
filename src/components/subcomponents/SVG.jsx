import react from 'react';

function SVG(){
    return (
        <svg height="150" width="900" id="education">
            <circle cx='100' cy='50' r='40' fill="#ffffff"/>
            <text x="85" y="120" fill="white">10th</text>
            <text x="80" y="58" fill="black">2018</text>
  
            <line x1="140" y1="50" x2="475" y2="50" stroke-width="3" stroke="#ffffff" />
  
            <circle cx='475' cy='50' r='40' fill="#ffffff"/>
            <text x="460" y="120" fill="white">12th</text>
            <text x="453" y="58" fill="black">2020</text>
  
            <line x1="515" y1="50" x2="850" y2="50" stroke-width="3" stroke="#ffffff" />

            <circle cx='850' cy='50' r='40' fill="#ffffff"/>
            <text x="823" y="120" fill="white">B.Tech</text>
            <text class="present" x="819" y="58" fill="black">Present</text>
        </svg>
    );
}

export default SVG;