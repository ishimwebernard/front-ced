import React from 'react'
import Nav from './nav'
import CardImageTooltip from './cardImageTooltip'

export default function AboutUs() {
    return (
        <div>
            <Nav />
            <div className="grid grid-cols-3 px-20 space-x-4 py-10">
                <div>
                <p class="deep-text mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Our team
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
Our team consists of field and office professionals ready to guide you along the way! From design illustrations and project management domains, as well as other different areas in the industry, our team ressourcefully awakens your motives.
      </p>
                </div>
                <div className="col-span-2 grid grid-cols-2">
                    <CardImageTooltip content="Yves is the principal facilitator of the AEC360 Education Initiative." title="Yves Rugasaguhunga, PE" image="https://www.myprimecs.com/uploads/1/2/5/7/125742319/published/yves-r-21.jpg?1602407897" />
                    <CardImageTooltip content="Roman is a Project Director at Buro Happold. Roman has over twenty years' experience in engineering. " title="Roman Przepiórka, PE PMP" image="https://www.myprimecs.com/uploads/1/2/5/7/125742319/editor/roman-p.jpg?1602408003" />
                    <CardImageTooltip content="May is a Design Project Manager with Burns Engineering based in Washington D.C., USA. She has over 8 years of experience in geotechnical tunneling projects. " title="May ElKhattab, PE PMP" image="https://www.myprimecs.com/uploads/1/2/5/7/125742319/published/may-el-katthab.jpg?1602408152" />
                    <CardImageTooltip content="Martin (Marty) is a Project Controls Manager for Halmar International, based in Alexandria, VA, USA." title="Martin R. Olgren III" image="https://www.myprimecs.com/uploads/1/2/5/7/125742319/published/marty-o.jpg?1602408257" />
                    <CardImageTooltip content="Abdoul is a Project Manager with Tutor Perini Corp based in Jessup, MD, USA. " title="Abdoul G. Diallo" image="https://www.myprimecs.com/uploads/1/2/5/7/125742319/published/abdoul-d-1.jpg?1602408395" />


                </div>
            </div>
        </div>
    )
}
