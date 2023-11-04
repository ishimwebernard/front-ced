import React from "react"
import { useKeenSlider } from "keen-slider/react"
import Architecture from '../assets/architecture.png'
import Engineering from '../assets/engineering.png'
import Construction from '../assets/constructiono.png'
import Leadership from '../assets/leadership.png'
import Button from './button'
import "keen-slider/keen-slider.min.css"
 

export default (props) => {
  const [sliderRef] = useKeenSlider()

  return (
  <div>
      <div className="md:hidden">
      <div ref={sliderRef} className="keen-slider m-4 bg-white ">
      <div className="keen-slider__slide number-slide1  ">
        <img src={Architecture} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Architecture</p>
        <p className="text-gray-600 ml-4">artistry, design and drawings</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <img src={Engineering} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Engineering</p>
        <p className="text-gray-600 ml-4">Technical Analysis and Design</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <img src={Construction} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Construction</p>
        <p className="text-gray-600 ml-4">Planning, Execution and Monitoring</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <img src={Leadership} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Leadership</p>
        <p className="text-gray-600 ml-4">Influencing the outcome

</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>

    </div>
      </div>
    <div className="grid grid-cols-4 space-x-8 w-full px-20">
    <div >
        <img src={Architecture} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Architecture</p>
        <p className="text-gray-600 ml-4">Artistry, design and drawings</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div >
        <img src={Engineering} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Engineering</p>
        <p className="text-gray-600 ml-4">Technical Analysis and Design</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div >
        <img src={Construction} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Construction</p>
        <p className="text-gray-600 ml-4">Planning, Execution and Monitoring</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div >
        <img src={Leadership} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Leadership</p>
        <p className="text-gray-600 ml-4">Influencing the outcome

</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>

    </div>
  </div>
  )
}
