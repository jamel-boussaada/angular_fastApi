/**
* Quantity Discount Pro
*
* NOTICE OF LICENSE
*
* This product is licensed for one customer to use on one installation (test stores and multishop included).
* Site developer has the right to modify this module to suit their needs, but can not redistribute the module in
* whole or in part. Any other use of this module constitues a violation of the user agreement.
*
* DISCLAIMER
*
* NO WARRANTIES OF DATA SAFETY OR MODULE SECURITY
* ARE EXPRESSED OR IMPLIED. USE THIS MODULE IN ACCORDANCE
* WITH YOUR MERCHANT AGREEMENT, KNOWING THAT VIOLATIONS OF
* PCI COMPLIANCY OR A DATA BREACH CAN COST THOUSANDS OF DOLLARS
* IN FINES AND DAMAGE A STORES REPUTATION. USE AT YOUR OWN RISK.
*
*  @author    idnovate.com <info@idnovate.com>
*  @copyright 2020 idnovate.com
*  @license   See above
*/

if (typeof updateCartSummary === 'function') {
    updateCartSummary = (function() {
        var updateCartSummaryCached = updateCartSummary;

        return function(json) {
            updateCartSummaryCached.apply(this, arguments);

            if (json && !$.isEmptyObject(json.discounts)) {
                for (i=0; i<json.discounts.length; i++) {
                    if ($('#cart_discount_' + json.discounts[i].id_cart_rule).length === 0) {
                        if (priceDisplayMethod !== 0)
                            var discountedPrice = formatCurrency(json.discounts[i].value_tax_exc * -1, currencyFormat, currencySign, currencyBlank);
                        else
                            discountedPrice = formatCurrency(json.discounts[i].value_real * -1, currencyFormat, currencySign, currencyBlank);

                        if ($('#cart_summary').length) {
                            var discountTd = " \
                                <tbody> \
                                    <tr class='cart_discount last_item' id='cart_discount_"+json.discounts[i].id_cart_rule+"'> \
                                        <td class='cart_discount_name' colspan='3'>"+json.discounts[i].name+"</td> \
                                        <td class='cart_discount_price'><span class='price-discount'>"+discountedPrice+"</span></td> \
                                        <td class='cart_discount_delete'>1</td> \
                                        <td class='cart_discount_price'><span class='price-discount price'>"+discountedPrice+"</span></td> \
                                        <td class='price_discount_del'></td> \
                                    </tr> \
                                </tbody>";

                            $('#cart_summary').append(discountTd);
                        } else if ($('#opc-cart_summary').length) {
                            //Advanced checkout module
                            var discountTd = " \
                                <tbody> \
                                    <tr class='cart_discount' id='cart_discount_"+json.discounts[i].id_cart_rule+"'> \
                                        <td class='cart_discount_name cart_description' colspan='3'>"+json.discounts[i].name+"</td> \
                                        <td class='cart_unit'> \
                                            <!-- <div class='mobile_table_title visible-phone'>Unit price b</div> \
                                            <div class='mobile_table_content'> \
                                                <span class='price-discount price'> \
                                                    "+discountedPrice+" \
                                                </span> \
                                            </div> --> \
                                        </td> \
                                        <td></td> \
                                        <td class='cart_discount_delete'> \
                                            <!-- <div class='mobile_table_title visible-phone'>Qty</div> \
                                            <div class='mobile_table_content'>1</div> --> \
                                        </td> \
                                        <td class='cart_total'> \
                                            <div class='mobile_table_title visible-phone'>Total</div> \
                                            <div class='mobile_table_content'> \
                                                <span class='price-discount price'> \
                                                    "+discountedPrice+" \
                                                </span> \
                                            </div> \
                                        </td> \
                                        <td class='price_discount_del'> \
                                            <div class='mobile_table_title visible-phone'></div> \
                                            <div class='mobile_table_content'> \
                                                "+ (json.discounts[i].code ? "<a onclick='deldisc("+json.discounts[i].id_cart_rule+")' class='price_discount_delete'><i class='fa-trash  fa'></i></a>" : "") +" \
                                            </div> \
                                        </td> \
                                    </tr> \
                                </tbody>";

                            $('#opc-cart_summary').append(discountTd);

                        }
                    }
                }
            }

            if (json && $.isEmptyObject(json.gift_products)) {
                $('#cart_summary [id ^=product_][id $=gift]').remove();
            }
        };
    })();
}

