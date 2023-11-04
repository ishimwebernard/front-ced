import React from 'react'

export default function Pagination({elements}) {
    const arrayElements = [];
    elements.forEach((element, i) => {
        console.log(elements.length)
      
          
        arrayElements.push(
            <a href={` ${element.route}`} aria-current="true" className="w-full block px-4 py-2  text-gray-50   w-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:text-blue-700 cursor-pointer">
            {element.caption}
        </a>)
      
      
        
    });
    return (
        <div className="relative w-full  rounded-lg h-4/5 blue-gradient">
            

            <div class="w-full h-full  mt-6  w-48 text-gray-900 text-sm font-medium">
  {
      arrayElements
  }

</div>


        </div>
    )
}
