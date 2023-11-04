import React from "react"
import { useKeenSlider } from "keen-slider/react"
import OnSite from '../assets/onsitu.png'
import Online from '../assets/online.png'
import Demand from '../assets/demand.png'
import Leadership from '../assets/leadership.png'
import Custom from '../assets/custom.png'
import Button from './button'
import "keen-slider/keen-slider.min.css"


export default (props) => {
  const [sliderRef] = useKeenSlider()

  return (
  <div>
    <div className="md:hidden">
    <div ref={sliderRef} className="keen-slider m-4 bg-white ">
      <div className="keen-slider__slide number-slide1 ">
        <img src={OnSite} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Live On Site</p>
        <p className="text-gray-600 ml-4">In person attendance events



</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <img src={Online} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Live Online</p>
        <p className="text-gray-600 ml-4">Courses by Video Conference</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <img src={Demand} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">On Demand</p>
        <p className="text-gray-600 ml-4">Unlimited Access to recorded courses

</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <img src={Custom} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Custom</p>
        <p className="text-gray-600 ml-4">Custom, one-on-one and hybrid



</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
     
    </div>
    </div>
    <div className="grid grid-cols-4 space-x-2 w-full px-20">
    <div >
        <img src={OnSite} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Live On Site</p>
        <p className="text-gray-600 ml-4">In person attendance events



</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div >
        <img src={Online} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Live Online</p>
        <p className="text-gray-600 ml-4">Courses by Video Conference</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div>
        <img src={Demand} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">On Demand</p>
        <p className="text-gray-600 ml-4">Unlimited Access to recorded courses

</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div >
        <img src={Custom} className="w-full" />
        <p className="mt-4 ml-4 font-open-semibold text-xl">Custom</p>
        <p className="text-gray-600 ml-4">Custom, one-on-one and hybrid



</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
    </div>
  </div>
  )
}
