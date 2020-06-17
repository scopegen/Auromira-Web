$('.ytvideo[data-video]').one('click', function() {

    var $this = $(this);
    var width = $this.attr("width");
    var height = $this.attr("height");
    $this.html('<iframe src="https://www.youtube.com/embed/1N0jqHMVWJo?autoplay=1' + $this.data("video") + '?autoplay=0"></iframe>');
    });