var process = function(item){
  return function(data, textStatus){
    var likes = parseInt(($('.likes', data)[0].innerHTML).replace(',', ''));
    var dislikes = parseInt(($('.dislikes', data)[0].innerHTML).replace(',', ''));
    var total = likes + dislikes;
    var ratio = likes / total;
    node = $(document.createElement('div'));
    node.css({'height': '4px', 'width': '100px', 'background': 'red', 'display': 'inline', 'overflow': 'hidden', 'position': 'absolute', 'left': '133px'})
    inner = $(document.createElement('div'));
    inner.css({'height': '4px', 'width': ratio * 100 + "px", 'background': 'green', 'display': 'inline', 'overflow': 'hidden', 'position': 'absolute'})
    item.append(node);
    $(node).prepend(inner);
  };
};

var go = function(){
  var links = $('.related-video');
  for(var linkIndex in links){
    var item = $(links[linkIndex]);
    var url = item.attr('href');    
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