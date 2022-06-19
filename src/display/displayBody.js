// import factory from './factory';
import displayFactoryTwo from './factoryTwo';

import previewTextComponent from "../components/previewText";

import { logoBottomComponent, logoTopComponent } from "atherdon-newsletter-js-layouts-body"

import EmailTemplateBodyComponent from '../components/body';


import footerString from '../display/displayFooter';


const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';

const checkingBodyContent = (bodyContent) => {
    if (!bodyContent) {
        throw new Error(ERROR_BODY);
    }
}



// note that footer param here is a subcomponent, 
// so we passing footerDisplay instead of just a component


let addon1 = {
    footer: footerString,

    logoTop:logoTopComponent(), 
    logoBottom: logoBottomComponent(), 
    content: '[[THIS IS PLACE FOR A CONTENT INSIDE]',
    previewText: previewTextComponent('[AMA PREVIEW TEXT]')

}


//variant one
const settings = {
    component: EmailTemplateBodyComponent,
    // params: { footerComponent, logoTop, logoBottom, content },
    params: addon1,
    // subcomponents: {  }
    
}

const BodyFactory = new displayFactoryTwo();

export default BodyFactory.create(settings);