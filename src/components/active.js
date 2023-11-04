import React, { useState, useEffect } from 'react'
import AdNav from './adNav'
import axios from 'axios'


const UserInfo = ({name, email, schedule}) => {
    return (
                  <div className="grid grid-cols-2  bg-white  border-l border-r border-t border-gray-200 mx-6 py-4">
                        <div className="flex justify-left my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="#6b7280">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>
<div className="my-auto">
    <p>{name}</p>
    <div className="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#6b7280">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg>
<p className="text-sm text-gray-500">{email}</p>
    </div>
</div>
                        </div>
                     <div className="grid place-items-end ">
                        <p className="my-auto mx-4 bg-gray-100 rounded-lg text-sm p-2">Following {schedule} schedule</p>
                     </div>
                    
                    </div>
        )
}

export default function Active() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const activeUsers = await axios({
                method: 'get',
                url: 'https://rich-guy-rambo.herokuapp.com/applicants/active'
            })
             let userGraphics = [];
            //console.log(activeUsers.data)
            for(let i=0;i<activeUsers.data.length;i++){
                console.log(i)
                userGraphics.push(
                        <UserInfo name={activeUsers.data[i].name} email={activeUsers.data[i].email} schedule="None" />
                    )
            }
            console.log(activeUsers.data.length)
                    setLoading(false)
                    setData(userGraphics)

           
        }

        fetchData()
    })


    return (
        <div>
        
           
            
            <div className="h-screen grid grid-cols-4">
            <div className="col-span-1 h-full blue-gradient">
              <AdNav />
            </div>

            <div className="col-span-3 bg-gray-100 h-screen overflow-y-croll overflow-x-hidden">
                <div className="p-6 bg-transparent">
                <p className="font-bold text-4xl text-gray-600">Active Users</p>
      
                </div>
                <div>
                  {
                    loading ? (
                        <svg width="100" height="100" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000">
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>
                            ):(
                                <div>
                                    {data}
                                </div>
                        )
                  }                  

                </div>
        </div>
          </div>
            </div>
    )
}
