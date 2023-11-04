import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Button from './button'
import Footer from './footer'
import Nav from './nav'
import generateApplicantData from './generateApplicantData'


// eslint-disable-next-line no-restricted-globals



function RedirectError(){
  return (
     <button onClick={()=>{
      // eslint-disable-next-line no-restricted-globals
             window.location.href = "/membership"
             }} type="button" class="text-white w-full bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Correct errors</button>)
}


export default function Review() {
    const [sending, setSending] = useState(false)
    const [error, setError] = useState(false)
    const [responseTime, setResponseTime] = useState(false)
    const [errorType, setErrorType] = useState("Failed to submit application, check your internet connectivity")
    function redirect(){
       window.location.href = "/"
    }
    const DisabledCheck = ({value, caption}) => {
      return (
          <div>
              <div class="flex items-start items-center mb-4">
                  <input disabled type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={value} />
                  <label class="text-sm ml-3 font-medium text-gray-900">{caption}</label>
         </div>
        </div>
        )
    }

      const TextWithLabel = ({labelText, value}) => {
    return (
      <div class="col-span-6 sm:col-span-3">
      <label for="last-name" class="block text-sm font-medium text-gray-700">{labelText}</label>
      <p type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          {value}
          </p>
    </div>
    )
  }
    return (
        <div className="w-full  ">
        <div className={responseTime ? "fixed w-full z-40 bg-transparent flex justify-end ":"hidden"}>
          <div className={error ? "flex justify-evenly rounded-xl px-4 py-8 w-1/3 bg-red-200":"flex justify-evenly rounded-xl px-4 py-8 w-1/3 bg-white"}>
              <div className="w-1/3 ">
              <p className="text-2xl">{error? "Error":"Success"}</p>
 {
  error ? (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="#dc2626">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg>

    ):(
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>)
 }
              </div>
              <div className="ml-3">
                <p>{error ? errorType:"Your application has been sent succesfully and you can expect to hear from us soon."}</p>
                <div className="mt-3">
                  <div className={error? "hidden":""}>
                    <div onClick={()=>{
                      window.location.href = "/"
                    }}>
                      <Button text="Okay" />
                    </div>
                  </div>
                  {
                    error? (
                        <RedirectError />

                      ):(
                        <></>
                      )
                  }
                </div>
              </div>
        
          </div>
        </div>
            <div className={sending ? "bg-gray-700 bg-opacity-60 grid place-items-center fixed w-screen h-screen z-20":"hidden"}>
              <div className="grid place-items-center">
                  <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
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
<p className="text-white">Sending Application</p>
              </div>
            </div>
            <Nav />
            <div className="px-20 space-y-5">
            <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="First Name" value={localStorage.getItem('firstName')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Last Name" value={localStorage.getItem('lasttName')}/>
             </div>
            </div>
            <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Email" value={localStorage.getItem('email')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Date Of Birth" value={localStorage.getItem('dateOfBirth')}/>
             </div>
            </div>

            <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Street Address" value={localStorage.getItem('streetAddress')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="City" value={localStorage.getItem('city')}/>
             </div>
            </div>


              <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="State/Province" value={localStorage.getItem('stateorprovince')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Phone Number" value={localStorage.getItem('phoneNbr')}/>
             </div>
            </div>

                <div className="flex w-full space-x-2">
           <div className="w-1/3">
           <DisabledCheck value={localStorage.getItem('architecture')} caption="Architecture"/>
               </div>
         <div className="w-1/3">
           <DisabledCheck value={localStorage.getItem('engineering')} caption="Engineering"/>
             </div>
             <div className="w-1/3">
           <DisabledCheck value={localStorage.getItem('construction')} caption="Construction"/>
             </div>
            </div>


                <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="High School Name" value={localStorage.getItem('highSchool')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Address" value={localStorage.getItem('highSchoolAddress')}/>
             </div>
            </div>
                <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Attended H/S From" value={localStorage.getItem('highSchoolFrom')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Finished H/S In" value={localStorage.getItem('highSchollTo')}/>
             </div>
            </div>
         <TextWithLabel  labelText="Graduated From HighSchool" value={localStorage.getItem('highFinish')}/>


            <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="University" value={localStorage.getItem('uniSchool')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="University Address" value={localStorage.getItem('uniSchoolAddress')}/>
             </div>
            </div>
               <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Attended University From" value={localStorage.getItem('uniSchoolFrom')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Finished University In" value={localStorage.getItem('uniSchoolTo')}/>
             </div>
            </div>

                 <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Available From" value={localStorage.getItem('availFrom')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Available To" value={localStorage.getItem('availTo')}/>
             </div>
            </div>
  <div className="flex w-full space-x-2">
              <div className="w-1/2">
           <TextWithLabel  labelText="Areas you Excell In" value={`${localStorage.getItem('areaexcell1')}, ${localStorage.getItem('areaexcell2')}, ${localStorage.getItem('areaexcell3')}`}/>
               </div>
         <div className="w-1/2">
           <TextWithLabel  labelText="Areas in which you need to improve" value={`${localStorage.getItem('areaimp1')}, ${localStorage.getItem('areaimp2')}, ${localStorage.getItem('areaimp3')}`}/>
             </div>
             </div>

                  <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Referal 1 Company Name" value={localStorage.getItem('r1cn')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Referal 1 Email" value={localStorage.getItem('r1em')}/>
             </div>
            </div>

                   <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Referal 1 Phone" value={localStorage.getItem('r1pn')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Referal 1 Relationship" value={localStorage.getItem('r1rs')}/>
             </div>
            </div>


         <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Referal 2 Company Name" value={localStorage.getItem('r2cn')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Referal 2 Email" value={localStorage.getItem('r2em')}/>
             </div>
            </div>

                   <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Referal 2 Phone" value={localStorage.getItem('r2pn')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Referal 2 Relationship" value={localStorage.getItem('r2rs')}/>
             </div>
            </div>

              <div className="flex w-full space-x-2">
           <div className="w-1/3">
           <TextWithLabel  labelText="Resume " value={localStorage.getItem('resumeorcv@primecs')}/>
      
               </div>
         <div className="w-1/3">
         <TextWithLabel  labelText="Application Letter" value={localStorage.getItem('applicationletter@primecs')}/>
             </div>
             <div className="w-1/3">
         <TextWithLabel  labelText="Referal 2 Relationship" value={localStorage.getItem('paymentreceipt@primecs')}/>
             </div>

            </div>
            <div className="grid place-items-center">
            <div className="flex space-x-4">
               <Button text="Go back " />
             <div onClick={async()=>{
                setSending(true)
                console.log(generateApplicantData())
                try{
                    const submitApplication = await axios(
                {
                  method: 'post',
                  headers: { 'Content-Type': 'application/json'},
                  url: 'http://localhost:5000/application/sendapplication',
                  data: generateApplicantData()
                });
                    console.log(submitApplication)
                    setResponseTime(true)
                    setError(false)
                      setSending(false)
                }catch(e){
                  console.log(e)
                  setResponseTime(true)
                  setError(true)
                   setSending(false)
                  setErrorType('Something went wrong')
                
                }
               // console.log(submitApplication)


             }}>
             <Button text="Submit" />
             </div>
            </div>
            </div>


            </div>
            <Footer />

        </div>
    )
}