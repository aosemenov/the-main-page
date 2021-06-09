const ELEMENTS_SELECTOR = {
    notifications: '.notifications',
    notification: '.notification'
};

const CLASSES = {
};

export default function slickSlider() {
    const countSlides = 4;
    if ($(ELEMENTS_SELECTOR.notification).length > countSlides) {
        $(ELEMENTS_SELECTOR.notifications).css('display', 'block').slick({
            arrows: false,
            dots: true,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: true,
            mobileFirst: true,
        })
    }
}