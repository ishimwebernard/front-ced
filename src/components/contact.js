import React from 'react'
import Nav from './nav'
export default function Contact() {
    return (
        <div className="relative">
            <Nav />
            <div className="h-screen w-full bg-gray-200">
            <div className="p-20">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="deep-text block xl:inline">Get In Touch </span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
</p>

            </div>
            </div>
            <div className="absolute top-96 px-20 w-full">
                <div className="bg-white grid grid-cols-3">
                    <div className="bg-blue-800 p-10">
                    <h2 className="text-white text-lg">Contact Information</h2>
                    <p className="text-white opacity-80 mt-4">
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.

                    </p>
                    <div className="flex space-x-4 mt-8">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#F9FAFB">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
<p className="text-gray-50 opacity-80">+1 5465465566 </p>
</div>

<div className="flex space-x-4 mt-4">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#F9FAFB">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
<p className="text-gray-50 opacity-80">info@primecs.com</p>
</div>
                    </div>
                    <div className="col-span-2 p-10">
                        <div className="grid grid-cols-2 space-x-4">
                        <div class="mb-6">
    <label for="base-input" class="text-sm font-medium text-gray-900 block mb-2">First Name</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
</div>
<div class="mb-6">
    <label for="base-input" class="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
</div>
                        </div>

                        <div className="grid grid-cols-2 space-x-4">
                        <div class="mb-6">
    <label for="base-input" class="text-sm font-medium text-gray-900 block mb-2">Email</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
</div>
<div class="mb-6">
    <label for="base-input" class="text-sm font-medium text-gray-900 block mb-2">Phone</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
</div>
                        </div>
                        <div className="w-full">
                        <div class="mb-6">
    <label for="base-input" class="text-sm font-medium text-gray-900 block mb-2">Subject</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
</div>

                        </div>

                        
<label for="message" class="text-sm font-medium text-gray-900 block mb-2">Your message</label>
<textarea id="message" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="Leave a comment..."></textarea>
<div className="relative w-full h-full">
<div className="absolute right-0 top-5">
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-3">Send Message</button>

</div>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
