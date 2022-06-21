import React from 'react'
import crypto from "../assets/ProjectImages/crypto.png";
import gHabits from "../assets/ProjectImages/goodHabits.png";
import port from "../assets/ProjectImages/port.png";
import sTime from "../assets/ProjectImages/studyTime.png";
import tAlarm from "../assets/ProjectImages/taskAlarm.png";

const Portfolio = () => {

    
        const portfolios = [
            {
                id:1,
                src: crypto,
                href: "https://github.com/akib1010/Cryptocurrency_Tracker",
                name: "Crypto Tracker"
            },
            {
                id:2,
                src: gHabits,
                href: "https://github.com/akib1010/GoodHabits",
                name: "Good Habits"
            },
            {
                id:3,
                src: sTime,
                href: "https://github.com/akib1010/StudyTime",
                name: "Study Time"
            },
            {
                id:4,
                src: tAlarm,
                href: "https://github.com/JoshuaDueck/COMP-4020-Task-Alarm",
                name:"Task-Based Alarm"
            },
            {
                id:5,
                src: port,
                href: "https://github.com/akib1010/my_website",
                name: "Personal Portfolio"
            },
        ]


  return (
    <div name="Projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className="py-6">Check out some of my projects</p>
            </div>


             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

             {
                portfolios.map(({id,src,href,name}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <a href={href} target="_black" rel="noreferrer">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                       <div className="flex items-center justify-center">
                           <button className="px-6 py-3 m-1 duration-200 hover:scale-105">{name}</button>
                     </div>
                     </a>
                </div>
                ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio