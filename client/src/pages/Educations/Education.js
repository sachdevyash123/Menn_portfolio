import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import "./Education.css"
const Education = () => {
  return (
    <>
    <div className='education' id='education'>
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
    <hr/>
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - Present"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">BTech</h3>
    <h4 className="vertical-timeline-element-subtitle">LJ University,Ahmedabad</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020 - 2021"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">12th</h3>
    <h4 className="vertical-timeline-element-subtitle">Shraddha Vidya Mandir,Ahmedabad</h4>
  </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education