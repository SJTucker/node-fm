'use strict';

exports.index = function(req, res){
  res.render('album/index', {title: 'Album Template'});
};