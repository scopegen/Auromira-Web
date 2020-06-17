$('.video_placeholder, .video_button').on('click', function() {
    if ( !$('#video-player').length ) {
      var video = '<iframe id="video-player" src="' + $('.video_placeholder').attr('data-video') + '" frameborder="0" allowfullscreen wmode="opaque"></iframe>';
      $(video).insertAfter( $('.video_placeholder') );
      $('.video_button').addClass('is-playing');
    } else {
      $('.video_button').removeClass('is-playing');
      $('#video-player').remove();
    }
  });