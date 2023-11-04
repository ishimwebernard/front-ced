import React from 'react'
import Silhouette from '../../src/assets/fore.png'
import Button from './button'
import Nav from './nav'
import Architecture from '../assets/architecture.png'
import Engineering from '../assets/engineering.png'
import Construction from '../assets/constructiono.png'
import Leadership from '../assets/leadership.png'
import OnSite from '../assets/onsitu.png'
import Online from '../assets/online.png'
import Demand from '../assets/demand.png'
import Custom from '../assets/custom.png'
import Footer from './footer'
import Hero from './hero'
import CardWithImage from './cardwithimage'
import Verticalcardnoimage from './verticalcardnoimage'

export default function HomeRefurbished() {
    return (
        <div>


<Hero />

<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-blue-default font-semibold tracking-wide uppercase">Why PrimECS?</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        A better way to get education online
      </p>
      
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-default text-white">
              {/* <!-- Heroicon name: outline/globe-alt --> */}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Affordability</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
          With us, your time bound and geographical  restrictions are no longer a limit! Our learning services are cheap and affordable regardless of where you are in the world.          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-default text-white">
              {/* <!-- Heroicon name: outline/scale --> */}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Proffessionalism</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
          It’s always amazing to learn with Experts! PrimECS got your back thanks to various professional individuals with superb field and office experiences in the industry.          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-default text-white">
              {/* <!-- Heroicon name: outline/lightning-bolt --> */}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Foresight</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
          With us, you’re able to reflect on a long-term basis, dig deep in the sea of ideas, and hence get to plan actively and accurately.          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-default text-white">
              {/* <!-- Heroicon name: outline/annotation --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Mobile notifications</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>

            {/* Explore Programs */}

            <section className="bg-white px-20">
            <div className="py-10"></div>

            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why PrimECS?</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Explore Programs By Discipline
      </p>
            <div className="mt-10"></div>
           <div  className="flex space-x-2">
<CardWithImage title="Architecture" image={Architecture} content="Artistry, design and Drawings"/>
<CardWithImage title="Engineering" image={Engineering} content="Technical Analysis and Design"/>
<CardWithImage title="Construction" image={Construction} content="Planning, Execution and Monitoring" />
 <CardWithImage title="Leadership" image={Leadership} content="Influencing the outcome" />

      </div>
      <div className="py-10"></div>

      <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why PrimECS?</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Explore Programs by delivery mode
      </p>
<div className="mt-10"></div>
<div  className="flex space-x-4">
    <CardWithImage image={OnSite} title="Live On Site" content="In person attendace events" />
<CardWithImage image={Online} title="Live Online" content="Courses by Video Confrence" />
<CardWithImage image={Demand} title="On-Demand" content="Access to recorded courses" />
<CardWithImage image={Custom} title="Custom" content="Custom, one-on-one and hybrid" />

</div>

<div className="pb-20">
<div className="py-10"></div>


<h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why PrimECS?</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Explore Programs by Experience Level
      </p>
<div className="mt-10"></div>
<div className="grid grid-cols-4 space-x-4">
    <Verticalcardnoimage title="AEC360 Pro" content="Students and Entry Professionals" />
<Verticalcardnoimage title="AEC360 Exec" content="Senior Managers and Executives" />
<Verticalcardnoimage title="AEC360 Export" content="Mid Level Managers and Rising Stars"/>
<Verticalcardnoimage title="AEC360 Custom" content="Custom Corporate and individual Programs" />

</div>


</div>


            </section>
            <Footer />
        </div>
    )
}
