$('.form-control').each(function() {
    $(this).on('change', function() {
      let $imgSVG = $(this).parent().find('.animalgallery');
  
      if ($(this).is(':checked')) {
        $imgSVG.removeClass('none');
      } else {
        $imgSVG.addClass('none');
      }
    });
  });