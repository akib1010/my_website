import React from 'react'

const About = () => {
  return (
    <div name="About" className="w-full h-full margin-auto bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-4">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className= "mt-15">
            I am a recent graduate with a Bachelor of Science degree from the University of Manitoba, majoring in Computer Science and minoring in Economics, with a concentration in Human-Computer Interaction. The program has helped me understand various concepts of Computer Science, such as Software Development, Project Management, User Experience Design, Professional Programming Practices, Technical Communication, and working in a team environment. 
            </p>

            <br/>

            <p >
            I have designed and implemented several web-based and mobile projects using React, Java, JavaScript, HTML, CSS, and SQL. Additionally, I have built systems that utilize RESTFUL APIs to retrieve information and display it using techniques followed by modern practices. My projects follow a user-focused design by conducting field studies to implement user interfaces that maximize efficiency and utility.
            </p>

            <br/>
            <p>
            I honed my interpersonal skills by working in the retail industry, providing excellent customer service and communicating with other associates to ensure floor coverage is maintained. Volunteered as a peer advisor to assist in all matters associated with student welfare, including course advice and academic performance, and ensured access to appropriate referral and advocacy services. Helped over 100 students throughout the volunteer term.

            </p>
        </div>
    </div>
  )
}

export default About