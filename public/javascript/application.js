$(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $('.dropdown-toggle').dropdown();
  $('#myDropdown').on('show.bs.dropdown', function () {
    // do something…
  });

  if(FileReader)
  {
    var uploadInput = $('#exampleInputFile');
    var uploadedImage = $('#uploadedImage');
    var reader = new FileReader();

    uploadInput.on('change', function(e){
      reader.readAsDataURL(this.files[0]);
    });

    reader.onload = function(e)
    {
      uploadedImage.attr('src', e.target.result);
    }
  }
});
