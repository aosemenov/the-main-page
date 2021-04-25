/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';
import 'slick-carousel/slick/slick.min';
import 'dotdotdot/src/js/jquery.dotdotdot.min';
/**
 * Modules
 */
import dotText from './modules/dotdotdot';
import slickSlider from './modules/slick-slider';
import handleTitleClick from './modules/my-module';

const app = {
    ready() {
        dotText();
        handleTitleClick();
        slickSlider();
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
