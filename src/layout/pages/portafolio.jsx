import { TypeAnimation } from 'react-type-animation';
import { DiJavascript, DiHtml5, DiCss3, DiNodejs, DiGit, DiGithub, DiGithubBadge, DiReact } from "react-icons/di";
import {FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';
import MyCard from '../../components/Card';
import imgenPersonal from '../../img/meAlex.png'
import portadaCard1 from '../../img/travelAgency-card.png'



function Portfolio() {
  return (

    <>
        

        <main  className="container mx-auto h-screen mt-52">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

            <div className="w-full p-4 bg-divs rounded-none lg:rounded-3xl shadow-2xl">
                <h1 className='uppercase lg:text-4xl text-3xl font-bold mb-10 text-color-h  text-center'>Front-End React Developer 👋</h1>
                <p className='lg:text-3xl text-2xl/relaxed mx-2 text-white'>
                    <TypeAnimation
                        sequence={[
                            `Hi, I'm Alexander Sanchez.`, 
                            3000,
                            `I'm 22 years old.`,
                            3000,
                            `I'm from Panama.`,
                            3000,
                            `I've a Degree in IT Management.`,
                            3000,
                                ]}
                            wrapper="p"
                            cursor={true}
                            repeat={Infinity}
                            style={{}}
                    />
                </p>
                <div className='flex mx-3 mt-16 p-3'>
                <Link to='https://github.com/AlexSanchezrl' target='_blanket'><DiGithubBadge className='w-12 h-12 mx-3 transition hover:duration-200 hover:scale-150 icon-gitHub' /></Link>
                <Link to='https://www.linkedin.com/in/alexsanchez-pa' target='_blanket'><FaLinkedin className='w-12 h-12 mx-3 transition hover:duration-200 hover:scale-150 icon-linkedin' /></Link>  
            </div>
            
            <div className='flex h-16 p-4 mt-7 mb-6'>
                <h1 className='lg:text-3xl text-2xl font-forAll font-bold my-1 p-1 text-color-h'>Tech Stack |</h1>                
                <DiJavascript className='w-12 h-12 lg:mx-4 text-yellow-400' />     
                <DiHtml5 className='w-12 h-12 lg:mx-4 text-orange-500' />     
                <DiCss3 className='w-12 h-12 lg:mx-4 text-blue-500' />     
                <DiReact className='w-12 h-12 lg:mx-4 text-blue-900' />      
            </div>

            

            </div>

            <div className='mx-auto lg:mx-0 img-perfil'>
                
                <img src={imgenPersonal} alt="yo" />

            </div>
            

            </div>


        </main>


                                
        <div id='work' className='container mx-auto mt-44 lg:mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-2 p-2'>

                <div 
                    data-aos="flip-right"
                    className='m-2 p-2'>
  
                <MyCard
                    title='Travel Agency'
                    bodyText=" A travel agency website is essential for providing a comprehensive online presence, facilitating trip planning and booking, offering personalized services, ensuring customer support, and promoting the agency's services to a wide audience."
                    imgUrl={portadaCard1} />               

                </div>

                <div 
                    data-aos="flip-right"
                    className='m-2 p-2'>
  
                <MyCard
                    title='Travel Agency'
                    bodyText=" A travel agency website is essential for providing a comprehensive online presence, facilitating trip planning and booking, offering personalized services, ensuring customer support, and promoting the agency's services to a wide audience."
                    imgUrl={portadaCard1} />               

                </div>

                <div 
                    data-aos="flip-right"
                    className='m-2 p-2'>
  
                <MyCard
                    title='Travel Agency'
                    bodyText=" A travel agency website is essential for providing a comprehensive online presence, facilitating trip planning and booking, offering personalized services, ensuring customer support, and promoting the agency's services to a wide audience."
                    imgUrl={portadaCard1} />               

                </div>

            </div>
   
        </div>
                    
    </>
    
  )
}

export default Portfolio