$(".middle").wrap("<div class='container'></div>");
$("code").wrap("<pre></pre>");
$("[class$='-icon']").each(function(){var a=$(this).attr("class").split(" ").pop().replace("-icon","");$(this).prepend(`<i class="icon fas fa-${a}"></i>`)});