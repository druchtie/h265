var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

document.getElementById("cbt").addEventListener('click', convert);


function convert(){
	var encoding = document.getElementById('encoding');
    var type = document.getElementById('type');
    var resolution = document.getElementById('resolution');  
    
 var vids = document.getElementsByTagName('source') 
// vids is an HTMLCollection
for( var i = 0; i < vids.length; i++ ){ 
    var videopath = vids.item(i).src;
}

var dir = videopath.substring(0, videopath.lastIndexOf("."));

  
     
 ffmpeg(videopath)
		  .videoCodec('libx265')	
		  .size('?x' + resolution.value)
		  .videoBitrate(400000)
		  .outputOptions(['-strict -2' ,'-tag:v hvc1', '-tune ' + type.value, '-preset ' + encoding.value, '-profile:v main10'])
		  .output(dir + '-h265.mp4')
	

		  .on('progress', function(progress) {
	var percent = Math.round(progress.percent);


	})
	
  .on('end', function() {

  })
  
.run();
  

};
     


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






document.addEventListener('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      
      for (let f of e.dataTransfer.files) {

	  var path = f.path;
//	 var dir = path.substring(0, path.lastIndexOf("."));
	  
	document.getElementById("video").innerHTML= '<video controls><source src="'+path+'"></video>';	
	event.dataTransfer.dropEffect = 'none';

  
      }
});
    
    
document.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
});





