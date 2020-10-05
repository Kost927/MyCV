import {TextBlock, TitleBlock} from './classes/blocks'

const text = `
I’m looking for a junior position to get a proper background in web development and gain practical skills. I’ve gotten decent skills of HTML/CSS and basic knowledge of JS & React during the intensive full-time course (4 months, 40 hours per week).  My plan is to get the first paid-job in the field max in 6 months. So, now, I want to focus on learning new skills and getting a real-life experience in Front-End.
`


const proj = `<ul>
<li>
<a href="https://bit.ly/2FBj2LS">HELLENGLISH: </a> => CSS_3/HTML_5 => Chrome DevTools, Responsive Web, Mobile First, BEM, Bootstrap 4, SASS, Gulp 
</li>
<li>
<a href="https://bit.ly/3iDVm88">HOME APPLIANCES STORE: </a> => JavaScript=> OOP, ES6+, DOM, NPM, Webpack, REST/JSON, AJAX, CRUD, FireBase DB
</li>
<li>
<a href="https://make-it-habit.netlify.app">MAKE IT HABIT: </a> => React.JS => React (Lazy/Suspense), Redux, React Hooks
</li>
</ul>`

const academy = `<ul>
<li>
End date 2011
</li>
<li>
Foundry production, Master’s degree
</li>
</ul>`

const english = `<ul>
<li>
Course.
</li>
<li>
Training center in Dnipro.
</li>
</ul>`


const goit = `<ul>
<li>
IT Bootcamp.
</li>
<li>
Front end development.
</li>
</ul>`


export const model = [

  new TitleBlock('CAREER GOALS', {
    tag: 'h2',
    styles: {
      color: 'black',
      padding: '1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TextBlock(text, {
    styles: {
      padding: '1rem',
      'font-weight': '500',
      "font-style": 'italic'
    }
  }),

  new TitleBlock('PROJECTS', {
    tag: 'h2',
    styles: {
      color: 'black',
      padding: '1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TextBlock(proj, {
    styles: {
      padding: '1rem',
      'font-weight': '500',
      "font-style": 'italic'
    }
  }),

  new TitleBlock('EMPLOYMENT HISTORY', {
    tag: 'h2',
    styles: {
      color: 'black',
      padding: '1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TitleBlock('English training school', {
    tag: 'h4',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TitleBlock('English teacher (Shanghai, CHINA) 2017 / 08 - 2020 / 03', {
    tag: 'h5',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TextBlock('Was awarded for being the best teacher at the school according to parents’ feedback and the number of students’ assignment.', {
    styles: {
      padding: '1rem',
      'font-weight': '500',
      "font-style": 'italic'
    }
  }),

  new TitleBlock('Epicentr K', {
    tag: 'h4',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TitleBlock('Senior sales consultant 2016 / 03 - 2017 / 07', {
    tag: 'h5',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TextBlock('Became a senior consultant within 6 months after assessment of the work results and passing the tests.', {
    styles: {
      padding: '1rem',
      'font-weight': '500',
      "font-style": 'italic'
    }
  }),

  new TitleBlock('Trubostal', {
    tag: 'h4',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TitleBlock('Head of Planning Production Department(Supply Chain) 2011 / 02 - 2016 / 03', {
    tag: 'h5',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TextBlock('Implemented new approaches for supply analysis to reduce waste, and completing all the production cycle on time to deliver a shipment according to the terms.', {
    styles: {
      padding: '1rem',
      'font-weight': '500',
      "font-style": 'italic'
    }
  }),

  new TitleBlock('ACADEMIC HISTORY', {
    tag: 'h2',
    styles: {
      color: 'black',
      padding: '1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TitleBlock('National Metallurgical Academy', {
    tag: 'h4',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TextBlock(academy, {
    styles: {
      'font-weight': '500',
      "font-style": 'italic'
    }
  }),

  new TitleBlock('English', {
    tag: 'h4',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TextBlock(english, {
    styles: {
      'font-weight': '500',
      "font-style": 'italic'
    }
  }),

  new TitleBlock('GOIT', {
    tag: 'h4',
    styles: {
      color: 'black',
      padding: '0.2rem 1.5rem',
      'text-align': 'left',
      'font-weight': 'black'
    }
  }),

  new TextBlock(goit, {
    styles: {
      'font-weight': '500',
      "font-style": 'italic'
    }
  }),

]