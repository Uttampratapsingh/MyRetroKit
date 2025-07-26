import React from 'react'

const About = ({setCurrentPage}) => {
  return (
    <div className="z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/45 rounded-b-2xl pt-2 pb-5">
          <div className="space-y-1 mx-[50px] relative px-6 py-2">
            <div className='flex justify-between gap-12 mt-6'>
              <div>
                <img src="/house-ground-only.jpg" alt="Shalini Keshri, Research Scholar"/>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo praesentium eveniet illo veritatis recusandae debitis adipisci blanditiis minus ea laborum iste vitae esse labore, nulla sit. Fuga, laudantium corrupti.</p>
              </div>
              <div>
                <img src="/house-ground-plus-two.jpg" alt="Dr. Priyanka Dey, Assistant Professor"  />
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio quaerat cumque fugiat, tenetur nesciunt iste. Vero, eius facilis ipsum enim cum similique magni beatae, reprehenderit aut omnis earum sunt.</p>
              </div>
            </div>
            <div className={`flex justify-end items-center mt-2`}>
                <button onClick={()=>setCurrentPage("home")} className='bg-white/75 hover:bg-white px-8 py-1 rounded-full border '>Go to Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About