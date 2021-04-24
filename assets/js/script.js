/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';
import 'slick-carousel/slick/slick.min';
/**
 * Modules
 */
import handleTitleClick from './modules/my-module';
import slickSlider from './modules/slick-slider';

const app = {
    ready() {
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
