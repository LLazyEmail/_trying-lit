import displayFactory from './factory';
import displayFactoryTwo from './factoryTwo';



// @TODO we need to finalize this file, so we can accept real data, not just static title...

// partials
import misc from 'atherdon-newsletter-js-layouts-misc';

import headStylesComponent from '../components/headStyles';

import headComponent from '../components/headComponent';



const { fontsComponent } = misc;

const title = `The Secrets of High-Performing DevOps teams`;

const ERROR_TITLE = '`title` is a required option for `renderTemplate`';

const checkingTitle = (title) => {
    if (!title) {
        throw new Error(ERROR_TITLE);
    }
}

// console.log(misc)


//variant one
const settings = {
  component: headComponent,
  params: { 
    title,
    headStyles: headStylesComponent(),
    fonts: fontsComponent() 
   },
  
}




const Factory = new displayFactoryTwo();

// Factory.create(settings);

// console.log(Factory);


export default Factory.create(settings);


// const DisplayHead = {
//   component: headComponent,
//   params: { title, headStylesComponent, fontsComponent },
//   display: () => {
      
// //         return headComponent(title, headStyles, fonts);
//   },
//   checks: () => [
    
//       // checkingTitle(this.params.title)
