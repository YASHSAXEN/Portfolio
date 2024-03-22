import HeroSection from '../components/HeroSection/heroSection';
import Skills from '../components/Skills/Skills'
import Experience from '../components/Experience/Experience';
import Project from '../components/Project/Project';
import { useState } from 'react';

function MidSection() {

  let [project,setProject] = useState("Frontend_Developer")

    let projects = {
        'Frontend_Developer':[
        {
        "link":"https://github.com/YASHSAXEN/Notemaker_using_javascript",
        "skills":["HTML","CSS","Javascript"],
        "title":"Notemaker",
        "desc":"The NoteMaker App is a simple and efficient web application designed for users  to create, edit, and store notes seamlessly. Developed using HTML, CSS, and JavaScript, this lightweight application leverages the browser`s local storage to ensure a hassle-free note-taking experience without the need for an external database",
        "links":"https://notemaker-1.netlify.app"
        },
        {
        "link":"https://github.com/YASHSAXEN/Socialmedia_clone",
        "skills":["HTML","CSS","ReactJS","Javascript"],
        "title":"Social Media UI Clone",
        "desc":"The Facebook Frontend Clone project is a meticulous recreation of the Facebook user interface using React.js, HTML, and CSS. This endeavor aims to provide a hands-on learning experience for developers interested in mastering React.js while replicating the familiar and intuitive design of the world`s leading social media platform.",
        "links":""
        },
        {
        "link":"https://github.com/YASHSAXEN/Car_Price_Prediction_System",
        "skills":["HTML","CSS","Python","Flask","Machine Learning"],
        "title":"Car Price Prediction System",
        "desc":"The Car Price prediction system using machine learning, Python, and Flask is a web-based application that predicts the selling price of a used car based on several input factors such as the car`s model, year,mileage, fuel type, and transmission type",
        "links":"http://ec2-3-84-91-97.compute-1.amazonaws.com:8080/"
        }],
        'FullStack_Developer':[
            {
            "link":"https://github.com/YASHSAXEN/Movie_recommendation_website",
            "skills":["HTML","CSS","Bootstrap","Python","Machine Learning","SQL"],
            "title":"Movie Recommendation System",
            "desc":"The Movie Recommendation System project combincombines Bootstrap for front-end design, Python for implementing recommendation algorithms, and Flask for web development. It showcases an attractive,responsive interface using Bootstrap and utilizes Python algorithms through Flask for personalized movie recommendations, adapting to user preferences based on viewing behaviorapplication development",
            "links":""
            },
            {
            "link":"https://github.com/YASHSAXEN/Voice_based_email_system",
            "skills":["HTML","CSS","Python","Flask",'SQL'],
            "title":"Voice Based Email System",
            "desc":"The Facebook Frontend Clone project is a meticulous recreation of the Facebook user interface using React.js, HTML, and CSS. This endeavor aims to provide a hands-on learning experience for developers interested in mastering React.js while replicating the familiar and intuitive design of the world`s leading social media platform..",
            "links":''
            },
            {
            "link":"https://github.com/YASHSAXEN/Notemaker_using_javascript",
            "skills":["HTML","CSS","Javascript"],
            "title":"Notemaker",
            "desc":"The NoteMaker App is a simple and efficient web application designed for users  to create, edit, and store notes seamlessly. Developed using HTML, CSS, and JavaScript, this lightweight application leverages the browser`s local storage to ensure a hassle-free note-taking experience without the need for an external database",
            "links":"https://notemaker-1.netlify.app"
        }],
        'Data_Analyst':[
                {
                "link":"https://github.com/YASHSAXEN/Sales_Data_Analysis",
                "skills":["Python","Pandas","Seaborn", "Matplotlib","Tableau"],
                "title":"Sales Data Analysis",
                "desc":"The Sales Data Analysis and Dashboard project present a comprehensive exploration and visualization of the sales data from a superstore. This project employs Python for data analysis and Tableau for creating an interactive and insightful dashboard. The aim is to extract meaningful patterns, trends, and insights from the sales data.",
                "links":"https://public.tableau.com/views/SalesDataAnalysis_17042739086040/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                },
                {
                "link":"https://github.com/YASHSAXEN/Diabetes_Prediction_System",
                "skills":["HTML","CSS","Python","Flask","Machine Learning"],
                "title":"Diabetes Prediction System",
                "desc":"The Facebook Frontend Clone project is a meticulous recreation of the Facebook user interface using React.js, HTML, and CSS. This endeavor aims to provide a hands-on learning experience for developers interested in mastering React.js while replicating the familiar and intuitive design of the world`s leading social media platform.",
                "links":""
                },
                {
                "link":"https://github.com/YASHSAXEN/Car_Price_Prediction_System",
                "skills":["HTML","CSS","Python","Flask","Machine Learning"],
                "title":"Car Price Prediction System",
                "desc":"The Diabetes prediction system using machine learning, Python, and Flask is a sophisticated web-based application that uses machine learning algorithms to predict the likelihood of a person developing diabetes.",
                "links":"http://ec2-3-84-91-97.compute-1.amazonaws.com:8080/"
        }]
}
  return (
    <>
        <HeroSection></HeroSection>
        <Skills></Skills>
        <Experience></Experience>
        <Project projects={projects} setProject={setProject} project={project}></Project>
    </>
  )
}

export default MidSection