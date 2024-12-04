import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdDeveloperMode } from "react-icons/md";
import "./WorkExp.css"
const WorkExp = () => {
  return (
    <>
    <div className='exp' id='workexp'>
        <div className="container work-exp">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work Experience</h2>
        <hr/>
        <VerticalTimeline lineColor='#1e1e2c'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Feb-2024 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<MdDeveloperMode/>}
  >
    <h3 className="vertical-timeline-element-title">Software Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">BrainSquare Technologies,Ahmedabad</h4>
    <p>
      Frontend Development, Backend Development, API's, UI/UX design
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </div>
    </>
  )
}

export default WorkExp