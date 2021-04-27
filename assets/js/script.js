/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';
import 'slick-carousel/slick/slick.min';
import 'dotdotdot/src/js/jquery.dotdotdot.min';
import 'select2';
import 'jquery-validation/dist/jquery.validate.min'
import 'inputmask/dist/jquery.inputmask.min'
/**
 * Modules
 */
import dotText from './modules/dotdotdot';
import slickSlider from './modules/slick-slider';
import handleTitleClick from './modules/my-module';
import select2 from './modules/select2';
import validate from './modules/validate';
import inputMask from './modules/inputmask'

const app = {
    ready() {
        dotText();
        handleTitleClick();
        slickSlider();
        select2();
        validate();
        inputMask();
    },

    load() {
    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
