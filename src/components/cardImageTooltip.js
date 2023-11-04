import React from 'react'

export default function CardImageTooltip({ image, title, content}) {
    return (
        <div className="p-4">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
    <a href="#">
        <img class="rounded-t-lg w-full md:h-80" src={image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
        </a>
        <p class="font-normal text-gray-700 mb-3">{content}</p>
       
    </div>
</div>


        </div>
    )
}
