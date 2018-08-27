var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();



function convert(){
alert('1');	
	
ffmpeg(f.path)
		
		  .videoCodec('libx265')	
		  .size('?x1080')
		  .videoBitrate(400000)
		  .outputOptions(['-strict -2' ,'-tag:v hvc1', '-preset medium', '-profile:v main10'])
		  .output( dir+'-converted.mp4')
	

.on('progress', function(progress) {
	var percent = Math.round(progress.percent);


	})
	
  .on('end', function() {
  	event.dataTransfer.dropEffect = 'link';
  })
  
.run();
  
alert('1');	
};

document.getElementById("cbt").addEventListener('click', convert);





document.addEventListener('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      
      for (let f of e.dataTransfer.files) {

	  var path = f.path;
	  var dir = path.substring(0, path.lastIndexOf("."));
	  
	document.getElementById("video").innerHTML= '<video controls><source src="'+path+'"></video>';	
	event.dataTransfer.dropEffect = 'none';

  
      }
});
    
    
document.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
});





