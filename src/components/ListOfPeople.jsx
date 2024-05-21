import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Resize } from '@cloudinary/url-gen/actions/resize';
import {data} from '../data/people.jsx';

function ListOfPeople(){

  const cld = new Cloudinary({
    cloud: {
      cloudName: "ddih5xhie"
    }
  });

  return(
    
    <>
    <div className='sm:mt-5 md:mt-7 flex justify-center'>
      <div className="min-w-40 max-w-5xl justify-between flex flex-wrap p-4">
      {data.map((item, index) => (
        <a key={index} href={`#item-${index}`} >
          <div className=" cursor-pointer hover:bg-slate-200 hover: rounded-sm p-2">
          {item.name}
        </div>

        </a> 
      ))}
    </div>
    </div>

    <div className='p-10'> 
    <ol className='flex justify-center gap-10 flex-wrap'>
      {data.map((item, index)=> (
        <li 
        id={`item-${index}`} 
        key={index} 
        className='border-2 border-slate-300 lg:w-[500px] md:w-[600px] sm:w-[400px] h-[200px bg-slate-200 drop-shadow-sm rounded-md p-4'>
          <div className='flex flex-row gap-x-3'>
            <AdvancedImage 
            cldImg={cld.image(`${item.image}`).resize(Resize.scale().width(150).height(150))}/>
            <div>
              <p className='text-3xl pb-2 overflow-hidden'>{item.name}</p><hr/><p className='text-sm pt-2'>{item.description}</p>
            </div>
          </div>
        </li>
      ))}
      </ol>
      </div>
    </>
  )
}

export default ListOfPeople;