if (typeof prestashop === "function") {
    $('body.page-cart').on('click', $('.btn-touchspin'), function() {
        $('.btn-touchspin').attr('disabled', 'disabled')
    });

    prestashop.on('updatedProduct', function () {
        $('.btn-touchspin').removeAttr("disabled");
    });
}

if (typeof upQuantity === "function") {
    function upQuantity(id, qty)
    {
        $('.cart_quantity_up').off('click').on('click', function(e){
            e.preventDefault();
        });

        if (typeof(qty) == 'undefined' || !qty)
            qty = 1;
        var customizationId = 0;
        var productId = 0;
        var productAttributeId = 0;
        var id_address_delivery = 0;
        var ids = 0;
        ids = id.split('_');
        productId = parseInt(ids[0]);
        if (typeof(ids[1]) !== 'undefined')
            productAttributeId = parseInt(ids[1]);
        if (typeof(ids[2]) !== 'undefined' && ids[2] !== 'nocustom')
            customizationId = parseInt(ids[2]);
        if (typeof(ids[3]) !== 'undefined')
            id_address_delivery = parseInt(ids[3]);

        $.ajax({
            type: 'POST',
            headers: { "cache-control": "no-cache" },
            url: baseUri + '?rand=' + new Date().getTime(),
            async: true,
            cache: false,
            dataType: 'json',
            data: 'controller=cart'
                + '&ajax=true'
                + '&add=true'
                + '&getproductprice=true'
                + '&summary=true'
                + '&id_product=' + productId
                + '&ipa=' + productAttributeId
                + '&id_address_delivery=' + id_address_delivery
                + ((customizationId !== 0) ? '&id_customization=' + customizationId : '')
                + '&qty=' + qty
                + '&token=' + static_token
                + '&allow_refresh=1',
            success: function(jsonData)
            {
                if (jsonData.hasError)
                {
                    var errors = '';
                    for(var error in jsonData.errors)
                        //IE6 bug fix
                        if(error !== 'indexOf')
                            errors += $('<div />').html(jsonData.errors[error]).text() + "\n";
                    if (!!$.prototype.fancybox)
                        $.fancybox.open([
                        {
                            type: 'inline',
                            autoScale: true,
                            minHeight: 30,
                            content: '<p class="fancybox-error">' + errors + '</p>'
                        }],
                        {
                            padding: 0
                        });
                    else
                        alert(errors);
                    $('input[name=quantity_'+ id +']').val($('input[name=quantity_'+ id +'_hidden]').val());
                }
                else
                {
                    if (jsonData.refresh)
                        window.location.href = window.location.href;
                    updateCartSummary(jsonData.summary);
                    if (window.ajaxCart != undefined)
                        ajaxCart.updateCart(jsonData);
                    if (customizationId !== 0)
                        updateCustomizedDatas(jsonData.customizedDatas);
                    updateHookShoppingCart(jsonData.HOOK_SHOPPING_CART);
                    updateHookShoppingCartExtra(jsonData.HOOK_SHOPPING_CART_EXTRA);
                    if (typeof(getCarrierListAndUpdate) !== 'undefined')
                        getCarrierListAndUpdate();
                    if (typeof(updatePaymentMethodsDisplay) !== 'undefined')
                        updatePaymentMethodsDisplay();
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                if (textStatus !== 'abort')
                {
                    error = "TECHNICAL ERROR: unable to save update quantity \n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus;
                    if (!!$.prototype.fancybox)
                        $.fancybox.open([
                        {
                            type: 'inline',
                            autoScale: true,
                            minHeight: 30,
                            content: '<p class="fancybox-error">' + error + '</p>'
                        }],
                        {
                            padding: 0
                        });
                    else
                        alert(error);
                }
            }

        }).done(function() {
            $('.cart_quantity_up').off('click').on('click', function(e){
                e.preventDefault();
                upQuantity($(this).attr('id').replace('cart_quantity_up_', ''));
                $('#' + $(this).attr('id').replace('_up_', '_down_')).removeClass('disabled');
            });
        });
    }
};

if (typeof downQuantity === "function") {
    function downQuantity(id, qty)
    {
        $('.cart_quantity_down').off('click').on('click', function(e){
            e.preventDefault();
        });

        var val = $('input[name=quantity_' + id + ']').val();
        var newVal = val;
        if(typeof(qty) == 'undefined' || !qty)
        {
            qty = 1;
            newVal = val - 1;
        }
        else if (qty < 0)
            qty = -qty;

        var customizationId = 0;
        var productId = 0;
        var productAttributeId = 0;
        var id_address_delivery = 0;
        var ids = 0;

        ids = id.split('_');
        productId = parseInt(ids[0]);
        if (typeof(ids[1]) !== 'undefined')
            productAttributeId = parseInt(ids[1]);
        if (typeof(ids[2]) !== 'undefined' && ids[2] !== 'nocustom')
            customizationId = parseInt(ids[2]);
        if (typeof(ids[3]) !== 'undefined')
            id_address_delivery = parseInt(ids[3]);

        if (newVal > 0 || $('#product_' + id + '_gift').length)
        {
            $.ajax({
                type: 'POST',
                headers: { "cache-control": "no-cache" },
                url: baseUri + '?rand=' + new Date().getTime(),
                async: true,
                cache: false,
                dataType: 'json',
                data: 'controller=cart'
                    + '&ajax=true'
                    + '&add=true'
                    + '&getproductprice=true'
                    + '&summary=true'
                    + '&id_product='+productId
                    + '&ipa='+productAttributeId
                    + '&id_address_delivery='+id_address_delivery
                    + '&op=down'
                    + ((customizationId !== 0) ? '&id_customization='+customizationId : '')
                    + '&qty='+qty
                    + '&token='+static_token
                    + '&allow_refresh=1',
                success: function(jsonData)
                {
                    if (jsonData.hasError)
                    {
                        var errors = '';
                        for(var error in jsonData.errors)
                            //IE6 bug fix
                            if(error !== 'indexOf')
                                errors += $('<div />').html(jsonData.errors[error]).text() + "\n";
                        if (!!$.prototype.fancybox)
                            $.fancybox.open([
                                {
                                    type: 'inline',
                                    autoScale: true,
                                    minHeight: 30,
                                    content: '<p class="fancybox-error">' + errors + '</p>'
                                }],
                                {
                                    padding: 0
                                });
                        else
                            alert(errors);
                        $('input[name=quantity_' + id + ']').val($('input[name=quantity_' + id + '_hidden]').val());
                    }
                    else
                    {
                        if (jsonData.refresh)
                            window.location.href = window.location.href;
                        updateCartSummary(jsonData.summary);

                        if (window.ajaxCart !== undefined)
                            ajaxCart.updateCart(jsonData);
                        if (customizationId !== 0)
                            updateCustomizedDatas(jsonData.customizedDatas);
                        updateHookShoppingCart(jsonData.HOOK_SHOPPING_CART);
                        updateHookShoppingCartExtra(jsonData.HOOK_SHOPPING_CART_EXTRA);

                        if (newVal == 0)
                            $('#product_' + id).hide();

                        if (typeof(getCarrierListAndUpdate) !== 'undefined')
                            getCarrierListAndUpdate();
                        if (typeof(updatePaymentMethodsDisplay) !== 'undefined')
                            updatePaymentMethodsDisplay();
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    if (textStatus !== 'abort')
                        alert("TECHNICAL ERROR: unable to save update quantity \n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus);
                }
            }).done(function() {
                $('.cart_quantity_down').off('click').on('click', function(e){
                    e.preventDefault();
                    downQuantity($(this).attr('id').replace('cart_quantity_down_', ''));
                });
            });;

        }
        else
        {
            deleteProductFromSummary(id);
        }
    }
};
