import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import Nav from './nav';
import Applc from './applc';

const InputText = ({label, placeholder}) => {
    return (
        <div class=" font-poppins-regular">
    <label for="base-input" className="text-sm text-gray-900 block">{label}</label>
    <input type="text" id="base-input" className="bg-white text-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
</div>
    )
}
const spacingSmall = 5;

export default function MemberShip() {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline()
        .to(q('.section'), {
            y: -100
        })
    }, [])

    const [visibleTab, setVisibleTab] = useState(0);
    console.log(visibleTab ===0 )

    const cardRef = useRef();


function Next() {
    if( visibleTab < 3){
        setVisibleTab(visibleTab + 1);
    }
    console.log('Next'+visibleTab)
}
function Back() {
    if( visibleTab > 0){
        setVisibleTab(visibleTab - 1);
    }
    console.log('Back' + visibleTab)
}
    return (
       <div className="w-screen h-screen overflow-y-hidden ">
           <Nav />
          <div className="h-screen overflow-y-scroll pb-11">
          <Applc />
          </div>
            
       </div>
    )
}
