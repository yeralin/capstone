$ = jquery = Jquery = require("jquery");
require("jQuery-slimScroll");
var githubdata = {};
Chart = require("Chart.js");
fullpage = require("fullpage.js");


$(document).ready(function() {
    //var activeBlock = $(".description-section");
    //var blocksArray = [$(".description-block"), $(".team-block"), $(".sponsors-block"), $(".github-block"), $(".trello-block"), $(".profile-block")];
    var activeBlock_global = $(".current_projects-section");
    var blocksArray_global = [$(".current_projects-block"), $(".school-block"), $(".slack-block")];

    $('.slider').fullpage({
        controlArrows: false,
        loopHorizontal: false,
        keyboardScrolling: false,
        verticalCentered: false
    });
    $(".dashboard-container").bind("scroll", function() {
        if($(this).scrollTop() === 0) { 
            $("a.active").removeClass("scrolled");
        }
        else {
            $("a.active").addClass("scrolled")
        }
    });
    $(".dashboard-container").scrollTop();

    for(i=0; i < blocksArray_project.length; i++){
        blocksArray_project[i].slimScroll({
            height: '92%'
        });
    }
    for(i=0; i < blocksArray_global.length; i++){
        blocksArray_global[i].slimScroll({
            height: '92%'
        });
    }

    
    $(".current_projects-section").on("click", function() {
        $.fn.fullpage.moveTo(0, 0);
        activeBlock_global.removeClass("active");
        $(this).addClass("active");
        activeBlock_global = $(this);
    });
    $(".school-section").on("click", function() {
        $.fn.fullpage.moveTo(0, 1);
        activeBlock_global.removeClass("active");
        $(this).addClass("active");
        activeBlock_global = $(this);
    });
    $(".slack-section").on("click", function() {
        $.fn.fullpage.moveTo(0, 2);
        activeBlock_global.removeClass("active");
        $(this).addClass("active");
        activeBlock_global = $(this);
    });
});
