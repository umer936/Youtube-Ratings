var process = function(item){
  return function(data, textStatus){
    var likes = parseInt(($('.likes', data)[0].innerHTML).replace(',', ''));
    var dislikes = parseInt(($('.dislikes', data)[0].innerHTML).replace(',', ''));
    var total = likes + dislikes;
    var ratio = likes / total;
    item.append("<div>" + ratio + "</div>");
  };
};

var go = function(){
  var links = $('.related-video');
  for(var linkIndex in links){
    var item = $(links[linkIndex]);
    var url = item.attr('href');    
    console.log(item);
    console.log(url);
    if(url === undefined){
      break;
    }
    $.get("http://www.youtube.com" + url,
           process(item),
           true,
           "text"
          );
  }  
}

go()