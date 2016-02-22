
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

function replaceCollectionTable(overrides) {
    var defaults = {
        "sort_on": "sortable_title",
        "b_start:int": $("input[name=b_start]").first().val(),
    };
    var URL = window.location.href.split('?')[0];

    $("#ajax-spinner").attr("style", "display: block !important;")
    $.get(URL, $.extend(defaults, overrides), function(data) {
        var table_collection = $(data).find('#table-collection');
        $("#table-collection").replaceWith(table_collection);
        $("#ajax-spinner").attr("style", "display: none !important;")
    });
}

$.fn.enableTableCollectionReload = function(selector, overrides, prevent) {
    var $target = this;
    if(arguments.count < 3)
        prevent = false;

    $target.delegate(selector, "click", function(event) {
        if(prevent)
            event.preventDefault();
        replaceCollectionTable(overrides);
    });
    return $target;
};

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

    if ($("body").hasClass('template-detailed_tabular_view')) {
        var ccore = $("#content-core");
        ccore.enableTableCollectionReload("#stock-column", { "sort_on": "product_stock"});
        ccore.enableTableCollectionReload("#title-column", { "sort_on": "sortable_title"});
        ccore.enableTableCollectionReload("#articleNumber-column", { "sort_on": "product_articleNumber"});
    }
});

