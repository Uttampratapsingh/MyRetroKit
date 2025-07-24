import React from 'react'


const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border border-gray-200/50 z-0">
      <div className="flex justify-between items-end text-sm text-gray-700">
        <div>
          <div className="font-medium text-gray-800">Website developed and maintained by:</div>
          <div className="flex gap-8 leading-tight">
            <div>
              <div className="font-medium text-gray-900">Dr. Priyanka Dey</div>
              <div className='text-xs'>Assistant Professor,</div>
              <div className='text-xs'>Dept. of Architecture and Regional Planning,</div>
              <div className='text-xs'>Indian Institute of Technology Kharagpur</div>
              <div className='text-xs'>Kharagpur-721302,Paschim Medinipur,</div>
              <div className='text-xs'>West Bengal, India</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">Shalini Keshri</div>
              <div className='text-xs'>Research Scholar</div>
              <div className='text-xs'>Dept. of Architecture and Regional Planning,</div>
              <div className='text-xs'>Kharagpur-721302,Paschim Medinipur,</div>
              <div className='text-xs'>West Bengal, India</div>
            </div>
          </div>
          <a href="http://www.myretrokit.in" target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-gray-500 hover:text-gray-800 font-medium">
                www.myretrokit.in
          </a>
        </div>
        <div className="text-right">
            <div className="pl-[50px] pr-[10px] rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold text-sm font-fredoka" style={{ fontFamily: 'var(--font-fredoka)' }}>
                MyRetroKit.in
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer