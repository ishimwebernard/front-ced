import LogoMono from '../assets/logo_mono.png'


export default function UserDashBoard() {
    return (
        <div className="relative w-screen h-screen grid grid-rows-2">
            <div className="w-full bg-blue-600">
                <div className="w-full h-2/3 grid grid-rows-2 px-10">
        	        <div className="grid grid-cols-2 ">
                        <img src={LogoMono} alt="Primecs Education Logo" className='h-12 mt-4'/>
                        <div className="grid place-items-end px-6">
                            <button onClick={()=>{
                                window.location.href = "/"
                            }} className="bg-blue-500 text-white font-semibold p-2 rounded-md shadow-sm my-auto hover:bg-blue-700">
                                Log out
                            </button>
                        </div>
                    </div>
                    <div className=" flex space-x-4 text-gray-50 h-1/3 w-full">
                    <p className="border-b-2 border-gray-100 cursor-pointer">Dashboard</p>
                    <p className="text-gray-300">Profile</p>
                </div>
                </div>
                
            </div>
            <div className="w-full bg-gray-50">

            </div>
            <div className="absolute  bg-transparent top-1/4 h-2/3 w-full px-6">
                <div className="h-full w-full bg-white rounded-xl shadow-xl grid grid-cols-4 ">
                    <div className="border-r border-gray-100">
                        <p className="aria-normal font-semibold p-4">Enrolled Subjects</p>
                        <div className="grid grid-cols-10 place-items-center py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                            <div className="grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#16a34a">
  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
</svg>
                            </div>
                            <div className="col-span-9 px-2">
                                <p className="aria-normal font-semibold text-blue-600">Elements of Geotechnical Engineering</p>
                                <small className="leading-none text-gray-500 ">Get Exclusive education on soil, atterberg limits, water content and saturation of soil</small>
                            </div>
                        </div>
               
                   
                    </div>
                    <div className="border-r border-gray-100">
                        <p className="aria-normal font-semibold p-4">Learning Materials</p>
                        <div className="grid grid-cols-7 border-b border-gray-100 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
</svg>
<p className="col-span-4 aria-normal text-sm font-semibold text-gray-600">M.Neville Basics of RCD </p>
<button className="col-span-2 cursor-pointer text-blue-600">View</button>
                        </div>
                        <div className="grid grid-cols-7 border-b border-gray-100 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
</svg>
<p className="col-span-4 aria-normal text-sm font-semibold text-gray-600">Elements of Geotech </p>
<button className="col-span-2 cursor-pointer text-blue-600">View</button>
                        </div>
                    </div>
                    <div className="col-span-2 overflow-y-scroll">
                        <p className="aria-normal font-semibold p-4">Learning Schedule</p>
                        <div className="grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-gray-100 py-2 font-semibold text-gray-700">
                            <small>Date</small>
                            <small>TimeStamp </small>
                            <small>Subject</small>
                            <small>Instructor</small>
                        </div>
                        <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                        <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                        <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                        <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                        <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                        <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                        <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                        <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                          <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                          <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                          <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                          <div className="border-b border-gray-100 grid grid-cols-4 place-items-start aria-normal w-full px-4 bg-white py-2  text-gray-700">
                            <small>1/5/2022</small>
                            <small>1:00-3:00 EST </small>
                            <small>Concrete</small>
                            <small>Clinton the guy</small>
                        </div>
                    </div>

                </div>
                </div>
        </div>
    )
}