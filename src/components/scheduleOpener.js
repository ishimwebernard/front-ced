import react, { useState } from 'react'
import AdNav from './adNav'
import Tabs from './tabs'

import axios from 'axios'

const schedule = JSON.parse(localStorage.getItem('schedule'))

async function fetchUsersForSchedule() {
	const activeUsers = await axios({
		method: 'GET',
		url: 'https://rich-guy-rambo.herokuapp.com/applicants/active'
	});
	console.log(activeUsers)
	return activeUsers
}

function AddParticipant() {
	const [loading, setLoading] = useState(false)

	return (
		<div className="relative bg-white border-2 border-gray-100  py-4 rounded-xl ">

		<div className={loading ? "absolute  w-full h-full top-0 bg-opacity-70 bg-white grid place-items-center":"hidden"}>
					<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#374151">
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
		</div>

			<div className="grid grid-cols-5 space-x-8 px-12">
				<input type="text" className="col-span-4 rounded-lg border-1 border-blue-700" placeholder="Search User by Email"/>
				<button className="bg-blue-700 text-white rounded-lg px-4 py-2" onClick={async()=>{await fetchUsersForSchedule()}}>Search</button>
			</div>
			<div className="px-12">
				<div className="grid grid-cols-5 place-items-center mt-4">
				<small className="text-gray-400 w-full text-left">AVAILABLE USERS </small>
				<div className="border-t-2 border-gray-300 col-span-4 w-full">
				</div>
				</div>
			<div className="grid grid-cols-5 space-x-8 place-items-center">
				<div className="col-span-4 grid grid-cols-2 text-sm text-gray-600" >
					<p className="text-left w-full">MINANI Calabasas</p>
					<p className="text-right w-full">minacalabasas@gmail.com</p>
				</div>
				<button className="bg-blue-700 text-white rounded-lg px-4 py-2 text-sm">Add</button>
			</div>
			</div>

		</div>
		)
}
export default function ScheduleOpener(){
	const timesElements = [];
	const participants = [];
	schedule.participants.map((participant) => {
		participants.push(
			<div  className="grid grid-cols-2 space-x-2 px-2 py-2" >
             		<div className="grid items-center">
             			<p className="text-gray-500">ISHIMWE Bernard</p>
             		</div>
             		<div className="grid grid-cols-3 items-center">
             			<p className="text-gray-500 col-span-2">{participant}</p>
             			   <div className="cursor-pointer hover:opacity-90">
                  <button type="button" class="text-white w-full bg-blue-default hover:bg-blue-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Allocate</button>

       </div>
             		</div>
             	</div>)
	})
	schedule.times.map((time)=>{
		timesElements.push(
					<div  className="grid grid-cols-4 space-x-2 px-2 py-2" >
             		<p className="text-gray-500">{time.date}</p>
             		<p className="text-gray-500">{time.timebegin}</p>
             		<p className="text-gray-500">{time.subject}</p>
             		<p className="text-gray-500">{time.instructor}</p>



             		


             	</div>
			)
	})
	return (
		    <div className="h-screen grid grid-cols-4">
            <div className="col-span-1 h-full blue-gradient">
               <AdNav />
            </div>
             <div className="col-span-3 bg-gray-50 ">

             <Tabs elements={[{text: 'Timetable', index: 0}, {text: 'Participants', index: 1}]} contentTabs={[
             	{
             		jsx: (
             		<div>
             		<div  className="grid grid-cols-4 space-x-2 px-2 py-2" >
             		<p className="text-gray-500">DATE</p>
             		<p className="text-gray-500">TIME START AND END</p>
             		<p className="text-gray-500">SUBJECT</p>
             		<p className="text-gray-500">INSTRUCTOR</p>
             	</div>
             	<div>
             		
             		 {timesElements}
             	</div>
             		</div>
             	),
             		index: 0
             	},
             	{
             		jsx: (
             		<div>
             		<div className="flex justify-between w-full">
             		<div >
             		     <button className="bg-blue-700 text-white rounded-lg px-4 py-2">Add Participants</button>

             		</div>
             			<div className="">
             				<AddParticipant />
             			</div>
             		</div>
             	<div className="mt-8">
             			{
             		participants
             	}
             	</div>
             		</div>
             	),
             		index: 1
             	}


             	]} />
          

             </div>
             	
            </div>
		)

}