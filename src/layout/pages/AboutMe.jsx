import React from 'react'
import imgDeveloper from '../../img/webDeveloper.jpg'

function AboutMe() {
  return (


<>

    <main className='container mx-auto mb-32 mt-52'>


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

            <div className='w-full p-4 bg-divs rounded-none lg:rounded-3xl shadow-2xl'>

            <h2 className='uppercase lg:text-4xl text-3xl font-bold mb-10 text-color-h  text-center'>About Me 🌝</h2>
            <p className='lg:text-3xl text-2xl/relaxed mx-2 text-white text-justify'>I am a beginner front-end developer and I am skilled in HTML, CSS and JavaScript web development, as well as the React framework. I am looking to gain valuable experience in an IT environment and expand my competence. I am ready for challenges and eager to learn and acquire new skills.</p>
            
            <h2 className='text-center mt-10 mb-8 text-6xl'>💻</h2>
            </div>

            <div className='img-about-me mx-auto lg:mx-0 mt-0 lg:mt-8'>

            <img src={imgDeveloper} alt="image about me" />

            </div>

        </div>

    </main>



    </>
  )
}

export default AboutMe