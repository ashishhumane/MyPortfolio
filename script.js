document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
    this.classList.toggle('active');
});

const webProjects = [
    {
        title: "E-commerce Platform",
        description: "A simple frontend only web application where vendor can sell their farm product D2C.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/MyPortfolio/images/E-commerce_platfom.png", // path to your project thumbnail
        link: "https://farm2cart.netlify.app/",
        github: "https://github.com/ashishhumane/GroceryStore.git",
    },
    {
        title: "To-Do List",
        description: "A responsive to-do list with local storage support. Users can add, edit, and delete tasks.",
        technologies: ["React", "CSS", "LocalStorage"],
        image: "images/todo-app.png",
        link: "https://yourusername.github.io/todo-list/",
        github: "https://github.com/yourusername/todo-list",
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
    {
        title: "Fitness Tracker App",
        description: "An Android app to track daily fitness activities such as steps, calories burned, and water intake. Includes Google Fit integration.",
        technologies: ["Kotlin", "XML", "Room DB", "Google Fit API"],
        image: "/images/fitness-tracker.png", // path to your project thumbnail
        link: "https://play.google.com/store/apps/details?id=yourappid", // demo or Play Store link
        github: "https://github.com/yourusername/fitness-tracker-app"
    },
    {
        title: "Expense Manager",
        description: "Helps users manage their daily expenses with category-wise tracking, monthly reports, and a simple UI.",
        technologies: ["Java", "XML", "SQLite", "MPAndroidChart"],
        image: "/images/expense-manager.png",
        link: "https://yourusername.github.io/expense-manager-demo/", // or APK download/demo
        github: "https://github.com/yourusername/expense-manager"
    },
    {
        title: "Weather App",
        description: "Displays current weather conditions using OpenWeather API. Features location-based data and clean UI.",
        technologies: ["Kotlin", "Retrofit", "MVVM", "LiveData"],
        image: "/images/weather-app.png",
        link: "https://yourusername.github.io/weather-app-demo/", // demo or APK link
        github: "https://github.com/yourusername/weather-app"
    }
];

const designProjects = [
    {
        title: "Mobile Banking App UI",
        description: "A clean and modern UI design for a mobile banking application, focusing on user-friendly navigation and security.",
        technologies: ["Figma", "UI/UX", "Design System"],
        image: "/images/mobile-banking-ui.png",
        link: "https://www.figma.com/file/yourfileid/banking-app-design", // Live Figma or Behance link
        github: "", // Leave empty or null for design-only projects
    },
    {
        title: "E-commerce App UI Kit",
        description: "A design system and UI kit for an e-commerce app, including product pages, cart, and checkout flow.",
        technologies: ["Adobe XD", "Design System", "Prototyping"],
        image: "/images/ecommerce-ui-kit.png",
        link: "https://www.behance.net/gallery/yourprojectid/Ecommerce-App-Design",
        github: ""
    },
    {
        title: "Portfolio Website Design",
        description: "A responsive, modern portfolio website mockup tailored for developers and creatives, designed for easy customization.",
        technologies: ["Figma", "Grid Systems", "Responsive Design"],
        image: "/images/portfolio-design.png",
        link: "https://www.figma.com/file/yourfileid/portfolio-website",
        github: ""
    }
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
            
        } else if (element.id === "design") {
            rendorProjects(designProjects, element)
            
        }else if(element.id === "all"){
            rendorProjects(webProjects, element)
            rendorProjects(androidProjects, element)
            rendorProjects(designProjects, element)
        }else{
             grid.textContent = 'no projects available'
        }
    })
})

document.getElementById("web").click();


// function sendEmail() {
//   const email = document.querySelector('.emailmsg').value 
//   const subject = document.querySelector('.textmsg').value;
//   const body = document.querySelector('.myext').value;

//   const mailtoLink = `mailto:${"ashishhumane2003@gmail.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//   window.location.href = mailtoLink;

//   // Prevent actual form submission
//   return false;
// }

// form = document.querySelector('form')
// form.addEventListener('submit' , (e) => {
//     e.preventDefault()
//     sendEmail()
// })


