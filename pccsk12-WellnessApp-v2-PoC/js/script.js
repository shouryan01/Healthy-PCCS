function openPage(page) {
    window.location.href = window.location.href.replace(window.location.href.substring('/' + window.location.href.lastIndexOf('/')), page)
}

function myFunction(){
	document.body.style.backgroundColor = "#343a40";

}

function myFunctionFirst(){
	document.body.style.backgroundColor = "#007bff";

}

$(document),ready(function(){
$(window).animate({scrollTop: $(document).height() + $(window).height()});
})
