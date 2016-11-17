$(document).ready(function(){
 // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
 $('.modal-trigger').leanModal();

 $(".video-select").click(function(){
    
    $("#nowPlaying").attr("src", "downloads/" + $(this).attr("data"));
});

});
