$(".middle").wrap("<div class='container'></div>");
$("code").wrap("<pre></pre>");
$("[class$='-icon']").each(function(){var a=$(this).attr("class").split(" ").pop().replace("-icon","");$("[class$='-icon']").prepend(`<img src="/assets/icons/${a}.svg"></img>`)});