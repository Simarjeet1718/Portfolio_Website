import React from 'react'

const About = () => {
  return (
    <div name="About" 
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            Hello! I'm Simarjeet Singh, a passionate and driven Computer Science student currently pursuing my BTech at BIT Mesra. With a strong foundation in web development, IoT, and software engineering, I thrive on turning innovative ideas into real-world solutions. My journey has been fueled by a relentless curiosity and a commitment to mastering new technologies, especially in the realm of full-stack development with the MERN stack.
            </p>

            <br/>

            <p className="text-xl">
            I'm always eager to learn, collaborate, and contribute to projects that make a meaningful impact. Explore my portfolio to see some of the work I've done, and feel free to reach out if you'd like to connect or discuss potential opportunities.
        </p>
        </div>
      
    </div>
  )
}

export default About
