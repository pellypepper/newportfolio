import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@mui/material/IconButton';


export default function Skills() {
    // Use React state to manage the open/close state of skills boxes
    const [openSkillsIndex, setOpenSkillsIndex] = React.useState(0);

    // Function to toggle the open/close state of a skills box
    const toggleSkills = (index) => {
        setOpenSkillsIndex(index === openSkillsIndex ? -1 : index);
    };

    // Array to hold your skills data (can be fetched from an API or static)
    const skillsData = [
        {
            title: 'Front End Developer',
            experience: 'More Than 1 Year',
            skills: [
                { name: 'HTML', percentage: 95, className: 'skills-html' },
                { name: 'CSS', percentage: 90, className: 'skills-css' },
                { name: 'JavaScript', percentage: 70, className: 'skills-js' },
                { name: 'React', percentage: 60, className: 'skills-react' },
            ],
        },
        {
            title: 'Designer',
            experience: 'More Than 2 Years',
            skills: [
                { name: 'Figma', percentage: 70, className: 'skills-figma' },
                { name: 'Corel Draw', percentage: 90, className: 'skills-corel' },
                { name: 'Photoshop', percentage: 50, className: 'skills-photo' },
            ],
        },
        {
            title: 'Back-End Developer',
            experience: 'More Than 3 Months',
            skills: [
                { name: 'Python', percentage: 30, className: 'skills-python' },
                { name: 'PHP', percentage: 10, className: 'skills-php' },
                { name: 'Node', percentage: 10, className: 'skills-node' },
            ],
        },
    ];

    return (
        <div className="skills-container">
            <div className="skills-header">
                <h1>Skills</h1>
                <span>Background Level</span>
            </div>
            <div className="skills-wrapper">
                <div className="skills-sub-wrapper">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className={`skills-box ${index === openSkillsIndex ? 'skills_open' : 'skills_close'}`}
                        >
                            <div className='skills-text-wrapper' onClick={() => toggleSkills(index)}>
                                <div className='skills-text'>
                                    <h5>{skill.title}</h5>
                                    <span>{skill.experience}</span>
                                </div>
                                <ArrowUpwardIcon className='skills-icon' />
                            </div>
                            <div className='skills-bar-container'>
                                {skill.skills.map((item, idx) => (
                                    <div className='skills-bar-wrapper' key={idx}>
                                        <div className='skill-bar-text'>
                                            <p>{item.name}</p>
                                            <p>{item.percentage}%</p>
                                        </div>
                                        <div className='skill-bar1'>
                                            <div className={`skill-bar ${item.className}`}>
                                                <div className='skill-bar-bg'></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className='skills-image-container'>
                <div class="blob">
                <div class="text-container">
        <span class="animated-text">Hit me up, To Assist with project</span>
        <span class="animated-text">Im here for you</span>
        <span class="animated-text">Thanks for visiting my page</span>
    </div>
                </div>
            </div> */}
        </div>
    );
}
