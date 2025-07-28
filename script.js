document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu on nav link click (mobile UX)
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});


const webProjects = [
    {
        title: "StudyHub",
        description: "A web application where student can make a list notes and can chat with study bot.",
        technologies: ["ReactJS", "Tailwind CSS", "NodeJS","Express","JWT","MongoDB","API"],
        image: "/MyPortfolio/images/StudyHub.png", // path to your project thumbnail
        link: "https://studyhub-1-ofa0.onrender.com",
        github: "https://github.com/ashishhumane/StudyHub.git",
    },
    {
        title: "VendorMitra",
        description: "A website to bridge the gap between street vendor and supplier so that they can buy supplies in bulk from trusted vendors.",
        technologies: ["ReactJS", "Tailwind CSS", "NodeJS","Express","JWT","MongoDB"],
        image: "/MyPortfolio/images/VendorMitra.png",
        link: "https://vendormitra-1.onrender.com",
        github: "https://github.com/ashishhumane/VendorMitra.git",
    },
    {
        title: "Voice Assistant",
        description: "A simple voice assistant built using JavaScript and the Web Speech API.The assistant listens to the user's voice, processes the input, and speaks back a response.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        image: "/MyPortfolio/images/voice_assistant.jpg", // path to your project thumbnail
        link: "https://my-voiceassistant.netlify.app/",
        github: "https://github.com/ashishhumane/GroceryStore.git",
    }
];


const androidProjects = [
    
];



grid = document.querySelector('.projects-grid')
console.log(grid);

function rendorProjects(type, color) {
    // grid.textContent = ''
    color.style.backgroundColor = "#0e050f";

    type.forEach(project => {
        color.style.backgroundColor = "#341948";
        projectCard = document.createElement('div')
        projectCard.className = "project-card"

        projectImage = document.createElement('div')
        projectImage.className = 'project-image'

        imageplaceholder = document.createElement('div')
        imageplaceholder.className = 'image-placeholder'

        img = document.createElement('img')
        img.src = project.image

        // imageplaceholder.appendChild(img)
        projectImage.appendChild(imageplaceholder.appendChild(img))

        projectInfo = document.createElement('div')
        projectInfo.className = 'project-info'

        projectHeading = document.createElement('h3')
        projectHeading.textContent = project.title
        projDiscription = document.createElement('p')


        projDiscription.textContent = project.description
        projectTags = document.createElement('div')
        projectTags.className = 'project-tags'


        project.technologies.forEach(element => {
            span = document.createElement('span')
            span.textContent = element;
            projectTags.appendChild(span)
        });
        projectLinks = document.createElement('div')
        projectLinks.className = 'project-links';
        link1 = document.createElement('a')
        link1.className = "btn small-btn"
        link2 = document.createElement('a')
        link2.className = "btn small-btn secondary-btn"

        link1.textContent = 'view project'
        link2.textContent = 'source code'

        link1.href = project.link
        link2.href = project.github

        projectLinks.appendChild(link1)
        projectLinks.appendChild(link2)

        grid.appendChild(projectCard)
        projectCard.appendChild(projectImage)
        projectCard.appendChild(projectInfo)
        projectInfo.appendChild(projectHeading)
        projectInfo.appendChild(projDiscription)
        projectInfo.appendChild(projectTags)
        projectInfo.appendChild(projectLinks)
    })
}


const webbtn = document.querySelectorAll('.filter-btn')
console.log(webbtn);

webbtn.forEach(element => {
    element.addEventListener('click', () => {
        // document.getElementById("#web").click();
        grid.textContent = ''
        webbtn.forEach(btn => {
            btn.style.backgroundColor = ""; // or use original color if needed
        });

        if (element.id === "web") {
            rendorProjects(webProjects, element)
            
        } else if (element.id === "mobile") {
            rendorProjects(androidProjects, element)
            
        } else if(element.id === "all"){
            rendorProjects(webProjects, element)
            rendorProjects(androidProjects, element)
        }else{
             grid.textContent = 'no projects available'
        }
    })
})

document.getElementById("web").click();





