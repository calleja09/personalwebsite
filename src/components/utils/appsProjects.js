import { images } from '../../shared/importImages'
import { notAvailable } from '../utils/webProjects'

const MobileProjects = () => {
    return (
        <>
        {/* change cols-1 to cols-2 if there's a new project */}
        <div className="ms-auto grid grid-cols-1 select-none">
          <div className="mx-auto my-10 flex max-w-xs flex-col md:flex-wrap items-center rounded-xl border px-4 py-4 text-center md:max-w-xl md:flex-row md:items-start md:text-left">
            <div className="grid grid-cols-2 mx-auto">
              <img className="h-72 rounded-lg object-cover md:w-full" src={images.clinicam.clinicam1} alt="" />
              <img className="h-72 rounded-lg object-cover md:w-full" src={images.clinicam.clinicam2} alt="" />
            </div>
            <div className="my-4">
              <p className="text-xl select-none font-semibold leading-5 text-center text-gray-500 ms-2">CLINICAM</p>
              <p className="mb-4 text-sm font-semibold text-gray-600 text-center">(DECEMBER 2022)</p> 
              <div className="flex space-x-2 mb-2">
              <p className="text-sm font-medium text-left indent-4 text-gray-500">A mobile application that is designed to help students at Universidad de Manila's College of Health and Science in engaging in a new way of learning clinical instruments using their mobile phones. It is a capstone project that includes image tracking, object tracking, and 3d simulations of all clinical instruments.</p>
              </div>
              <ul className="flex flex-wrap">
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Unity</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Blender 3D</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Vuforia</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Adobe XD</div>
                </li>
              </ul>
              <ul className="flex flex-wrap justify-center">
                <a onClick={notAvailable} rel="noopener noreferrer">
                  <li className="mr-1.5 mt-4">
                    <button className="transition flex items-center rounded-full px-3 py-1 leading-8 text-sm text-gray-400 bg-indigo-200/40 hover:ease-in-out duration-700 hover:bg-indigo-200 hover:text-gray-700">
                      <span>Live Demo</span> &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                      </svg>
                      </button>
                  </li>
                  </a>
                <li className="mr-1.5 mt-4">
                  <a onClick={notAvailable} rel="noopener noreferrer">
                    <button className="transition flex items-center rounded-full px-3 py-1 leading-8 text-sm text-gray-400 bg-indigo-200/40 hover:ease-in-out duration-700 hover:bg-indigo-200 hover:text-gray-700">
                      <span>Code</span> &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clipRule="evenodd" />
                      </svg>

                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </>
    )
}
export default MobileProjects