import React from 'react'
import {Link} from 'react-router-dom'
import LogoMono from '../assets/logo_mono.png'
const NavElement = ({caption, route}) => {
    return (
      <Link to={route}>
       <div className="block px-4 py-2  w-full rounded-t-lg bg-transparent text-white cursor-pointer hover:bg-blue-800">
        {caption}
    </div>
      </Link>
           
      
    )
}
export default function AdNav() {
    return (
        <div>
            <div className="justify-center items-center">
                
            <img src={LogoMono} className="mt-5 justify-center border-none bg-transparent ml-3 h-20 col-span-6" />
          
            </div>
            <div className="mt-5"></div>
             <NavElement caption="Home" route="/admindashboard" />
                <NavElement caption="Applications" route="/admindashboard/applications" />
                <NavElement caption="Create Schedules" route="/admindashboard/schedules" />
                <NavElement caption="Active Users" route="/admindashboard/activeusers" />

        </div>
    )
}
