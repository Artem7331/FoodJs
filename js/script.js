import tabs from './modules/tabs';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';
import { openModal } from './modules/modal'; 

window.document.addEventListener('DOMContentLoaded', () => {

    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-06-04');
    forms('form', modalTimerId);
    cards();
    calc();
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-prev',
        prevArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });

});

