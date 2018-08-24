var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

document.addEventListener('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      
      for (let f of e.dataTransfer.files) {
        //alert( f.path)
        //var f.path =f.path;
        
        //ffmpeg -i video.mov -strict -2 -c:v libx265 -preset slow  -tag:v hvc1  -profile:v main10 test.mp4
 
var path = f.path;
var dir = path.substring(0, path.lastIndexOf("."));

ffmpeg(f.path)
  .videoCodec('libx265')	
  .size('?x1080')
  .videoBitrate(400000)
  .outputOptions(['-strict -2' ,'-tag:v hvc1', '-preset medium', '-profile:v main10'])
  .output( dir+'-converted.mp4')

  .on('progress', function(progress) {
	  
	  
    //console.log('Processing: ' + progress.percent + '% done');
    
    var percent = Math.round(progress.percent);
    document.getElementsByClassName("percent")[0].innerHTML='Processing: ' + percent + '%';
    document.getElementById('progress').style.width= percent + '%';


    
	})
	
  .on('end', function() {
   	//console.log('Finished processing');
    document.getElementsByClassName("percent")[0].innerHTML='Drag a new file here';
    document.getElementById('progress').style.width= '0%';
  })
  .run();
   
      }
    });
    
    
    document.addEventListener('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });





