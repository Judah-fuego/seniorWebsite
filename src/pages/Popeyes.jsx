import React, {useState} from 'react';

import thumb from '../assets/thumb.png'

import {Input } from '../components/ui/input.jsx';
import { Button } from '../components/ui/button.jsx';
import { Toaster, toast } from 'sonner';



// Create an input field that reads the data and it matches a certain string then a field appears. 

function Popeyes(){
  const[input, setInput] = useState('');
  const[result, setResult] = useState(false);


  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmission = () => {
    const s_input = input.toLowerCase();
   
    if(s_input == "midpoint") {
      setResult(true)
      toast.success("Ungs Kungs")
    } else {
      toast.error("Wrong Password");
    }

    
  }

  return(
    <>
    <Toaster position="bottom-right" richColors/>
    { result ?<>
    <div className='m-auto w-fit p-7 mt-10 bg-green-400 rounded-md hover:drop-shadow-md text-center'> You got the right answer</div>  
    </>:
    <div className='m-auto w-1/3 pt-12'>
    <label className=''>Where is the best place to eat after a IGA Dance?</label>
    <Input 
       
       type='text' 
       placeholder='answer the question'
       value={input}
       onChange={handleInputChange}
       className="w-5/6 mt-10 sm:h-[50px] "/>
    <Button 
      onClick={handleSubmission}
      className="mt-4">Submit</Button>  
      </div>
    }
    


    { result ? <div className='m-auto w-fit mt-20'>New Content Coming Soon</div> : <div className='m-auto w-fit mt-20'>Guess to see the suprise area</div>
    }

  
    </>
  )
}

export default Popeyes;