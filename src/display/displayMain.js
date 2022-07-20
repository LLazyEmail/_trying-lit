import { displayFactoryTwo } from 'email-template-object';

import { MainComponent } from '../components';

import headString from '../display/displayHead';

import { BodyHTMLString } from '../display/displayBody';


// title must be passed from the outside
// const title = `The Secrets of High-Performing DevOps teams`;
//     const head = displayHead(title);


//variant one
const settings = {
  component: MainComponent,
  params: { head: headString, body: BodyHTMLString },
};

const MainFactory = new displayFactoryTwo();

let MainHTMLString = MainFactory.create(settings);

export {
  MainFactory,
  settings,
  MainHTMLString,  
};