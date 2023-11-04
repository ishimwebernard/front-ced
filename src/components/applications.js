import React, { useEffect, useState} from 'react'
import axios from 'axios'
import AdNav from './adNav'

const TableRecord = ({fName, email, aoi, dateAppl, dataObj}) => {
    return (
         
             <tr className="bg-white border-b w-full hover:bg-gray-200 cursor-pointer" onClick={()=>{
               
                localStorage.setItem('fullinfo@primecs',JSON.stringify(dataObj));
                window.location.href = '/admindashboard/appreview'
             
             }}>

<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                 {fName}
             </td>
             <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 {email}
             </td>
             <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 {aoi}
             </td>
             <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 {dateAppl}
             </td>
           
          
             </tr>
           
     
    )
}
export default function Applications() {
 
  

    const WrapApplicantGraphics = () => {
        const [data, setWaitingForAdmission] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(()=>{
            const fetchData = async() =>{
                const applicants = await axios({
                    'method': 'get',
                   ' headers': { 'Content-Type': 'application/json'},
                    'url': 'http://localhost:5000/applicants/forAdmission',
        
                })
                setWaitingForAdmission(applicants.data)
                //console.log(data)
                setLoading(false)

                return applicants
            }
            fetchData()
            //alert('Finished')
        })
    let retval = [];
      try{
         console.log(data.length)
         for(let i=0; i<data.length;i++){
            retval.push(
<TableRecord dataObj={data[i]} fName={data[i].firstName} email={data[i].user_Email} aoi="Eng, Cons," dateAppl={data[i].dateSent}  />
             )
          }
    
      }catch(e){
            console.log(e)
      }

    
   return (
       <>
           {loading ? (<svg width="100" height="100" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000">
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
</svg>): retval}
       </>
   )
   }
    

    
    return (
        <div>
            <div className="h-screen grid grid-cols-4">
            <div className="col-span-1 h-full blue-gradient">
              <AdNav />
            </div>

            <div className="col-span-3 bg-gray-50 h-screen overflow-y-croll overflow-x-hidden">
                <div className="p-6 bg-white">
                <p className="font-bold text-4xl text-gray-600">Active Applications</p>
                </div>
                

   <div className="p-10">
   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden sm:rounded-lg shadow-md">
                <table class="min-w-full ">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Full Name
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Areas Of Interest
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Date Applied
                            </th>
                         
                        </tr>
                    </thead>
                    <tbody>

<WrapApplicantGraphics />

</tbody>
 
                </table>
 

            </div>
        </div>
    </div>
   </div>


            </div>
        </div>
        </div>
    )
}
