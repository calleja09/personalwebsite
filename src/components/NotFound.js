import ErrorBg from '../assets/404.png';

export default function NotFound() {
return (    

<>
    <div className="container-fluid error">
        <div className="row align-items-center min-vh-100 mt-5">
            <div className="col-lg-6">
                <p className='display-1 fw-bolder text-start'>That page doesn't exist!</p>
            </div>
            <div className="col-lg-6">
                <img src={ErrorBg} alt='error404' className='img-fluid mx-auto'/>
            </div>
        </div>
    </div>
</>
)
}