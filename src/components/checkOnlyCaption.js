import React from 'react'

export default function CheckOnlyCaption({ caption, onChange }) {
    return (
        <div>
              <div class="flex items-start items-center mb-4">
      <input onChange={(e)=>{onChange(e.target.checked)
      }} type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
      <label class="text-sm ml-3 font-medium text-gray-900">{ caption}</label>
  </div>
        </div>
    )
}
