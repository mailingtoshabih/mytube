import { useState } from "react"



export const Searchpage = () => {

  const [search, setSearch] = useState("");



  
  const handleChange = (event) => setSearch(event.target.value);
  
  const handleClick = (event) => {
    window.open(`https://www.youtube.com/results?search_query=${search}`,"_self");
    event.preventDefault();
  }


  return (
    <>

      <div className="bg-orange-600 h-screen text-center">


        <h1 className='text-orange-500'>_</h1>
        <h1 className='text-6xl font-bold text-white mt-10'>Watch your <span className='text-black'>videos...</span></h1>
        <h3 className='mt-10 text-xl font-semibold text-white'>Type any video title, channel name in the search bar below, to find & watch<br></br> the YouTube video of your choice !</h3>


        <form className='mt-5'>
          <div className="flex text-center">
            <div className="relative w-full mx-60 mt-10">
              
              <input className="block p-5 h-20 w-full text-lg font-semibold text-gray-700 bg-gray-50 rounded-lg" 
              placeholder="Python, SQL, Javascript etc..."
              onChange={handleChange}/>
              
              
              <button className="h-20 w-40 absolute top-0 right-0 p-2.5 text-lg font-base text-white bg-indigo-600 rounded-r-lg"
              onClick={handleClick}>
                Find
              </button>
              
            </div>
          </div>
        </form>

       <div className="mt-10 font-semibold text-xl text-white">
        A Distractionless YouTube
       </div>

        {/* make an array of names suggesting names, playlist of inmportant channels i watch */}

      </div>


    </>
  )
}
