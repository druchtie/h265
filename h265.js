var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();


//ffmpeg -i video.mov -strict -2 -c:v libx265 -preset slow  -tag:v hvc1  -profile:v main10 test.mp4

 alert( f.path)

ffmpeg(f.path)
  .videoCodec('libx265')	
  .size('?x1080')
  .outputOptions(['-strict -2' ,'-tag:v hvc1','-profile:v main10'])
  .output('h265.mp4')


  .on('end', function() {
    console.log('Finished processing');
  })
  .run();
  
  

