$('button').on('click', userEnterBtn);
$('.delete').on('click', '.delete', userDeleteBtn);

// var quality = ["swill", "plausible", "plausible", "genius" ]
// for(var i =0; i<quality.length; i++)



function userEnterBtn(e){
  e.preventDefault(); 
  var title = $('.idea-input').val();
  var body = $('.body-input').val();

  $('.cards').prepend(
      `<article class='idea'>
       <h2>${title}</h2> 
       <p>${body}</p> <hr />
       <button class='upvote'></button>
       <button class='downvote'></button>
       <button class='delete'></button>
      </article>`);
  $('.idea-input').val("");
  $('.body-input').val("");
  $('.idea-input').focus();
  $('.button').attr("disabled", true);
}









