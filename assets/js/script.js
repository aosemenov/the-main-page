/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';
window.onload = function()
{if (window.$)
{ alert('jQuery is loaded'); }}
console.log("Hello world!");
/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';

const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();

        // myModule();
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
