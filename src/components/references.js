import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Nav from './nav'
import Pagination from './Pagination';
import CheckOnlyCaption from './checkOnlyCaption';
import "react-datepicker/dist/react-datepicker.css";
import Button from './button';
import Toggle from './Toggle';


export default function References() {

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
    route: "",
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

<div className="h-4/5 w-full overflow-y-scroll col-span-2">
<div class="mt-10 sm:mt-0">
    <div class="mt-0">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md p-8">
            <p className="font-bold">Referal 1</p>
            <TextWithLabel labelText="Company Name" onChange={(al)=>{
              localStorage.setItem('r1cn', al)
            }} />
            <TextWithLabel labelText="Email" onChange={(al)=>{
              localStorage.setItem('r1em', al)
            }}/>
            <TextWithLabel labelText="Phone" onChange={(al)=>{
              localStorage.setItem('r1pn', al)
            }} />
            <TextWithLabel labelText="Relationship" onChange={(al)=>{
              localStorage.setItem('r1rs', al)
            }} />
            <p className="font-bold">Referal 2</p>
            <TextWithLabel labelText="Company Name" onChange={(al)=>{
              localStorage.setItem('r2cn', al)
            }} />
            <TextWithLabel labelText="Email" onChange={(al)=>{
              localStorage.setItem('r2em', al)
            }} />
            <TextWithLabel labelText="Phone" onChange={(al)=>{
              localStorage.setItem('r2pn', al)
            }} />
            <TextWithLabel labelText="Relationship" onChange={(al)=>{
              localStorage.setItem('r2rs', al)
            }}/>
         
        </div>
      </form>
    </div>
 
</div>





</div>
</div>

        </div> 
    )
}
