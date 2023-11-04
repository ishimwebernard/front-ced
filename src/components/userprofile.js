import LogoMono from '../assets/logo_mono.png'


export default function UserDashBoard() {
    return (
        <div className="relative w-screen h-screen grid grid-rows-2">
            <div className="w-full bg-blue-600">
                <div className="w-full h-2/3 grid grid-rows-2 px-10">
        	        <div className="grid grid-cols-2 ">
                        <img src={LogoMono} alt="Primecs Education Logo" className='h-12 mt-4'/>
                        <div className="grid place-items-end px-6">
                            <button className="bg-blue-500 text-white font-semibold p-2 rounded-md shadow-sm my-auto hover:bg-blue-700">
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
                <div className="h-full w-full bg-white rounded-xl shadow-xl">

                </div>
                </div>
        </div>
    )
}