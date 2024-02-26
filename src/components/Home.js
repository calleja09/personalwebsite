import profile from "../assets/profile.png";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import WebProjects from "./utils/webProjects";
import MobileProjects from "./utils/appsProjects";
import ArtsProjects from "./utils/artsProjects";

function Main(props) {

    let toastDisplay = useRef();
    let toastText = useRef();
    
    const form = useRef();

    
    const closeToast = () => {
        toastDisplay.current.style.display = "none";
        toastDisplay.current.classList.remove('text-bg-primary');
        toastDisplay.current.classList.remove('text-bg-danger');
    }


    const sendEmail = (e) => {
        e.preventDefault();
        // TODO setTimeout to close the toast
        emailjs.sendForm('service_elsoc79', 'template_t7m7y36', form.current, '4IVvFjEDxf3F6XgRA')
        .then((result) => {
            console.log(result.text);
            toastDisplay.current.style.display = "block";   
            toastDisplay.current.classList.add("bg-green-500");
            toastText.current.textContent = 'Your message was sent successfully.'
        }, (error) => {
            console.log(error.text);
            toastDisplay.current.style.display = "block";   
            toastDisplay.current.classList.add("bg-red-500");
            toastText.current.textContent = 'Your message was unable to send.'
        });
        e.target.reset();

        setTimeout(() => {
            closeToast();
        }, 5000);
    }

    const [activeProj, setActiveProj] = useState('web');
    return (
        <>

            <section id="home" className="">
                <div className="" id="home-page">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left */}
                        <div className="ps-4 my-auto">
                            {/* Message */}
                            <div>
                                <p className="font-light text-lg lg:text-3xl">Hello, my name is</p>
                                <p className="font-extrabold text-4xl lg:text-7xl bg-gradient-to-r from-emerald-100 from-0% to-indigo-900 to-100% bg-clip-text text-transparent pb-2">
                                    {props.fMName}{props.lName}
                                </p>
                                <p className="text-lg-start lead mb-0">
                                The web is full of possibilities. Are you a visionary thinker and builder too? Let's join forces and turn our ideas into reality.
                                </p>
                            </div>
                            {/* <div className="dl-resume mt-3">
                                <a
                                    href={resume}
                                    className="btn btn-primary align-middle"
                                    download="Calleja_Arvin-Resume"
                                >
                                    <i className="fa-solid fa-file-arrow-down"></i>&nbsp;Resume
                                </a>
                            </div> */}
                        </div>
                        {/* Right */}
                        <div className="my-auto">
                                <img className="h-auto max-w-full drop-shadow-neon" alt="profile" src={profile} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="">
                <div className="p-4">
                    <h1 className="text-center py-4 font-bold uppercase bg-gradient-to-r from-emerald-100 from-0% to-indigo-900 to-100% bg-clip-text text-transparent text-lg lg:text-3xl">portfolio</h1>
                    <p className="indent-8 text-wrap">
                    Explore my recent work in Web Development, Mobile Apps, and Graphic Arts. I'm passionate about crafting digital experiences and visual narratives that leave a lasting impression. Let's shape the future together, one pixel at a time.
                    </p>
                </div>
                {/* tabs button */}
                <div className="bg-inherit p-4">
                    <nav className="flex flex-row justify-center">
                        <button 
                            onClick={ () => setActiveProj('web')} 
                            className={`py-2 px-3 block hover:text-blue-500 focus:outline-none border-b-2 
                            ${activeProj === 'web' ? 'border-blue-500 font-medium text-blue-500' : 'border-transparent text-gray-600'}`}>
                            <i className= 'bx bx-desktop'></i> <span>Web</span> 
                        </button>

                        <button 
                            onClick={ () => setActiveProj('apps')} 
                            className={` py-2 px-3 block hover:text-blue-500 focus:outline-none border-b-2
                            ${activeProj === 'apps' ? 'border-blue-500 font-medium text-blue-500' : 'border-transparent text-gray-600'}`}>
                        <i className='bx bx-mobile-alt'></i> <span>Apps</span> </button>

                        <button 
                            onClick={ () => setActiveProj('arts')} 
                            className={`py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2
                            ${activeProj === 'arts' ? 'border-blue-500 font-medium text-blue-500' : 'border-transparent text-gray-600'}`}>
                        <i className='bx bx-pen'></i> <span>Arts</span> 
                        </button>
                    </nav>
                </div>
                {/* Projects */}
                <div>
                    {activeProj === 'web' && (
                        <div className="items-center" id="web">
                            <WebProjects />
                        </div>
                    )}
                    {activeProj === 'apps' && (
                        <div className="container" id="web">
                            <MobileProjects />
                        </div>
                    )}
                    {activeProj === 'arts' && (
                        <div className="container" id="web">
                            <ArtsProjects />
                        </div>
                    )}
                </div>
            </section>

            <section id="about" className="">
                <div className="p-4">
                    <h1 className="text-center py-4 font-bold uppercase bg-gradient-to-r from-emerald-100 from-0% to-indigo-900 to-100% bg-clip-text text-transparent text-lg lg:text-3xl">about</h1>
                    <div className="text-slate-400 mx-auto my-10 flex max-w-xs flex-col md:flex-wrap items-center rounded-xl border p-4 md:max-w-7xl md:flex-row md:items-start text-left">
                        <p className="leading-2 mb-4">
                            Hey there! I'm Arvin, a recent graduate delving deep into the realm of full-stack web development. It's a pleasure to connect with you and share my passion for crafting immersive web experiences.
                        </p>
                        <p className="leading-2 mb-4">
                            My journey began at Universidad De Manila, where I earned my Bachelor’s degree in Information Technology. Since then, I've been on a relentless pursuit of knowledge and growth. I'm proud to say that I've successfully completed a comprehensive Full Stack Web Development course on Udemy, where I solidified my skills in HTML, CSS, Python, Django, React, JavaScript, and various libraries and frameworks.
                        </p>
                        <p className="leading-2 mb-4">
                            Currently, I'm immersing myself in the fascinating world of data structures and algorithms through another engaging Udemy course. I firmly believe that understanding these fundamental concepts is crucial for building efficient and scalable software solutions.
                        </p>
                        <p className="leading-2 mb-4">
                            Thank you for taking the time to explore my digital space. Let's join forces, write some code, and unlock endless possibilities together!
                        </p>
                    </div>
                </div>
            </section>
            <section id="contact" className="">
                <div className="p-4">
                    <h1 className="text-center py-2 font-bold uppercase bg-gradient-to-r from-emerald-100 from-0% to-indigo-900 to-100% bg-clip-text text-transparent text-lg lg:text-2xl">Have question, project ideas, or just want to say hello?</h1>
                    <p className="text-wrap text-center">I'd love to hear from you! You can reach out through the contact form  or connect with me on social media.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-4 md:my-auto md:ml-4">
                        <p className="font-semibold text-xl">Connect with me on:</p>
                        <ul className="flex flex-wrap ml-4 mt-4 justify-center md:justify-normal">
                            <a href="https://discord.com/users/arvin.09">
                                <li className="mr-8 my-2">
                                    <div className="flex items-center rounded-full bg-indigo-400/30 px-2 py-1 leading-5 text-4xl text-gray-400 duration-300 hover:bg-indigo-400/80 hover:text-gray-200"><i class='bx bxl-discord-alt' ></i></div>
                                </li>
                            </a>
                            <a href="https://github.com/calleja09" target="_blank" rel="noopener noreferrer">
                                <li className="mr-8 my-2">
                                    <div className="flex items-center rounded-full bg-indigo-400/30 px-2 py-1 leading-5 text-4xl text-gray-400 duration-300 hover:bg-indigo-400/80 hover:text-gray-200"><i className='bx bxl-github'></i></div>
                                </li>
                            </a>
                            <a href="https://www.linkedin.com/in/arvin-calleja-578782250/" target="_blank" rel="noopener noreferrer">
                                <li className="mr-8 my-2">
                                    <div className="flex items-center rounded-full bg-indigo-400/30 px-2 py-1 leading-5 text-4xl text-gray-400 duration-300 hover:bg-indigo-400/80 hover:text-gray-200"><i className='bx bxl-linkedin-square'></i></div>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="p-4">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" className="h-10 border mt-1 rounded px-4 w-full bg-inherit" />
                                    </div>
                                    <div className="md:col-span-5">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" name="user_email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-inherit" required/>
                                    </div>
                                    <div className="md:col-span-5">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" name="subject" id="subject" className="h-10 border mt-1 rounded px-4 w-full bg-inherit"/>
                                    </div>
                                    <div className="md:col-span-5">
                                        <label htmlFor="Message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="5" className="border mt-1 rounded p-4 w-full bg-inherit resize-none"></textarea>
                                    </div>
                                    <div className="md:col-span-5 text-left">
                                        <div className="lg:inline-flex items-start">
                                        <button type="submit" className="bg-indigo-300/85 py-2 px-4 font-semibold rounded w-full mt-1"><i className="fa-solid fa-paper-plane"></i>  Submit</button>
                                        </div>
                                    <div className="md:col-span-5 text-left">
                                    <p className="font-xs font-thin w-full indent-8 mt-2">I value your privacy. Any information you share will only be used to respond to your inquiry. Your data is respected and never shared without consent.</p>
                                    </div>
                                    </div>
                                </div>

                            </div>
                            <div className="hidden fixed text-gray-800 bottom-0 right-0 p-3 border-0 rounded-l-lg shadow-lg " role="alert" aria-live="assertive" aria-atomic="true" ref={toastDisplay}>
                                <div className="flex">
                                    <div className="toast-body p-3" ref={toastText}>
                                        {/* Toast Message */}
                                    </div>
                                    <button type="button" className="ml-2 p-2 rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400" data-dismiss="toast" aria-label="Close" onClick={closeToast}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
{/*

            <section id="about" className="h-dvh">
                <div className="container-fluid min-vh-100">
                    <div className="row">
                        <div className="col-lg-12 mt-5">
                            <h1 className="display-1 title">About me</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rounded col-lg-12 about-container p-5 my-5 mx-auto">
                            <p className="lh-base">
                                Hi! I'm Arvin, a fresh grad and aspiring full-stack web developer with an intermediate level of proficiency in HTML, CSS, and JS libraries and frameworks. I’m excited to share my passion for web development with you.
                            </p>
                            <p className="lh-base">
                                I earned my Bachelor’s degree in Information Technology from Universidad De Manila. I still want to improve my skills that is why I’m taking online courses in Udemy. Currently, I’m taking a course of “Full Stack Web Development” and “Data Structures + Algorithms”.  
                            </p>
                            <p className="lh-base">
                                Thank you for taking time to know me and visiting my page. Let’s create, code, and innovate!
                            </p>
                            <div className="row">
                                <div className="col-lg-12 d-flex">
                                    <img src={IdPic} alt="ID"  className="rounded-circle id-pic img-fluid"/>
                                    <p className="h5 mb-0 pt-2 ms-2">{props.fMName} {props.lName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container-fluid min-vh-100">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <p className="fs-3 fw-semibold lead">Connect with me on:</p>
                            <div className="col mb-5">
                                <a href="https://github.com/calleja09" target="_blank" rel="noreferrer" className="soc-med">
                                    <i className="fa-brands fa-github fs-1 ms-5"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/arvin-calleja-578782250/" target="_blank" rel="noreferrer" className="soc-med">
                                    <i className="fa-brands fa-linkedin-in fs-1 ms-5"></i>
                                </a>
                                <a href="https://www.facebook.com/callejaarvin" target="_blank" rel="noreferrer" className="soc-med">
                                    <i className="fa-brands fa-facebook fs-1 ms-5"></i>
                                </a>
                            </div>
                            <p className="fs-6 fw-lighter">Your privacy is important to me. Any information you provide will be used solely for the purpose of responding to your inquiry or message. I respect your data and will never share it with third parties without your consent.</p>
                        </div>  
                        <div className="col-lg-6 my-5">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-floating mb-4">
                                    <input type="text" className="form-control" id="name" name="user_name" placeholder="Full Name"/>
                                    <label className="form-label" htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="email" className="form-control" id="email" name="user_email" placeholder="name@example.com" required/>
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject"/>
                                    <label className="form-label" htmlFor="subject">Subject (Optional)</label>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" id="message" name="message" placeholder="Message"/>
                                    <label className="form-label" htmlFor="message">Message</label>
                                </div>
                                <div className="col btn-toast">
                                    <button type="submit" className="btn btn-primary btn-lg mt-3">
                                        <i className="fa-solid fa-paper-plane"></i> 
                                        &nbsp;Send Message
                                    </button>

                                    <div className="toast position-fixed bottom-0 end-0 p-3 border-0 " role="alert" aria-live="assertive" aria-atomic="true" ref={toastDisplay}>
                                    <div className="d-flex">
                                        <div className="toast-body" ref={toastText}>
                                        </div>
                                        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={closeToast}></button>
                                    </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section> */}
        </>
    );
}

export default Main;
