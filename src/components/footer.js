import React from 'react'

export default function Footer() {
    return (
        <div className="bg-gray-100 grid grid-cols-4 px-20">
            <div className="p-4 mt-4">
            <p className="font-poppins-thin">Construction Services</p>
            <p className="font-open-regular text-sm text-gray-600">Preconstruction, Construction</p>
            <p className="font-open-regular text-sm text-gray-600">P-rocurement</p>
            <p className="font-open-regular text-sm text-gray-600">Quality Safety</p>

            </div>
            <div className="p-4 mt-2">
            <p className="font-poppins-thin">Engineering Services</p>
            <p className="font-open-regular text-sm text-gray-600">Structural Engineering</p>
            <p className="font-open-regular text-sm text-gray-600">Geotechnical Engineering</p>
            <p className="font-open-regular text-sm text-gray-600">State Civil Engineering</p>
            <p className="font-open-regular text-sm text-gray-600">Design and Engineering</p>


            </div>
            <div className="p-4 mt-2">
            <p className="font-poppins-thin">Educational Services</p>
            <p className="font-open-regular text-sm text-gray-600">Energy Engineering</p>
            <p className="font-open-regular text-sm text-gray-600">Transportation Engineering</p>
            <p className="font-open-regular text-sm text-gray-600">Power Source Engineering</p>


            </div>
        </div>
    )
}
