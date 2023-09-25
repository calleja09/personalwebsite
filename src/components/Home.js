import "../svg.css";
import resume from "../assets/Calleja Arvin T.pdf";
import profile from "../assets/profile.png";
import gabProject1 from "../assets/project/gabProject/gab1.png";
import gabProject2 from "../assets/project/gabProject/gab2.png";
import gabProject3 from "../assets/project/gabProject/gab3.png";
import clinicam1 from "../assets/project/clinicam/clinicam1.jpg";
import clinicam2 from "../assets/project/clinicam/clinicam2.jpg";
import clinicam3 from "../assets/project/clinicam/clinicam3.jpg";
import clinicam4 from "../assets/project/clinicam/clinicam4.jpg";
import clinicam5 from "../assets/project/clinicam/clinicam5.jpg";
import clinicam6 from "../assets/project/clinicam/clinicam6.jpg";
import clinicam7 from "../assets/project/clinicam/clinicam7.jpg";
import clinicam8 from "../assets/project/clinicam/clinicam8.jpg";
import IdPic from "../assets/idPic.png";
import TopSvg from "../assets/svgtop";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Main(props) {

    let toastDisplay = useRef();
    let toastText = useRef();
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        // TODO setTimeout to close the toast
        emailjs.sendForm('service_elsoc79', 'template_t7m7y36', form.current, '4IVvFjEDxf3F6XgRA')
        .then((result) => {
            console.log(result.text);
            toastDisplay.current.style.display = "block";   
            toastDisplay.current.className += " text-bg-primary";
            toastText.current.textContent = 'Your message was sent successfully.'
        }, (error) => {
            console.log(error.text);
            toastDisplay.current.style.display = "block";   
            toastDisplay.current.className += " text-bg-danger";
            toastText.current.textContent = 'Your message was unable to send.'
        });
        e.target.reset();
    }

    const closeToast = () => {
        toastDisplay.current.style.display = "none";
        toastDisplay.current.classList.remove('text-bg-primary');
        toastDisplay.current.classList.remove('text-bg-danger');

    }

    return (
        <>
            <section id="home" className="mt-5">
                <div className="container-fluid" id="home-page">
                    <div className="row">
                        {/* Left */}
                        <div className="col-lg-6 my-auto pe-0 ps-3">
                            <div className="message">
                                <p className="text-lg-start lead mb-0">Hello! I’m</p>
                                <p className="text-lg-start display-1 name mb-0">
                                    {props.fMName}
                                </p>
                                <p className="text-lg-start display-1 name lname mb-0">
                                    {props.lName}
                                </p>
                                <p className="text-lg-start lead mb-0">
                                    Let's connect and build something incredible together. I'm
                                    ready to code, learn, and make the web a better place.
                                </p>
                            </div>
                            <div className="dl-resume mt-3">
                                <a
                                    href={resume}
                                    className="btn btn-primary align-middle"
                                    download="Calleja_Arvin-Resume"
                                >
                                    <i className="fa-solid fa-file-arrow-down"></i>&nbsp;Resume
                                </a>
                            </div>
                        </div>
                        {/* Right */}
                        <div className="col-lg-6 profile my-auto">
                            <img className="img-fluid" alt="profile" src={profile} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio">
                <TopSvg />
                <div className="container min-vh-100">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className=" display-1 title">portfolio</h1>
                            <p className="text-center ">
                                Explore my recent work in Web Development, Mobile App.
                                This is where you'll discover a display of my enthusiasm,
                                expertise, and unwavering commitment to shaping digital
                                experiences and crafting visual narratives.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-12 rounded project-container">
                            <div className="row">
                            <div className="col-lg-6 p-5 portfolio-image">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src={gabProject1} className="d-block rounded shadow w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={gabProject2} className="d-block rounded shadow w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={gabProject3} className="d-block rounded shadow w-100" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            </div>
                            <div className="col-lg-6 p-5 project-description">
                                <h2 className="fw-bold mb-3 text-uppercase">Games and Amusements Board Accounting System (JULY 2023)</h2>
                                    <p className="lead"> A web application that enables employees or users to enter petty cash and journal entry vouchers. The website allows you to search for, create, modify, and print petty cash vouchers.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 rounded project-container mb-5">
                            <div className="row">
                            <div className="col-lg-6 p-5 portfolio-image">
                            <div id="carousel2" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src={clinicam1} className="clinicam d-block mx-auto rounded shadow w-35" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={clinicam2} className="clinicam d-block mx-auto rounded shadow w-35" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={clinicam3} className="clinicam d-block mx-auto rounded shadow w-35" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={clinicam4} className="clinicam d-block mx-auto rounded shadow w-35" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={clinicam5} className="clinicam d-block mx-auto rounded shadow w-35" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={clinicam6} className="clinicam d-block mx-auto rounded shadow w-35" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={clinicam7} className="clinicam d-block mx-auto rounded shadow w-35" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={clinicam8} className="clinicam d-block mx-auto rounded shadow w-35" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            </div>
                            <div className="col-lg-6 p-5 project-description">
                                <h2 className="fw-bold text-uppercase">Clinicam (DECEMBER 2022)</h2>
                                    <p className="lead">A mobile application that is designed to help students at Universidad de Manila's College of Health and Science in engaging in a new way of learning clinical instruments using their mobile phones. It is a capstone project that includes image tracking, object tracking, and 3d simulations of all clinical instruments.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
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
                        <div className="col-lg-12 mt-5">
                            <h1 className="display-1 title">contact</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <p className="fs-1 fw-bolder mb-5">Have question, project ideas, or just want to say hello?</p>
                            <p className="lead mt-5">
                                I'd love to hear from you! You can reach out through the contact form  or connect with me on social media.
                            </p>
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
            </section>
        </>
    );
}

export default Main;
