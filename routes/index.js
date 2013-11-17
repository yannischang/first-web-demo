
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(    //
      'index',   //view資料兆夾的index.ejs
        { 
            title: 'Hello World' 
        }
    );
};

exports.demo = function(req, res){
  res.render(    //
      'demo.ejs',   //view資料兆夾的demo.ejs
        { 
            title: 'This is Demo page' ,
            header: 'demo demo demo demo ...'
        }
    );
};

exports.app = function(req, res){
  res.render(    //
      'bootstrap.ejs',   //view資料兆夾的demo.ejs
        { 
            title: 'This is Bootstrap' ,
            content: 'many many many content ...'
        }
    );
};