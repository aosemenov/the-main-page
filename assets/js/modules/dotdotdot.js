const ELEMENTS_SELECTOR = {
    dot: '.dot',
};

const CLASSES = {
};

export default function dotText() {
        $(ELEMENTS_SELECTOR.dot).dotdotdot({
            watch: 'window',
            truncate: "letter",
            height: $(ELEMENTS_SELECTOR.dot).css('max-height')
        })
    }
