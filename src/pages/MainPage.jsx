import React from 'react';
import img from '../assets/f1.jpg'
import { Button } from '../components/ui/button'


function MainPage() {
  return (
    <>
    <div className='p-3 '>
      <div className=" h-[50%] flex-row flex bg-slate-100 mt-10 rounded-md">
        <div className='w-[60%] p-3'>
          <img className='pt-5 pl-5 mb-5 max-h-[450px]' src={img}/>
          <Button 
          className='ml-[40%]' variant="outline">Europe</Button>
        </div>
        <div className='flex flex-col p-10 sm:max-w-[35%]'>
          <p className='blockheader'>Welcome Seniors</p>
          <p className='blocksubheading'>Hello</p>
          <p className='blockdescription'> We  some goodaa
          aaaaaaaaaaaaaaaaaaaaaaaa times</p>
        </div>
      </div>
    </div>
    <div className='p-3 '>
      <div className="h-[50%] lg:h-[30%] flex-row flex bg-slate-100 mt-10 rounded-md">
        <div className=' lg:ml-[50px] flex flex-col p-10 sm:max-w-[35%]'>
          <p className='blockheader'>Welcome Seniors</p>
          <p className='blocksubheading'>Hello</p>
          <p className='blockdescription'> We  some goodaa
          aaaaaaaaaaaaaaaaaaaaaaaa times</p>
        </div>
        <div className='w-[60%] p-3'>
          <img className='pt-5 pl-5 mb-5 max-h-[450px]' src={img}/>
          <Button 
          className='ml-[40%]' variant="outline">Europe</Button>
        </div>
      </div>
    </div>
    <div className='p-3 '>
      <div className=" h-[50%] flex-row flex bg-slate-100 mt-10 rounded-md">
        <div className='w-[60%] p-3'>
          <img className='pt-5 pl-5 mb-5 max-h-[450px]' src={img}/>
          <Button 
          className='ml-[40%]' variant="outline">Europe</Button>
        </div>
        <div className='flex flex-col p-10 sm:max-w-[35%]'>
          <p className='blockheader'>Welcome Seniors</p>
          <p className='blocksubheading'>Hello</p>
          <p className='blockdescription'> We  some goodaa
          aaaaaaaaaaaaaaaaaaaaaaaa times</p>
        </div>
      </div>
    </div>
    


    </>
  )
}

export default MainPage;