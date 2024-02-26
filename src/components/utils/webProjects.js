import { images } from "../../shared/importImages"

export const notAvailable = e => {
  alert("Sorry, the page you are trying to access is currently undergoing maintenance or deployment updates. Please check back shortly. Thank you for your patience.")
}

const WebProjects = () => {
    return (
      <>
        <div className="ms-auto grid grid-cols-1 md:grid-cols-2 select-none">
          <div className="mx-auto my-10 flex max-w-xs flex-col md:flex-wrap items-center rounded-xl border px-4 py-4 text-center md:max-w-xl md:flex-row md:items-start md:text-left">
            <div className="">
              <img className="h-auto rounded-lg object-cover md:w-full" src={images.gab.gab1} alt="" />
            </div>
            <div className="my-4">
              <p className="text-xl select-none font-semibold leading-5 text-center text-gray-500 ms-2">GAMES AND AMUSEMENTS BOARD ACCOUNTING SYSTEM</p>
              <p className="mb-4 text-sm font-semibold text-gray-600 text-center">(JULY 2023)</p> 
              <div className="flex space-x-2 mb-2">
              <p className="text-sm font-medium text-left indent-4 text-gray-500">A web-based application that lets employees or users submit journal entry vouchers and petty cash. Petty cash may be created, modified, printed, and searched for on the website. Journal Entry Vouchers can also be created and printed.</p>
              </div>
              <ul className="flex flex-wrap">
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">HTML & CSS</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Bootstrap</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Node.js</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Express.js</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Embedded JavaScript</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">JavaScript</div>
                </li>
                
              </ul>
              <ul className="flex flex-wrap justify-center">
                <a onClick={notAvailable} rel="noopener noreferrer">
                  <li className="mr-1.5 mt-4">
                    <button className="transition flex items-center rounded-full px-3 py-1 leading-8 text-sm text-gray-400 bg-indigo-200/40 hover:ease-in-out duration-700 hover:bg-indigo-200 hover:text-gray-700">
                      <span>Live Demo</span> &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                      </svg>
                      </button>
                  </li>
                  </a>
                <li className="mr-1.5 mt-4">
                  <a href="https://github.com/calleja09/GAB-Accounting-System" target="_blank" rel="noopener noreferrer">
                    <button className="transition flex items-center rounded-full px-3 py-1 leading-8 text-sm text-gray-400 bg-indigo-200/40 hover:ease-in-out duration-700 hover:bg-indigo-200 hover:text-gray-700">
                      <span>Code</span> &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clip-rule="evenodd" />
                      </svg>

                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto my-10 flex max-w-xs flex-col md:flex-wrap items-center rounded-xl border px-4 py-4 text-center md:max-w-xl md:flex-row md:items-start md:text-left">
            <div className="">
              <img className="h-auto rounded-lg object-cover md:w-full" src={images.django.django1} alt="" />
            </div>
            <div className="my-4">
              <p className="text-xl select-none font-semibold leading-5 text-center text-gray-500 ms-2">T.I.L. (Today I Learned)</p>
              <p className="mb-4 text-sm font-semibold text-gray-600 text-center">(FEBRUARY 2024)</p> 
              <div className="flex mb-2">
              <p className="text-sm font-medium text-left indent-4 text-gray-500">A social media web application built with Django, this project enables users to post updates, follow others, and customize their profiles. Developed as part of a Django bootcamp on Udemy, the app showcases essential features like user authentication, posting functionality, follow system, and profile editing. With a clean interface and seamless user experience, it highlights proficiency in Django development and creating dynamic web applications.</p>
              </div>
              <ul className="flex flex-wrap">
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">HTML & CSS</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Python</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">JavaScript</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">Tailwind CSS</div>
                </li>
                <li className="mr-1.5 my-2">
                  <div className="flex items-center rounded-full bg-indigo-400/30 px-3 py-1 leading-5 text-xs text-gray-400">PostgreSQL</div>
                </li>
                
              </ul>
              <ul className="flex flex-wrap justify-center">
                {/* TODO add link of this project */}
                <a href="https://arvincalleja-django.up.railway.app/" target="_blank" rel="noopener noreferrer">
                  <li className="mr-1.5 mt-4">
                    <button className="transition flex items-center rounded-full px-3 py-1 leading-8 text-sm text-gray-400 bg-indigo-200/40 hover:ease-in-out duration-700 hover:bg-indigo-200 hover:text-gray-700">
                      <span>Live Demo</span> &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                      </svg>
                      </button>
                  </li>
                  </a>
                <li className="mr-1.5 mt-4">
                  {/* TODO add link to this project */}
                  <a href="https://github.com/calleja09/django-201" target="_blank" rel="noopener noreferrer">
                    <button className="transition flex items-center rounded-full px-3 py-1 leading-8 text-sm text-gray-400 bg-indigo-200/40 hover:ease-in-out duration-700 hover:bg-indigo-200 hover:text-gray-700">
                      <span>Code</span> &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clip-rule="evenodd" />
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
export default WebProjects