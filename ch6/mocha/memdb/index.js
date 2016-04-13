var db = [];

exports.save = function(doc, cb){
  db.push(doc);
};

exports.first = function(obj) {
  return db.filter(function(doc){ 
    for (var key in obj) {
      if (doc[key] != obj[key]) { 
        return false;
      }
    }
    return true; 
  }).shift();  
};

exports.clear = function(){
  db = [];
};
