import React from 'react';
import './Qualifications.css';

const Qualifications = () => {
  return (
    <>
        <div className='container qualifications'>
            <h1 className='qualificationsTiltle'>Qualifications</h1>
            <h5 className='smalltiltlequalifications'>My Personal Journey</h5>

            <div className='qualifications-container container'>
                <div className='qualifications-tabs'>
                    <div className='qualifications-button button--flex'>
                    <i class="fa-solid fa-graduation-cap qualifications-icon"></i>
                    Education
                    {/* <div className='small-line'></div> */}
                    </div>

                    <div className='qualifications-button button--flex'>
                    <i class="fa-solid fa-school qualifications-icon"></i>
                    Courses
                    {/* <div className='small-line'></div> */}
                    </div>
                </div>

                <div className='qualifications-sections'>

                    <div className='qualifications-content'>
                                {/* qualification data 1*/}
                            <div className='qualifications-data'>
                                <div>
                                    <h4 className='qualifications-title'>Computer Sciences <i class="fa-solid fa-building-columns icon-title"></i></h4>
                                    <span className='qualifications-subtitle'>Helwan - University</span>
                                    <div className='qualifications-calender'>
                                            <i class="fa-solid fa-calendar-days me-2"></i>
                                            2020 - 2024
                                    </div>
                                </div>
                                <div>
                                    <span className='qualifications-rounder'></span>
                                    <span className='qualifications-line'></span>
                                </div>
                            </div>

                                {/* qualification data 2*/}
                                <div className='qualifications-data'>
                                    <div></div>
                                <div>
                                    <span className='qualifications-rounder'></span>
                                    <span className='qualifications-line'></span>
                                </div>

                                <div>
                                    <h4 className='qualifications-title'>Web Development <i class="fa-solid fa-globe icon-title"></i></h4>
                                    <span className='qualifications-subtitle'>Udemy</span>  
                                    <div className='qualifications-calender'>
                                            <i class="fa-solid fa-calendar-days me-2"></i>
                                            2021 - 2022
                                    </div>
                                </div>

                            </div>

                                {/* qualification data 3 */}
                                <div className='qualifications-data'>
                                <div>
                                    <h4 className='qualifications-title'>React Basic <i class="fa-brands fa-react react-icon"></i></h4>
                                    <span className='qualifications-subtitle'>Coursera [Meta]</span>
                                    <div className='qualifications-calender'>
                                            <i class="fa-solid fa-calendar-days me-2"></i>
                                            2022 - 2023
                                    </div>
                                </div>
                                <div>
                                    <span className='qualifications-rounder'></span>
                                    <span className='qualifications-line'></span>
                                </div>
                            </div>


                              {/* qualification data 4 */}
                            <div className='qualifications-data'>
                                <div></div>
                                <div>
                                    <span className='qualifications-rounder'></span>
                                    {/* <span className='qualifications-line'></span> */}
                                </div>

                                <div>
                                    <h4 className='qualifications-title'>React Advanced <i class="fa-brands fa-react react-icon"></i></h4>
                                    <span className='qualifications-subtitle'>Coursera [meta]</span>
                                    <div className='qualifications-calender'>
                                            <i class="fa-solid fa-calendar-days me-2"></i>
                                            2022 - 2023
                                    </div>
                                </div>

                            </div>

                    </div>

                </div>

            </div>
        </div>
    </>
  );
}

export default Qualifications;
