import React from 'react'
import { assets } from '../assets/File/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        {/* -----------Left Side---------------- */}
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
                Remove the <br /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Background from </span><br /> images for free.
            </h1>

            <p className='my-6 text-[15px] text-gray-500'>
                This is useful for creating clean product photos, professional profile pictures, <br /> or visuals for marketing and design, making the subject stand out on any backdrop.
                
            </p>

            <div>
                <input type="file" id="upload1" hidden/>
                <label htmlFor="upload1">
                    <img src={assets.upload_btn_icon} alt="" />
                    <p>Upload Your Image</p>
                </label>
            </div>

        </div>
        {/* -----------Right Side--------------- */}
        <div></div>
    </div>
  )
}

export default Header