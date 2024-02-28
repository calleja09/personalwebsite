import ErrorBg from '../assets/404.png';

export default function NotFound() {
return (    

<>
    <div className="h-full md:h-screen">
        <div className="mt-20">
                <p className='text-2xl font-bold text-center md:text-4xl'>That page doesn't exist!</p>
                <img src={ErrorBg} alt='error404' className='w-full mx-auto'/>
        </div>
    </div>
</>
)
}