import React, { useState } from 'react'
import Nav from './nav'
import Pagination from './Pagination';
import "react-datepicker/dist/react-datepicker.css";
import Button from './button';





export default function Availability() {
let availFrom = '';
let availTo = '';

  const TextWithLabel = ({labelText, onChange}) => {
    return (
      <div class="col-span-6 sm:col-span-3">
      <label for="last-name" class="block text-sm font-medium text-gray-700">{labelText}</label>
      <input onChange={(e)=>{
        onChange(e.target.value)
      }} type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    </div>
    )
  }
 
  const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="h-screen w-screen overflow-y-hidden">
<Nav />

<div className="w-full  md:grid md:grid-cols-3 px-20">
<div className="md:col-span-1 h-full relative overflow-y-hidden">
<Pagination elements={[
  {
    route: "/membership",
    caption: "Applicant's Information"
  },
  {
    route: "/education",
    caption: "Education"
  },
  {
    route: "/availability",
    caption: "Availability"
  },
  {
    route: "/streandwe",
    caption: "Strengths and Weakness"
  },
  {
    route: "/references",
    caption: "References"
  },
  {
    route: "/documents",
    caption: "Documents Submission"
  },
]} />
</div>

<div className="h-full w-full overflow-y-scroll col-span-2">
<div class="mt-10 sm:mt-0">
    <div class="mt-0">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md p-8">
        <div className="flex space-x-4">
        <div className="w-1/2">
        <TextWithLabel labelText="Available From" onChange={(value)=>{
                      localStorage.setItem('availFrom', value)

        }} />
        </div>
        <div className="w-1/2">
        <TextWithLabel labelText="Available To" onChange={(value)=>{
                      localStorage.setItem('availTo', value)

        }}  />
        </div>
        </div>
        
        <div className="h-20"></div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6" onClick={()=>{
            localStorage.setItem('availFrom', availFrom)
            localStorage.setItem('availTo', availTo)

          }}>
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none">
              <Button text="Save" />
            </button>
          </div>
        </div>
      </form>
    </div>
 
</div>





</div>
</div>

        </div> 
    )
}
