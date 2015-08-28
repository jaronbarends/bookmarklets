var $hoursBody = $('#projecttable2').find('tbody');

var toggleNext = function($tr) {
  var $nextTr = $tr.next();
  
  if ($nextTr.hasClass('ptaak')) {
      idx = $nextTr.index();
      $nextPlanningTr = $hoursBody.find('tr').eq(idx);
    
      $nextTr.toggle();
      $nextPlanningTr.toggle();
    
      toggleNext($nextTr);
  }
}

var toggleHandler = function(e) {
  var $tr = $(e.currentTarget).closest('tr');
  
  toggleNext($tr);
};

var init = function() {
  $('tr.project').find('a')
    .not('.highlight-project')
    .removeAttr('onmousedown')
    .on('click',toggleHandler);
};

init();