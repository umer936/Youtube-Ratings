$('.related-list-item').each(function() {
  var video = $(this).find('a').attr('href');
  var url = video.substr(video.indexOf("=") + 1);

  $.get("https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + url + "&key=AIzaSyD93BBY4M3N9zn0szQ-vcZ2qPYx3jS35SU",
    function(data) {
      var likes = parseInt(data.items[0].statistics.likeCount, 10);
      var dislikes = parseInt(data.items[0].statistics.dislikeCount, 10);
      var total = parseInt(likes + dislikes, 10);
      $("<hr style='height:1em; visibility:hidden;' /><div class='video-extras-sparkbars' style='width: 100%'><div class='video-extras-sparkbar-likes' style='width: " + 100 * (likes / (total)) + "%'></div><div class='video-extras-sparkbar-dislikes' style='width: " + 100 * (dislikes / (total)) + "%'></div></div>").insertAfter("a[href='" + video + "'] span.stat.view-count");
    },
    true,
    "json"
  );
});