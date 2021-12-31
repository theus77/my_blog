'use strict';
// const $ = require('jquery');
// window.$ = $;
// window.jQuery = $;
// const AOS = require('aos');

import adminMenu from '@elasticms/admin-menu';
import '../css/app.scss';
import {drawioPreviewer} from './module/drawio'

adminMenu();

// AOS.init({anchorPlacement:'top-left',duration:1000});

document.addEventListener('ems-preview', function (event){
    console.log('ems-preview loaded!');
    drawioPreviewer();
});

(function() {
    console.log('CV website loaded!');
    drawioPreviewer();
})();