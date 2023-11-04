import React from 'react'
import Fore from '../assets/fore.png'
import Nav from './nav'
export default function Hero() {
    return (
        <div>
            <div class="relative bg-white overflow-hidden">
            <Nav />

  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

    

      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
            <span class="deep-text block xl:inline text-blue-default">Prime Education </span>
            <span class="deep-text block green xl:inline">is here!</span> 
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          We help you unleash the necessary skillset vital for a problem solver, via real life practices of analysis and design of some of the complex structures in the industry.

</p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-default hover:bg-green-dark md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-default bg-blue-lighter hover:bg-blue-light md:py-4 md:text-lg md:px-10">
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="my-20 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class=" w-full object-cover sm:h-72 md:h-full lg:w-full lg:h-full" src={Fore} alt="" /> 
  </div>
</div>
        </div>
    )
}
