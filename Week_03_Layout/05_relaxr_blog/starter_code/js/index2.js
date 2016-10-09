// $(function(){
// 	$('.read_more').click(function(){
// 		readmore();
// 	});

// 	function readmore(text)
// 	{
// 		$('.text').innerHTML()
// 	}
// 	});


document.getElementById('read_more1').onclick = function()
{
	document.getElementById('blog_text1').innerHTML = document.getElementById('blog_text1').innerHTML + "<br><br>Duis convallis ante quam, a accumsan eros rutrum eget. In eget mollis orci. In hac habitasse platea dictumst. Nullam eget cursus tellus, at porttitor quam. Quisque vulputate fermentum magna, tempus convallis diam ultricies eu. Mauris sit amet diam lacus. Sed nunc nibh, dapibus eu orci non, malesuada hendrerit nibh. Vestibulum in pulvinar velit. Nulla blandit diam enim, at gravida magna iaculis eu. Curabitur vehicula magna eget volutpat pulvinar. Aliquam sed varius erat.";
	document.getElementById('read_more1').innerHTML = "";
	document.getElementById('readLess1').innerHTML = "&lt; Read Less";
}

document.getElementById('readLess1').onclick = function()
{
	document.getElementById('blog_text1').innerHTML = "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus finibus diam. Etiam dignissim ullamcorper hendrerit. Mauris feugiat nisi quis elit pellentesque fringilla. Donec dignissim pulvinar nulla, ac accumsan arcu. Curabitur vehicula sapien sit amet massa eleifend finibus. Nulla feugiat felis eget justo consectetur, sed faucibus ligula lacinia. Morbi commodo in eros at viverra. Ut tincidunt dui sit amet congue faucibus. Quisque vel quam eu turpis faucibus porttitor non sed turpis. Curabitur arcu libero, vehicula sit amet augue at, scelerisque iaculis ligula. Quisque lacinia ac massa ut porttitor. Aenean pulvinar massa et gravida ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Praesent semper bibendum urna nec fringilla. Ut dapibus leo in ante bibendum lacinia.";
	document.getElementById('readLess1').innerHTML = "";
	document.getElementById('read_more1').innerHTML = "Read More &gt;";
}

document.getElementById('read_more2').onclick = function()
{
	document.getElementById('blog_text2').innerHTML = document.getElementById('blog_text1').innerHTML + "<br><br>Duis convallis ante quam, a accumsan eros rutrum eget. In eget mollis orci. In hac habitasse platea dictumst. Nullam eget cursus tellus, at porttitor quam. Quisque vulputate fermentum magna, tempus convallis diam ultricies eu. Mauris sit amet diam lacus. Sed nunc nibh, dapibus eu orci non, malesuada hendrerit nibh. Vestibulum in pulvinar velit. Nulla blandit diam enim, at gravida magna iaculis eu. Curabitur vehicula magna eget volutpat pulvinar. Aliquam sed varius erat.";
	document.getElementById('read_more2').innerHTML = "";
	document.getElementById('readLess2').innerHTML = "&lt; Read Less";
}

document.getElementById('readLess2').onclick = function()
{
	document.getElementById('blog_text2').innerHTML = "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus finibus diam. Etiam dignissim ullamcorper hendrerit. Mauris feugiat nisi quis elit pellentesque fringilla. Donec dignissim pulvinar nulla, ac accumsan arcu. Curabitur vehicula sapien sit amet massa eleifend finibus. Nulla feugiat felis eget justo consectetur, sed faucibus ligula lacinia. Morbi commodo in eros at viverra. Ut tincidunt dui sit amet congue faucibus. Quisque vel quam eu turpis faucibus porttitor non sed turpis. Curabitur arcu libero, vehicula sit amet augue at, scelerisque iaculis ligula. Quisque lacinia ac massa ut porttitor. Aenean pulvinar massa et gravida ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Praesent semper bibendum urna nec fringilla. Ut dapibus leo in ante bibendum lacinia.";
	document.getElementById('readLess2').innerHTML = "";
	document.getElementById('read_more2').innerHTML = "Read More &gt;";
}