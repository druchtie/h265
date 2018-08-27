var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();




function convert(){
	var encoding = document.getElementById('encoding');
    var encoding = document.getElementById('type');
    var encoding = document.getElementById('resolution');    


    function getSelectedOption(encoding) {
        var opt;
        for ( var i = 0, len = encoding.options.length; i < len; i++ ) {
            opt = encoding.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }
    
    function getSelectedOption(type) {
        var opt;
        for ( var i = 0, len = type.options.length; i < len; i++ ) {
            opt = type.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }   
    

    function getSelectedOption(resolution) {
        var opt;
        for ( var i = 0, len = resolution.options.length; i < len; i++ ) {
            opt = resolution.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }        

    
  //encoding.value + type.value + resolution.value


	
ffmpeg(f.path)
		
		  .videoCodec('libx265')	
		  .size('?x'+resolution.value)
		  .videoBitrate(400000)
		  .outputOptions(['-strict -2' ,'-tag:v hvc1', '-preset'+encoding.value, '-profile:v main10'])
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





