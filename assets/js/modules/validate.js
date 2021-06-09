const ELEMENTS_SELECTOR = {
    form: '#form'
};

const CLASSES = {

};

export default function () {
    $(ELEMENTS_SELECTOR.form).validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                minlength: 11,

            }
        },
        messages: {
            email: {
                required: 'Укажите почту'
            },
            tel: {
                required: 'Телефон указана неверно'
            }
        }
    });
}