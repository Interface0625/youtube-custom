
var replaceThumbs = function(){
	var clearChildren = function(e){ while( e.hasChildNodes() ){ e.removeChild( e.lastChild ); } };
	Array.prototype.forEach.call(document.querySelectorAll('.yt-lockup-thumbnail'), function(container){
		var a = container.querySelector('a'), image, videoFrame;
		if(a){
			image = container.querySelector('img');
			image.onclick = function(){
				//videoFrame = '<iframe width='+c.clientWidth+' height='+c.clientHeight+' src="https://www.youtube.com/v/'+a.href.split('?v=')[1]+'?rel=0&autoplay=1">';
				videoFrame = document.createElement('iframe');
				videoFrame.width = container.clientWidth;
				videoFrame.height = container.clientHeight;
                videoFrame.id = 'player';
				videoFrame.src = 'https://www.youtube.com/v/${videoId}?rel=0&autoplay=1'.replace('${videoId}', a.href.split('?v=')[1]);
				clearChildren(container);
				container.appendChild(videoFrame); 
			};
			clearChildren(container);
			container.appendChild( image );
		}
	});
};
replaceThumbs();