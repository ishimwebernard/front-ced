import React from 'react'
import {useState } from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/FadeLoader";

const overridethree = css`
  display: block;
  margin: 0 auto;
  border-color: "#94a3b8";
`;

export default function Ftthree() {
  let [loadingthree, setloadingthree] = useState(false)
  let [color, setColor] = useState("#94a3b8");
  function changeloadingthree(){
    setloadingthree(!loadingthree)
  }
  const [fileUploadedthree, setfileUploadedthree] = useState(null)
    return ( 
        <div>
            <div>
                    <label className="block text-sm font-medium text-gray-700">Application Letter</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        
                          {loadingthree ? (
                                 <ClipLoader color={color} loadingthree={loadingthree} css={overridethree} size={150} />

                          ):(<svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                            <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          /> </svg>
                          )}
                        
                        <div className="flex text-sm text-gray-600">
                          <label 
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            
                            <input id="threefileupload" name="threefileupload" type="file"  onChange={async(e)=>{
                              
                              changeloadingthree()
                              changeloadingthree()
                              
                              
                            }} />
                          </label>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
    )
}
