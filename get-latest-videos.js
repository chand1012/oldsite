function show_my_videos(data){
	html = ['<ul id="videos">'];
	$(data.items).each(function(item) {
		id =  item.id;
		description = item.title;
		html.push('<iframe width="560" height="315" src="//www.youtube.com/embed/'+ id +'" frameborder="0" allowfullscreen></iframe>');
	});
	$("#videos").html(html.join(''));
}
// Replace chand1012 with the channel you want
// Change max-results to the number of videos you want to display
$.ajax({
	type: "GET",
	url: "https://gdata.youtube.com/feeds/api/users/chand1012/uploads?max-results=1&orderby=published&v=2&alt=jsonc",
	cache: false,
	dataType:'jsonp',
	success: function(data){
		show_my_videos(data);
		//If you want to see in console...
		console.log(data);
    console.log(data.data.items);
		// });
  }
});
