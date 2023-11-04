import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Nav from './nav'
import Pagination from './Pagination';
import CheckOnlyCaption from './checkOnlyCaption';
import "react-datepicker/dist/react-datepicker.css";
import Button from './button';
import Toggle from './Toggle';


export default function Swot() {

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
  
  const CheckWithText = ({caption, description}) => {
    return (
      <div class="flex items-start py-2">
                    <div class="flex items-center h-5">
                      <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700">{caption}</label>
                      <p class="text-gray-500">{description}</p>
                    </div>
                  </div>
    )
  }
  
  const ComboBox = ({choices, caption}) => {
    const Options = [];
    choices.forEach(element => {
      Options.push(
        <option>{element}</option>
      )
    });
    return (
      <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">{caption}</label>
                  <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                   {
                     Options
                   }
                  </select>
                </div>
    )
  }
  
  const RadioBox = ({ caption }) => {
    return  (
      <div class="flex items-center">
                    <input id="push-nothing" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">
                      {caption}
                    </label>
                  </div>
    )
  }
  
  const BigCard = ({caption, description, components}) => {
    return (
    <>
      <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">{caption}</h3>
          <p class="mt-1 text-sm text-gray-600">
            {description}
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
           {components}
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Button text="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    </>
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

<div className="h-full w-full overflow-y-scroll col-span-2">
<div class="mt-10 sm:mt-0">
    <div class="mt-0">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md p-8">
        <p className="font-semibold text-gray-800">What 3 Areas do you excell in</p>
        <TextWithLabel caption="Area 1" onChange={(value)=>{
          localStorage.setItem('areaexcell1', value)
        }} />
        <TextWithLabel caption="Area 2" onChange={(value)=>{
          localStorage.setItem('areaexcell2', value)
        }} />
        <TextWithLabel caption="Area 3" onChange={(value)=>{
          localStorage.setItem('aeaexcell3', value)
        }} />
        
        <p className="font-semibold text-gray-800 mt-10">What 3 Areas do you need to improve</p>
        <TextWithLabel caption="Area 1" onChange={(value)=>{
          localStorage.setItem('aeaimp1', value)
        }} />
        <TextWithLabel caption="Area 2" onChange={(value)=>{
          localStorage.setItem('aeaimp2', value)
        }}/>
        <TextWithLabel caption="Area 3" onChange={(value)=>{
          localStorage.setItem('aeaimp3', value)
        }} />
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
