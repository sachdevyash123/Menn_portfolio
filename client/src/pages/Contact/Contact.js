import React, { useState } from 'react'
import axios from 'axios'
import "./Contact.css"
import { BsLinkedin,BsGithub,BsFacebook } from "react-icons/bs";
import { toast } from 'react-toastify';
import LightSpeed from "react-reveal/LightSpeed"
import Rotate from 'react-reveal/Rotate'
const Contact = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[message,setMessage]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!name || !email || !message){
            alert("All firld are required")
            return
        }
        debugger
        try {
            const res=await axios.post('http://localhost:5001/api/v1/portfolio/sendEmail',{name,email,message})
            setName('')
            setEmail('')
            setMessage('')
            toast.success("Message sent Successfully")
            console.log('Email send successfully',res.data)
        } catch (error) {
            console.error('Error sending message:',error)
        }
    }
  return (
    <>
    <div className='contact' id='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className="card1">
                        <div className='row-border-line'>
                            <LightSpeed>
                            <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg" alt="contact_pic" className='image' />
                            </LightSpeed>
                        </div>
                    </div>
                </div>
                <Rotate>
                <div className="col-md-6 col-lg-6">
                    <div className="card2 d-flex card border-0 px-4 py-5">
                    <div className="row">
                        <div className="row">
                        <h6>Contact With 
                            <BsLinkedin color='blue' size={24} className='ms-2'/>
                            <BsGithub color='black' size={24} className='ms-2'/>
                            <BsFacebook color='blue' size={24} className='ms-2'/>
                        </h6>
                        </div>
                    
                    <div className="row px-3 mb-4">
                        <div className="line"/>
                        <small className='or text-center'>OR</small>
                        <div className="line"/>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="row px-3">
                        <input type="text" name='name'value={name} placeholder='Enter your Name' className='mb-3' onChange={(e)=>setName(e.target.value)} />    
                    </div>
                    <div className="row px-3">
                        <input type="email" name='email' value={email} placeholder='Enter your Email' className='mb-3' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        // value={msg}
                        // onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                        <button type='submit' className='button'>SEND MESSAGE</button>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
                </Rotate>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact