import { Button } from '../components/ui/button'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, AdvancedImage } from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { ImageLinks } from '../data/MainPageImages.jsx'

function MainPage() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'ddih5xhie'
    }
  });  

  const myVideo = cld.video('Class/seniortripsong');
  myVideo.resize(fill().width(550).height(350)).roundCorners(byRadius(20))

  const mainPhoto = cld.image('Class/ClassSeniorTrip_wbzblw');


  return (
    <>
    <div className='p-3 drop-shadow-sm'>
      <div className=" h-[45%] flex-row flex bg-sky-100 mt-10 drop-shadow-md rounded-md">
        <div className=' w-[50%] lg:h-[590px] p-3 drop-shadow-md '>
          <AdvancedImage className=' pt-5 pl-5 mb-5 max-h-[80%] w-[90%]' cldImg={mainPhoto}/>
          <a target="_blank" 
          href="https://maps.app.goo.gl/dkgdi9yw7GJgEysU9">
          <Button 
          className='ml-[40%]' 
          variant="outline"
          >Where was this????</Button>
          </a>
          {/* Add link to google maps location */}
        </div>
        <div className='flex flex-col p-10 sm:max-w-[35%]'>
          <p className='lg:text-[100px]'>IGA Seniors 2024</p>

        </div>
      </div>
    </div>

    <div className='p-3 w-fit'>
      <div className="lg:h-[490px] h-[400px] justify-center flex-row flex bg-sky-100 mt-10 rounded-md ">
        <div className=' lg:ml-[50px] flex flex-col p-10 sm:max-w-[35%] mr-10'>
          <p className='blockheader'>Senior Quotes</p>
          <br/>
          <br/>
          <ol className='list-none'>
            <li className='mb-3'>
              <p><span className='italic'>&quot;Ungs Kungs&quot;</span> - Ye An</p>
            </li>
            <li className='mb-3'>
              <p><span className='italic'>&quot;I carry IGA like the Notre Dame guy. &quot;</span> - Judah</p>
            </li>
            <li className='mb-3'>
              <p><span className='italic'>&quot; Finni Ginni Zenki &quot;</span> - Austin and YK</p>
            </li>
            <li className='mb-3'>
              <p><span className='italic'>&quot;  &quot;</span> - Younice</p>
            </li>
          </ol>
        </div>
        <div className="mt-10">
          <AdvancedVideo cldVid={myVideo} controls className='mb-3'/>
          <a target="_blank" 
          href="https://maps.app.goo.gl/6nCFgCKc6iyE8m3u9">
          <Button 
          className='ml-[40%]' 
          variant="outline"
          >Where was this????</Button>
          </a>
        </div>
      </div>
    </div>
    <div className='p-3 '>
      <p className='text-center text-4xl'>Group Photos</p>
      <div className=" justify-center flex">
        <div className=''>
          <Carousel className="w-[450px] h-[350px] mt-10">
            <CarouselContent>
              {ImageLinks.map((link, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                        <AdvancedImage className='' 
                        cldImg={cld.image(link)}/>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
    


    </>
  )
}

export default MainPage;