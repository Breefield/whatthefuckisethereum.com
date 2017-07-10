(function($){
  function showContent(id) {
    $('#explanations > div').addClass('hidden');
    $('#explanations > #' + id).removeClass('hidden'); 
    history.pushState({}, '', '#' + id);

    $('#audience-select option[value="' + id + '"]').prop('selected', true);
  }

  // Selector logic
  $('#audience-select').on('change', function(e) {
    console.log('Selected:', $(e.target).val());
    showContent($(e.target).val());
  });

  // URL open 
  var hash = window.location.hash;
  if(hash) {
    showContent(hash.replace('#', ''));
  }
  
  console.log('Events initialized');
})(jQuery);
