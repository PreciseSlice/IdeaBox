var globalArray = []
var ideaCard = {};

$('button').on('click', userEnterBtn);
$('.bottom').on('click', '.delete', userDeleteBtn);
$('.cards').on('click', '.upvote', upvote);
$('.cards').on('click', '.downvote', downvote);

function sendToStorage() {
  localStorage.setItem('ideaCard.id', JSON.stringify(globalArray))
}

// send objects.. pass in the id and pass in the ideaCard object

function getFromStorage() {
  globalArray = JSON.parse(localStorage.getItem("idArray")); 
}

// for loop and interate thru the global array and getfromstorage(id)
// append that ideaCard

// for (var i = globalArray.length; i++) {
//   var ideaCardFromStorage = localStorage.getItem(globalArray[i]);
//   prepend( {$ideaCardFromStorage.title})
// }

function Idea(title, body) {
  this.id=Date.now();
  this.title= title;
  this.body= body;
  this.quality='swill';
}

function userDeleteBtn() {
  console.log($(this).parent());
  $(this).parents('.idea').remove();
  localStorage.removeItem($(this).parent().prop('id'));
}



// window.localStorage.setItem()

// contenteditable="true"

// function userEnterBtn(e){
//   e.preventDefault(); 
//   var title = $('.idea-input').val();
//   var body = $('.body-input').val();

//   $('.cards').prepend(
//       `<article class='idea'>
//          <h2>${title}</h2> 
//          <p>${body}</p> <hr />
//          <button class='upvote'></button>
//          <button class='downvote'></button>
//          <button class='delete'></button>
//          <h3>Quality:<h3>
//       </article>`);
//   $('.idea-input').val("");
//   $('.body-input').val("");
//   $('.idea-input').focus();
//   $('.button').attr("disabled", true);
// }

function userEnterBtn(e){
  e.preventDefault();
  var title = $('.idea-input').val();
  var body = $('.body-input').val();
  ideaCard = new Idea(title,body);
  globalArray.push(ideaCard);
  console.log(ideaCard);
    $('.cards').prepend(
      `<article id='${ideaCard.id}' class='idea'>
         <h2>${ideaCard.title}</h2> 
         <p>${ideaCard.body}</p> <hr />
         <button class='upvote'></button>
         <button class='downvote'></button>
         <button class='delete'></button>
         <h3>Quality: ${ideaCard.quality}<h3>
      </article>`);
  $('.idea-input').val("");
  $('.body-input').val("");
  $('.idea-input').focus();
  $('.button').attr("disabled", true);
  sendToStorage();
}

function upvote() {
    if (ideaCard.quality === 'swill') {
   $(this).parent().find('h3').text('plausible');
   ideaCard.quality = ('plausible');

  } else if(ideaCard.quality === 'plausible'){
    console.log('else if')
    $(this).parent().find('h3').text('genius');
    ideaCard.quality = ('genius');
  } 
}

function downvote() {
  if (ideaCard.quality === 'genius') {
    $(this).parent().find('h3').text('plausible');
    ideaCard.quality = ('plausible');

  } else if (ideaCard.quality === 'plausible'){
    $(this).parent().find('h3').text('swill');
    ideaCard.quality = ('swill');
  }
}











