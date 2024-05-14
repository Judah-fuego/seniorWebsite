import React from 'react';
import {Link} from "react-router-dom";



function ListOfNames(){
  const list = ["YouKyung Bae", "Lucas Browne", "Judah Boyce","Elise Burt", "Min Hye Cho", "Austin | Hyunjoon Choi", "Seoyun | Younice Choi", "Stefani Ghitsecu", 'SeungJu Han', 'Caleb Howard', 'Ju Hwan Jung', 'Yohan Jung', 'Jesse Jugnheim', "Eliana Kim", 'YeAn Kim','Nora Oh', 'Wonho So', 'Rain Suiter', 'Josaih Thoutenhoofd', 'Ethan Wright', 'Finn Zenk']

  return (
    <>
    <div className='sm:mt-5 md:mt-7 flex justify-center'>
      <div className=" min-w-40 max-w-5xl justify-center flex flex-wrap p-4">
      {list.map((name, index) => (
        <div key={index} className="hover:bg-slate-200 hover: rounded-sm p-2">
          {name}
        </div>
      ))}
    </div>
    </div>
    </>
    
  )
}

export default ListOfNames