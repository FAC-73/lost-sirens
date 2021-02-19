# lost-sirens
Updated portfolio with examples from last two homework assignments and group project

![Kay Davis Portfolio](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/Homepage.png?raw=true "Kay Davis Portfolio")

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
     <li>
      <a href="https://fac-73.github.io/lost-sirens/">View project</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![Kay Davis Portfolio](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/PorfolioExample2.png?raw=true "Kay Davis Portfolio")
<br><br>

**Built using Javascript, Jquery, HTML, CSS and leveraging the GitHub REST API. This application showcases my projects during my coding bootcamp on Github as well as pulls my personal information into the site through the API. A resume is also included and can be downloaded as a PDF**


### Built With

* [HTML](https://www.w3schools.com/)
* [CSS](https://www.w3schools.com/)
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Javascript](https://www.w3schools.com/)
* [Jquery](https://jquery.com/)
* [FontAwesome](https://fontawesome.com/)
* [GitHub REST API](https://docs.github.com/en/rest)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps. You can also download the source files provided. You will need a text editor such as Visual Studio Code, Xcode or similar to edit the source code.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FAC-73/lost-sirens.git
   ```

2. Pull the latest
   ```sh
   git pull
   ```


<!-- USAGE EXAMPLES -->
## Usage

#### What's included
1. HTML, CSS and Javascript (incl. Jquery) files include the source code for running the application
2. This project includes examples of my recent projects completed during this course. Animated PNG images show looped interactive examples which include links that open the project from the github.io page. As well as links to each repo. Project utilizes the Github Rest API to pull public profile information directly from my Github user account. An updated resume is included in both html format and as a downloadable PDF"


## Project deliverables

#### Included functionality
1. A homepage with an introductory bio text. Text animated using CSS gradient and animations. Text color changes with a subtle effect. Scrolling down the page shows recent projects as animated PNG images, providing a more interactive and visual way to see the applications. Each section for a project includes links to the Github io page where the project is launched, and a link direct to the repo. Each project includes a detailed README. 

![On load view](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/Homepage.png?raw=true "on load view")
<br>

![Project view](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/Portfolio_example1.png?raw=true "project view")
<br>

2. An event listener on the Resume link triggers Javascript functions that hides the html project sections, and shows resume html sections using a addClass/ remove class 'hidden' css property appended on these elements. 
A .text jquery method replaces the text for the headline to the correct corresponding link text. 

![Resume ](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/Resume.png?raw=true "Resume")
<br>

![Resume ](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/downloadableResume.png?raw=true "Resume")
<br>

3. In the resume page a link to download the CV displays a PDF version of the CV. When clicked this is displayed in a new browser tab and can be downloaded from the window.
<br>

4. The profile link includes an event listener that again triggers a set of javascript functions to hide and show hidden html sections including profile and resume content using the addClass/ removeClass method. 

![Profile](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/ProfilePage.png?raw=true "Profile")
<br>

5. Content in the profile is fetched on page load using a javascript fetch method from the Github rest API. Sections of the profile are created and appended into html. The profile image is pulled using the data.avatar.url from the api and an img element is appended into the document. A css class is added to add a desaturated black and white effect on the photo, as well as a round circular shape using CSS border radius. Information such as name, location, bio, github profile url are all fetched from the api. E-mail was not possible to obtain from the API so that is created and appended independently from using the api. As well as linking to the LinkedIn profile.
<br>

6. The layout is fully responsive and scales down to 320px, media queries are in place to adjust large font sizes as well as image sizes too. Bootstrap grid framework is leveraged for many aspects of the layout.

![Responsive](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/Responsive1.png?raw=true "Responsive")
<br>

![Responsive](https://github.com/FAC-73/lost-sirens/blob/main/assets/Images/Screenshots/Responsive2.png?raw=true "Responsive")
<br>


#### HTML, CSS and Javascript & Jquery
1. Index.html - Contains basic layout structure. Main profile content information is contained in a div using the container class from bootstrap and leverages the responsive grid. 
<br>
Javascript and Jquery dynamically append the profile information and image into html elements on page load.
JS and Jquery is also used for hiding and showing sections of the page when switching between the homepage, profile page and the resume.
<br>
- For improved accessibility additional descriptions for project images has been included, as well as including aria roles for CSS divs using bootstrap class the provide no semantic HTML information for screenreaders. 


2. styles.css - Contains layout, styling, animations and bootstrap CSS CDN is used to leveraging the responsive grid css.

3. script.js - Contains functions for adding and removing classes to hide and show html sections and elements when switching views. 
- Makes use of the Github REST API for pulling profile information from my Github user profile. Saving me having to update infomtion in multiple places such as bio, location etc. 
- Functions to create and append this informtion into HTML for the profile. Dynamically generating the profile image and appling a class to style it as a circle and with a desaturation css filter. As well as dynamically generating other profile information such as a link to the profile. 
- A function to create and append my email into the page. 
- Event listeners on main navigation links for triggering functions for profile, projects and resume.
<br>


#### Pushing to GitHub

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FeatureName`)
3. Commit your Changes (`git commit -m 'Add some FeatureName`)
4. Push to the Branch (`git push origin feature/FeatureName`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. 

See [LICENSE](https://github.com/FAC-73/lost-sirens/blob/main/LICENSE) for more information.



<!-- CONTACT -->
## Contact

Kay Davis

Project repo link: [https://github.com/FAC-73/lost-sirens](https://github.com/FAC-73/lost-sirens)
<br>
Project website: [https://fac-73.github.io/lost-sirens/](https://fac-73.github.io/lost-sirens/)

