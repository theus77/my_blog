'use strict';
// const $ = require('jquery');
// window.$ = $;
// window.jQuery = $;
// const AOS = require('aos');

import adminMenu from '@elasticms/admin-menu';
import '../css/app.scss';
import {drawioPreviewer} from './module/drawio'
// import Plausible from 'plausible-tracker'

adminMenu();

// AOS.init({anchorPlacement:'top-left',duration:1000});

document.addEventListener('ems-preview', function (event){
    console.log('ems-preview loaded!');
    drawioPreviewer();
});

// const { trackPageview } = Plausible({
//     domain: 'mathieu.dekeyzer.net',
//     apiHost: 'https://analytics.theus.be'
// })

// trackPageview();
//
// const assetLinks = document.querySelectorAll("a[href$='.pdf']");
// for (let i = 0; i < assetLinks.length; i++) {
//     assetLinks[i].addEventListener("click", function(){
//         trackPageview({
//             url: this.href
//         });
//     });
// }

(function() {
    console.log('CV website loaded!');
    drawioPreviewer();
})();
