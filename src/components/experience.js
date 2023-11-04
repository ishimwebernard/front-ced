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
    <div ref={sliderRef} className="keen-slider m-4  ">
      <div className="keen-slider__slide number-slide1 ">
        <p className="mt-4 ml-4 font-open-semibold text-xl">AEC360 Pro</p>
        <p className="text-gray-600 ml-4">Artistry, design and drawings</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <p className="mt-4 ml-4 font-open-semibold text-xl">AEC360 Exec
</p>
        <p className="text-gray-600 ml-4">Senior Managers and Executives

</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <p className="mt-4 ml-4 font-open-semibold text-xl">AEC360 Export
</p>
        <p className="text-gray-600 ml-4">Mid Level Managers and Rising Stars

</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
      <div className="keen-slider__slide number-slide1 ">
        <p className="mt-4 ml-4 font-open-semibold text-xl">AEC360 Custom
</p>
        <p className="text-gray-600 ml-4">Custom Corporate and individual Programs



</p>
        <div className="py-4 p-2">
        <Button text="FIND OUT MORE" />
        </div>
      </div>
     
    </div>
  )
}
