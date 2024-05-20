# Empathy Notepad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.

## Running

### Local

First you need to install the dependencies of the project with `npm install`, then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Deployed
You can access a deployed version of the project in the following URL.

[https://empathy.guillefun.com](https://empathy.guillefun.com/#/)

**Warning :warning:**  
<sub>If the URL fails maybe its due to the DNS files still processing. Try with this one
[https://empathy-survey-notepad.vercel.app](https://empathy-survey-notepad.vercel.app/#/)</sub> 

## Imperativeness of the solution

### Enhanced Efficiency and User Friendliness

- **Simplified Survey Creation**: The survey tool provides, to use interfaces that enable researchers to develop surveys without the need for coding skills.
- **Efficient Data Collection**: The survey tool simplifies the process of gathering data. Researchers can effortlessly share surveys online monitor responses and efficiently handle information. Moreover storing data on a server facilitates exporting it to platforms for analysis.

### Accessibility and Expansion

- **Expanded Reach**: The survey tool helps in reaching an audience of participants. Online surveys can be shared through email, social media or embedded on websites.
- **Scalability Improvement**: Research platforms equipped with survey tools can effectively handle large scale surveys involving thousands of participants making them suitable, for studies that require a sample size.

To **sum up** a survey tool enables researchers to carry out research, with efficiency and effectiveness. It streamlines the process of creating surveys enhances data gathering and accuracy and enables outreach and increased participation rates. This results in research outcomes and enhanced contributions, to the field.


## Project architecture

### Folder architecture

The project is divided in four main directories:
  - **core**: Contains all the definitions and services to serve the server data.
  - **pages**: It contains the main views of the application. In a larger project it may be slightly better to use **features** directory, structured as `features/surveys/...`, `features/common/...`.
  - **shared**: This directory contains all the components and functionalities shared across all the project. Is divided by features as `shared/surveys/...`, `shared/common/...`
  - **layout**: Components used as layouts wrappers.

### Main patters

The most relevant patterns used in the project:
- **Singleton pattern**: initialize a single instance of the data services.
- **Observer pattern**: used in the dumb components of the application to notify the main container when the survey script needs to be updated.

### Routing

The routing pattern used is **lazy-loading** with @NgModules. It is based on loading modules on demand and helps keep the initial bundle size smaller, decreasing loading times. 


## Assumptions
  - The requirement "The script should be saved every time the user adds a new question" may lead to certain usability problems. If I'm not wrong, this requirement states that the question should only save when the user click the "Add" button. This may lead to a corner case where: The user adds a question, fills the question, and leaves the page. This results on not all the data has been saved.
  I have implemented that the survey is saved whenever the user changes some data of the question, the update method is called every time the user stops to write for one second.

  - The requirement "For each question, the user can type the options that will be available. Each option would begin with a hyphen '-'." I assumed that the idea of hyphen was mainly to parse the data and know what style it should have in a textarea or canvas (list or title types). Even so, if my assumption is not mistaken I believe that solution would leave to extra validations and possible bugs (For example, what would happen if the title starts with a hyphen?). Even then, I implemented that the hyphen is added when sending the survey data to the API, and replaced when retrieved. For this feature I used Angular Forms simulating the functionality of a normal notepad editor: (Add new option when enter is pressed, delete an option is backspace is pressed and the field is empty, set a minimum of two options per question, etc...). I am aware that there are some tools and editors suchs as [editorjs](https://editorjs.io/getting-started/) that simplify the task, but as this is a technical test I think it is more appropriate to develop as much code as possible in my own handwriting.
  
  - I'm not used to Figma, because in my current job I mostly use Adobe XD, so I had some problems to find my   way around. Leaving that aside, I implemented the design being as strict as possible.

  - I implemented certain animations that were not in the figma design.
  - I have used only scss without using external libraries. The same reasoning as the editor problem, as this is a technical test I think it is more appropriate to develop as much code as possible in my own handwriting.
  
## Suggestions

The survey builder is a powerful tool, but I identified several areas for improvement during implementation. I have some great ideas that could significantly enhance its capabilities.
  - Delete button for a survey in the survey dashboard.
  - Delete button for a question.
  - Use of a tool like [editorjs](https://editorjs.io/getting-started/).
  - Add a search bar inside the survey to filter the questions. If a survey has a lot of questions, it can be cumbersome to have to search for it by scrolling.
  - Use of css libraries such as [tailwindcss](https://tailwindcss.com/docs/installation) or creating a corporate theme library. 
  - Shareable surveys that can be modified in real time within among the members of a team.
  - Survey title and description editable. **Implemented**
  - Notify the user when the question is being saved, like in Microsoft Word with the warning "Saving...". **Implemented**
  - Components library with a Storybook.
  - Use libraries such as tailwindcss and bootstrap to enhance the responsive design.
  - Follow a good semantic order in HTML views, helping screen readers users.
  - Could be made a font for the icons and so not have to rely on assets or libraries of icons, and can be reused in other projects. 
  - Create angular material theme to share color scheme between projects.
  - Internationalization of texts, increases the geographical range of product users.

## Possible improvements to my code

  - SCSS variables files.
  - Create a custom component per question type.
  - Allow to delete any the options, not only the last of the list. This 'bug' is caused due to the way the questionId is assigned. The dynamic FormControls are generated using the sequential questionId value which is the index on the list, this can cause duplication problems of the FormControls. Changing the questionId to a unique id can solve this problem an allow to delete any option. 
  - Better TDD.
  - Use of signals and data streams.
  - Better variable names.

## Problems faced

  - The SurveyDto provided in Swagger was not correct, that lead me to generate a wrong survey.
  - I had little time to perform the technical test, so I see several areas for improvement:
    - The question editor should have a different editor for each type of question (currently the same component is used for single and multiple choice). I had this approach in mind from the beginning but due to lack of time I decided to leave it aside in order to deliver the rest of the project on time.
    - It is very likely that some kind of validation for a specific use case is missing.
    - I added animations but not as many as I would like.
    - The dashboard is very simple.
  - What took me most time was to make a form really look like a text editor, plus thinking through all the cases of deleting and adding options.
  - I tried to do the states and data streams with signals but as I had not used them until now I saw that I was going to spend a lot of time on it. Still, once I was done with the main functionality, I implemented the search bar of the question type modal with signals. (**Every day we learn something new**:sparkles:)

## Project analysis procedure

The following is the process I followed to analyze and implement the project:
1. I read the description of the task a couple of times and wrote down the points that raised the most doubts.
2. Checked the API to see what format the data being sent and returned in the services were in.
3. I tried to use signals but gave up due to the lack of time and never having used them before.
4. I thought about how to structure the project modules and how to organize the application components by layers.
5. I created data mocks and integrated the basic functionality of how the question editor would work, without any styling with plain html.
6. I implemented the css styles.
7. I made a basic version of the dashboard.
8. Finally, I integrated the services.
9. After all these steps, once I had a complete product, I started to refine it.
10. After finishing everything, I had not yet made the selector search bar because I thought I would not have time, but as I had time I implemented it.
11. In the end I implemented a toolbar to navigate to the survey dashboard in the question editor.

## Lighthouse report

You can access the Lighthouse report of the deployed version on the following link.

[https://empathy-lighthouse.guillefun.com](https://empathy-lighthouse.guillefun.com)

**Warning :warning:**  
<sub>If the URL fails maybe its due to the DNS files still processing. Try with this one
[https://empathy-lighthouse.vercel.app](https://empathy-lighthouse.vercel.app)</sub> 
