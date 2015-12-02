
/* ------------------------------------------------------------------------------
    T E Y L E R S
--------------------------------------------------------------------------------- */


function updateQuantity(way){
    var quantity = parseInt($('div.buyable input.cart_item_count').val());

    if (way == 'up'){
        if (quantity < 448){
            quantity++;
        } else {
            quantity = 448;
        }
    } else {
        if (quantity > 1){
            quantity--;
        } else {
            quantity = 1;
        }
    }

    $('div.buyable input.cart_item_count').val(quantity);
}

$(document).ready(function() {
    if ($("body").hasClass('template-advancedsearch')) {
        $("#advanced_search_form").submit(function() {
            $('input').each(function() {
                if ($(this).val() == '') {
                    $(this).attr("name", '');
                }
            });
        });
    }
});

