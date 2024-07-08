import React, { useEffect, useRef } from 'react';

export default function Service() {
    const tabsRef = useRef(null);
    const tabContentsRef = useRef(null);

    useEffect(() => {
        const tabs = tabsRef.current.querySelectorAll('[data-target]');
        const tabContents = tabContentsRef.current.querySelectorAll('[data-content]');

        function toggleSkills(event) {
            const target = document.querySelector(event.currentTarget.dataset.target);

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('education-active');
            });
            target.classList.add('education-active');

            tabs.forEach(tab => {
                tab.classList.remove('education-active');
            });

            event.currentTarget.classList.add('education-active');
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', toggleSkills);
        });

        // Cleanup event listeners on unmount
        return () => {
            tabs.forEach(tab => {
                tab.removeEventListener('click', toggleSkills);
            });
        };
    }, []);

    return (
        <div className="service-container">
            <div className="service-header">
                <h1>Qualification</h1>
                <span>My Personal Journey</span>
            </div>

            <div className="service-wrapper" ref={tabsRef}>
                <div className="service-subwrapper">
                    <div className="service-subwrapper-container">
                        <div data-target="#education" className="education-active">
                            <h3>Education</h3>
                        </div>
                        <div data-target="#work">
                            <h3>Work</h3>
                        </div>
                    </div>
                </div>
                <div className="education-container" ref={tabContentsRef}>
                    <div className="education-wrapper education-active" data-content id="education">
                        <div className="education-text">
                            <h5>Computer Science</h5>
                            <p>Cotonou-University</p>
                            <span>2017-2021</span>
                        </div>
                        <div className="line-wrapper">
                            <div className="line-circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="line-wrapper">
                            <div className="line-circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="education-text">
                            <h5>Agric Extension</h5>
                            <p>Fed College Of Agric</p>
                            <span>2016-2018</span>
                        </div>
                        <div className="education-text">
                            <h5>Front-End Developer</h5>
                            <p>CourseEra</p>
                            <span>2022-2023</span>
                        </div>
                        <div className="line-wrapper">
                            <div className="line-circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="line-wrapper">
                            <div className="line-circle"></div>
                        </div>
                        <div className="education-text">
                            <h5>Agric Extension</h5>
                            <p>Fed College Of Agric</p>
                            <span>2016-2018</span>
                        </div>
                    </div>

                    <div className="education-wrapper" data-content id="work">
                        <div className="education-text">
                            <h5>Front-End Developer</h5>
                            <p>CourseEra</p>
                            <span>2022-2023</span>
                        </div>
                        <div className="line-wrapper">
                            <div className="line-circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="line-wrapper">
                            <div className="line-circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="education-text">
                            <h5>Agric Extension</h5>
                            <p>Fed College Of Agric</p>
                            <span>2016-2018</span>
                        </div>
                        <div className="education-text">
                            <h5>Front-End Developer</h5>
                            <p>CourseEra</p>
                            <span>2022-2023</span>
                        </div>
                        <div className="line-wrapper">
                            <div className="line-circle"></div>
                            <div className="line"></div>
                            <div className="line-circle"></div>
                        </div>
                        <div className="empty"></div>
                    </div>
                </div>
            
            </div>

            <div className='service-what'>
               <div className='what-container'>
                    <div className='what-wrapper'>
                        <div className='what-header'>
                            <h1> What I Do </h1>
                        </div>

                        <div className='what-box'>
                           <div className='what-text'>
                            <h2>Front-End</h2>
                            <p>As a JavaScript developer, i have experience in HTML% and CSS3 techniques working with JQuery or more advanced JavaScript MVC framework such as REACT</p>

                           </div>

                           <div className='what-text'>
                            <h2>UI/UX Designer</h2>
                            <p>As a JavaScript developer, i have experience in HTML% and CSS3 techniques working with JQuery or more advanced JavaScript MVC framework such as REACT</p>

                           </div>
                           <div className='what-text'>
                            <h2>Consultancy</h2>
                            <p>As a JavaScript developer, i have experience in HTML% and CSS3 techniques working with JQuery or more advanced JavaScript MVC framework such as REACT</p>

                           </div>
                        </div>

                    </div>

                </div>
               </div>
        </div>
    );
}
