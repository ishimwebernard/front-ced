import React from 'react'
import Silhouette from '../assets/silhouette.png'
import Nav from './nav'
import Button from './button'
import CardSwiper from './cardswiper'
import Deliver from './deliverym'
import Experience from './experience'
import Footer from './footer'
import Hero from './hero'
export default function Home() {
    return (
        <div className="bg-gray-50 flex-row relative">
           
            <Hero />
            <p className="font-poppins-light text-2xl m-4 md:ml-20 md:mt-10 md:text-4xl">Why Primecs?</p>
            <section className="px-4 py-4 mt-4 md:grid md:grid-cols-3 md:space-x-4 md:px-20">

            <div>
            <div className="flex space-x-4 mt-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1E40AF">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
<p className="font-open-regular text-blue-800 text-xl">Affordability</p>
            </div>
            <p className="mt-2 text-gray-600">With us, your time bound and geographical  restrictions are no longer a limit! Our learning services are cheap and affordable regardless of where you are in the world. </p>
            </div>
            <div>
            <div className="flex space-x-4 mt-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1E40AF">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p className="font-open-regular text-blue-800 text-xl">Proffesionalism</p>
            </div>
            <p className="mt-2 text-gray-600">It’s always amazing to learn with Experts! PrimECS got your back thanks to various professional individuals with superb field and office experiences in the industry.</p>

            </div>
          <div>
          <div className="flex space-x-4 mt-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1E40AF">
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>
<p className="font-open-regular text-blue-800 text-xl">Foresight</p>
            </div>
            <p className="mt-2 text-gray-600">With us, you’re able to reflect on a long-term basis, dig deep in the sea of ideas, and hence get to plan actively and accurately. </p>

          </div>
            </section>
            <section>
            <p className="font-poppins-light text-2xl m-4 md:ml-20 md:mt-10 md:text-4xl">Explore Programs by Discipline</p>
                <CardSwiper />
                <p className="font-poppins-light text-2xl m-4 md:ml-20 md:mt-10 md:text-4xl">Explore Programs by Delivery Mode</p>
                <Deliver />
                <p className="font-poppins-light text-2xl m-4 md:ml-20 md:mt-10 md:text-4xl">Explore Programs by Experience</p>
                <section>
                <Experience />
                </section>
            </section>
            <Footer />

        </div>
    )
}
