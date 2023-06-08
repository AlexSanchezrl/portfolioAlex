import { Link } from "react-router-dom"

function MyCard ({title,imgUrl,bodyText}) {

  
  return (


<div className="border rounded-xl bg-color-card  shadow-md shadow-gray-800 ">

        <img className="rounded-t-lg" src={imgUrl} alt="travel-Agency Screenshot" />

    <div className="p-4 border-y-2 border-gray-300 my-4">

        <h5 className="mb-5 text-2xl font-bold tracking-tight text-color-card text-center font-forAll">{title}</h5>

        <p className="mb-3 font-normal text-gray-800 text-justify font-forAll">{bodyText}</p>

        <p className="text-md font-bold">Tech Used - <span className="font-bold text-color-card font-forAll">HTML5 </span> |
         <span className="font-bold font-forAll text-color-card"> CSS </span> |
         <span className="font-bold font-forAll text-color-card"> JavaScript </span> |
         <span className="font-bold font-forAll text-color-card"> Node.js </span> |
         <span className="font-bold font-forAll text-color-card"> Pug </span> |
         <span className="font-bold font-forAll text-color-card"> MySql</span>
        </p>

    
      
    </div>
    <div className="m-4 p-4 flex justify-center">
        <Link to="https://www.google.com/" target='_blanket' class="inline-flex items-center font-bold font-forAll text-md border-2 border-black  p-3 m-3 rounded-xl transition duration-300 hover:bg-orange-600 hover:text-white hover:border-gray-800 hover:shadow-lg hover:shadow-gray-800">

            Go to WebSite
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>


  )
}

export default MyCard