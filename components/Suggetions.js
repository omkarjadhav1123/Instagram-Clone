import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";


function Suggetions() {
    const [suggetions, setSuggestions] = useState([]);


    useEffect(() =>{
        const suggetions = [...Array(5)].map((_, i)=>(
            {
                userId: faker.datatype.uuid(),
                username: faker.internet.userName(),
                avatar: faker.image.avatar(),
            }
        ));

        setSuggestions(suggetions)
    }, []);

  return (
    <div  className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400 ">Suggetions for you</h3>
        <button className="text-gray-600 font-semi
        ">See All</button>
      </div>

      {
         suggetions.map(profile => (
            <div kay={profile.uuid}
            className="flex items-center justify-between mt-3">
              <img className="h-10 w-18 rounded-full border p-[2px]" 
              src={profile.avatar} 
              alt=""/>

              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{profile.username}</h2>
                <h3 className="text-xs text-gray-400">Works at {profile.username}</h3>
              </div>

              <button className="text-blue-400 font-semibold">Follow</button>
            </div>
         ))
      }
      
    </div>
  );
}

export default Suggetions;
