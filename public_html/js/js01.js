/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global s */

jQuery(document).ready(function ($) {

    var $toggle = $('#nav-toggle');
    var $menu = $('#nav-menu');

    $toggle.click(function () {
        $(this).toggleClass('is-active');
        $menu.toggleClass('is-active');
    });

    $('.modal-button').click(function () {
        var target = $(this).data('target');
        $('html').addClass('is-clipped');
        $(target).addClass('is-active');
    });

    $('.modal-background, .modal-close').click(function () {
        $('html').removeClass('is-clipped');
        $(this).parent().removeClass('is-active');
    });

    $('.modal-card-head .delete, .modal-card-foot .button').click(function () {
        $('html').removeClass('is-clipped');
        $('#modal-ter').removeClass('is-active');
    });

    var $highlights = $('.highlight');

    $highlights.each(function () {
        var $el = $(this);
        var copy = '<button class="copy">Copy</button>';
        var expand = '<button class="expand">Expand</button>';
        $el.append(copy);

        if ($el.find('pre code').innerHeight() > 600) {
            $el.append(expand);
        }
    });

    var $highlightButtons = $('.highlight .copy, .highlight .expand');

    $highlightButtons.hover(function () {
        $(this).parent().css('box-shadow', '0 0 0 1px #ed6c63');
    }, function () {
        $(this).parent().css('box-shadow', 'none');
    });

    $('.highlight .expand').click(function () {
        $(this).parent().children('pre').css('max-height', 'none');
    });

    new Clipboard('.copy', {
        target: function (trigger) {
            return trigger.previousSibling;
        }
    });

});



$(document).ready(function () {
    $("#search").click(function () {
        $("#search").hide(300);
        $(".menu-list-child").hide(300);
        $("#times").show(300);
        $("#input-text").show(300);

    });
    $("#times").click(function () {
        $("#times").hide(300);
        $("#search").show(300);
        $(".menu-list-child").show(300);
        $("#input-text").hide(300);
    });

    $(".button-login").click(function () {
        $(".login-form").fadeToggle("fast");
    });


    $(".exit").click(function () {
        $(".login-form").hide(300);
    });
    $(".exit-icon").click(function () {
        $(".login-form").hide(300);
    });

    $(".hideShowMenu").click(function () {
        $(".nav-menu").fadeToggle(300);
    });



    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $(".button-login").click(function () {
                $(".nav-menu").hide("fast");
            });
        }
    });
});



$(document).scroll(function () {
    var dHeight = $(this).height() - $(window).height();
    if (dHeight >= $(this).scrollTop()) {
        $('.fade').css('background', 'rgba(25,25,25,' + ($(this).scrollTop() * 10) / dHeight + ')');
    }
});



$(document).ready(function () {
    var count = 0;
    $(".add-to-cart").click(function () {
        count++;
        $(".buy-number").html(count);
        $(".buy-number").show(300);
    });

});


$(function () {
    $("img.img-load-by-jqll").lazyload({
    });
});