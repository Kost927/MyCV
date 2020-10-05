import {TextBlock, TitleBlock} from './classes/blocks'
import { text, proj, academy, english, goit } from './constants'

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