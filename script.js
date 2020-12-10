var rangeSlider = function() {
    var slider = $('.slider'),
        range = $('.range'),
        value = $('.value');

    slider.each(function() {

        value.each(function() {
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function() {
            $(this).next(value).html(this.value);
        });
    });
};

rangeSlider();

function interestCal() {

    var amount = document.getElementById("amount").value;
    var time = document.getElementById("time").value;
    var rate = document.getElementById("rate").value;
    var checkedValue = document.querySelector('.Checkbox:checked').value;

    if (checkedValue == 1) {
        var result = (((amount * rate) / 100) * time) / 12;
    }
    if (checkedValue == 2) {
        var result = (((amount * rate) / 100) * time) / time;
    }
    if (checkedValue == 3) {
        var result = ((amount * rate) / 100) * time;
    }

    var numLKR = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "LKR"
    })

    document.getElementById("result").innerHTML = numLKR.format(result);

}