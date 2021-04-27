const ELEMENTS_SELECTOR = {
    tel: '#inputTel',
    email: '#inputEmail'
};

const CLASSES = {

};

export default function inputMask() {
    $(document).ready(function(){
        $(ELEMENTS_SELECTOR.email).inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: false,
            definitions: {
                '*': {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                    casing: "lower"
                }
            }
        });
        $(ELEMENTS_SELECTOR.tel).inputmask({
            mask: "+7 (999)999-99-99",
        });
    })
}