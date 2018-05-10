# React JS Resume Web App Template      
![ReactJS Resume Website Template](resume-screenshot.jpg?raw=true "ReactJS Resume Website Template")
### <a href="https://react-resume-template.herokuapp.com/">LIVE DEMO</a> 

## Description
This is a ReactJS based personal resume website template. I have built this by following a Udemy course (credits below) and by beginning with the Ceevee template by Styleshout (credits also below), and breaking up their template into isolated React components. Data is fed directly from a JSON File. This means that in its final form, it can be customized and used by anybody simply by filling in their own personal info into the JSON file and the changes will be dynamically fed into the site. If you would like to use this template for your own personal resume website, read on to learn how to build your own copy.

## Make it Your Own!
### 1. Make sure you have what you need
To build this website, you will need to have Node >=6 downloaded and installed on your machine. If you don't already have it, you can get it <a href="https://nodejs.org/en/download/">HERE</a>
### 2. Build a Create-React-App
Next, you will build the initial application using a handy tool called Create-React-App. This allows you to get up and running with a React app without the headache of setting up build-tool configurations. Go <a href="https://reactjs.org/docs/installation.html">HERE</a> to get started.
When the app building is finished run `cd yourappname` and run `npm start` to test it out.
Hit ctrl+c in the terminal when you want to stop the server that the above command starts.
For this project we will also need to install JQuery and ReactGA, do this by running `npm install jquery --save` and `npm install react-ga --save` in your terminal while inside your project folder. YOU MUST RUN THESE COMMANDS.
### 3. Download the template
Once you have a React app up and running by following the steps in the above link, download my code by hitting the green "clone or download" button above and hit download zip. All you will have to do now is replace the "public" and "src" folders of your newly built app with mine that you just downloaded. If you run `npm start` now, you should see that your app renders the same as the one at the live demo link above.
### 4. Replace images and fonts
Next, you will want to replace the images, and fonts if you like, with your own. All you have to do is replace the images at public/images/header-background.jpg, public/images/testimonials-bg.jpg and public/favicon.ico with your own. <em>YOU MUST KEEP THE SAME NAMES ON THE IMAGES.</em>  
### 5. Fill in your personal info
To populate the website with all of your own data, open the public/resumeData.json file and simply replace the data in there with your own. Images for the porfolio section are to be put in the public/images/portfolio folder.
### 6. Make any styling changes you would like
Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling changes, feel free!
### 7. Enjoy your new Resume Website
When you're all done, run `npm start` again and you'll see your new personal resume website! Congratulations!


## Credits
##### Udemy Course
<a href="https://www.udemy.com/projects-in-reactjs-the-complete-react-learning-course/learn/v4/overview">Projects in ReactJS: The Complete React Learning Course by Eduonix</a>

#### HTML Design Template
<a href="https://www.styleshout.com/free-templates/ceevee/">Ceevee Template by Styleshout</a>

##### Header photo credit
<a href="https://unsplash.com/@mischievous_penguins?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Casey Horner</a>

##### Testimonial photo credit
<a href="https://unsplash.com/@samuelzeller?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Samuel Zeller</a>
