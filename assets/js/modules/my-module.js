// Пример организации модуля
const ELEMENTS_SELECTOR = {
    tabsItem: '.tabs__item',
    tabsName: '.tabs__name',
    cards: '.cards',
};

const CLASSES = {
    someTabsActive: 'tabs__item--active',
    someCardsActive: 'cards--active',
};

export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.tabsName, handleTitleClick);

    function handleTitleClick() {
        const $tabsName = $(this);
        const $tabsItem = $tabsName.closest(ELEMENTS_SELECTOR.tabsItem);
        $tabsItem.addClass(CLASSES.someTabsActive).siblings().removeClass(CLASSES.someTabsActive);
        const $indexCards = $tabsItem.index();
        const $cards = $(ELEMENTS_SELECTOR.cards).eq($indexCards);
        $cards.addClass(CLASSES.someCardsActive).siblings().removeClass(CLASSES.someCardsActive);
    }
}
