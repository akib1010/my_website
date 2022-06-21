import React from 'react'
import {FaJava,FaPython,FaHtml5,FaReact,FaAndroid} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {CgCPlusPlus} from 'react-icons/cg'
import {SiTailwindcss} from 'react-icons/si'

const Technical = () => {

    const skills= [
        {
            id:1,
            child: (
                <>
                    <FaJava className="w-20 mx-auto "size={100}></FaJava>
                </>
            ),
            title: "Java",
            style: "shadow-blue-500"
        },
        {
            id:2,
            child: (
                <>
                    <FaHtml5 className="w-20 mx-auto "size={100}></FaHtml5>
                </>
            ),
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id:3,
            child: (
                <>
                    <IoLogoJavascript className="w-20 mx-auto "size={100}></IoLogoJavascript>
                </>
            ),
            title: "Javascript",
            style: "shadow-yellow-500"
        },
        {
            id:4,
            child: (
                <>
                    <CgCPlusPlus className="w-20 mx-auto "size={100}></CgCPlusPlus>
                </>
            ),
            title: "C++",
            style: "shadow-blue-800"
        },
        {
            id:5,
            child: (
                <>
                    <AiOutlineConsoleSql className="w-20 mx-auto "size={100}></AiOutlineConsoleSql>
                </>
            ),
            title: "SQL",
            style: "shadow-blue-300"
        },
        {
            id:6,
            child: (
                <>
                    <FaPython className="w-20 mx-auto "size={100}></FaPython>
                </>
            ),
            title: "Python",
            style: "shadow-yellow-300"
        },
        {
            id:7,
            child: (
                <>
                    <FaReact className="w-20 mx-auto "size={100}></FaReact>
                </>
            ),
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id:8,
            child: (
                <>
                    <FaAndroid className="w-20 mx-auto "size={100}></FaAndroid>
                </>
            ),
            title: "Android Studio",
            style: "shadow-green-400"
        },
        {
            id:9,
            child: (
                <>
                    <SiTailwindcss className="w-20 mx-auto " size={100}></SiTailwindcss>
                </>
            ),
            title: "TailwindCss",
            style: "shadow-sky-400"
        }
    ]
  return (
    <div name="Technical" className="bg-gradient-to-b from-gray-800 to-black w-full h-full margin-auto">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
            <div className="my-auto">
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Technical Skills</p>
                <p className="py-6">These are the things I have worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {
                skills.map(({id,child,title,style})=> (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        {child}
                        <p className="mt-4">{title}</p>
                    </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default Technical