import React from 'react'

const FeedbackPage = ({setCurrentPage}) => {
  return (
    <div className="z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/45 rounded-b-2xl pt-2 pb-5">
        <div className="space-y-1 mx-[50px] relative bg-white/85 px-6 py-2 rounded-3xl">
          <h1 className='font-semibold text-lg mb-4'>Disclaimer & Feedback Request:</h1>
          <p className="text-md">
                This website is part of an ongoing PhD research project undertaken by:
          </p>
          <p className='text-center'> <span className='font-semibold'>Ms. Shalini Keshri</span> (Research Scholar) and <span className='font-semibold'>Dr. Priyanka Dey</span> (Assistant Professor) <br /> Department of Architecture and Regional Planning,<br />Indian Institute of Technology Kharagpur, West Bengal.</p>
          <p>The content, tools, and analyses presented on this website are part of a continuous research process and may be updated as the work progresses.</p>
          <p className='mt-2'>Your feedback on the website's usability, clarity, and overall experience is highly appreciated and will significantly contribute to the refinement and effectiveness of this research.</p>
          <p className='mt-2'>If you have any suggestions or encounter issues, kindly share your thoughts through the feedback form provided below.</p>
          <p className='mt-2'>The data collected through this form will be used solely for academic research purposes. All responses will be kept confidential and will not be shared with any third parties. Participation is voluntary, and respondents may withdraw at any time without any consequences.</p>
          <div className="text-center mt-8">
            <div className="mb-4">
              <a 
                href="https://forms.gle/YrFnAsPM4YN8XaK67" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-lg font-medium"
              >
                https://forms.gle/YrFnAsPM4YN8XqK67
              </a>
            </div>
            <p className="text-lg font-semibold text-retrofit-dark">
              Thank you for supporting this academic endeavor.
            </p>
            <div className={`flex justify-between items-center mt-4 }`}>
              <button onClick={()=>setCurrentPage("visualize")} className='bg-white/75 hover:bg-white px-8 py-1 rounded-full border'>Back</button>
              <button onClick={()=>setCurrentPage("about")}  className ='bg-white/75 hover:bg-white px-8 py-1 rounded-full border'>Next</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage