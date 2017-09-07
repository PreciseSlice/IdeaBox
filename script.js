var globalArray = [];
var ideaCard = {};

$('button').on('click', userEnterBtn);
$('.bottom').on('click', '.delete', userDeleteBtn);
$('.cards').on('click', '.upvote', upvote);
$('.cards').on('click', '.downvote', downvote);

  getFromStorage();
  prependStoredCards();


$('.search').on('keyup', searchFilter);


function searchFilter(){
  var searchInput = $('.search').val().toLowerCase();
  console.log(searchInput)
  var searchTitle = $('h2');
  var searchBody = $('p');

for (var i = 0; i<$('article').length ; i++){
  var currentArticle = searchTitle[i].innerHTML + searchBody[i].innerHTML;
  if (currentArticle.toLowerCase().indexOf(searchInput) > -1){
    $('article')[i].style.display = "";
  }else{
    $('article')[i].style.display = "none";
    }
  }
}

function sendToStorage() {
  localStorage.setItem('ideaCard', JSON.stringify(globalArray))
  // localStorage.setItem('ideaCard.quality', JSON.stringify
}

function getFromStorage() {
  globalArray = JSON.parse(localStorage.getItem("ideaCard")); 

}

function removeFromStorage(id) {
getFromStorage();
var index = globalArray.findIndex( function(idea) {
  return idea.id === id;
});
 globalArray.splice(index, 1);
 sendToStorage()
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

function userDeleteBtn(event) {
  event.preventDefault();
  var deleteDomCard = $(this).parents('.idea');
  var id = deleteDomCard.prop('id');
  console.log(id)
  removeFromStorage(id);
  deleteDomCard.remove();
}

function userEnterBtn(e){
  e.preventDefault();
  var title = $('.idea-input').val();
  var body = $('.body-input').val();

  ideaCard = new Idea(title,body);
  globalArray.push(ideaCard);
  console.log(ideaCard);
    $('.cards').prepend(

      `<article id='${ideaCard.id}' class='idea' role="container for idea cards">
        <div class="top-of-card" role="container for styling top of idea cards">
          <h2>${ideaCard.title}</h2> 
          <button class='delete'></button>
        </div>
        <p>${ideaCard.body}</p>
        <div class="bottom-of-card" role="container for styling bottom of idea cards">  
          <button class='upvote'></button>
          <button class='downvote'></button>
          <h3>Quality: ${ideaCard.quality}<h3>
        </div>
      </article>`);
  
  $('.idea-input').val("");
  $('.body-input').val("");
  $('.idea-input').focus();
  $('.button').attr("disabled", true);
  sendToStorage();
}

function prependStoredCards () {
  for (var i = 0; i < globalArray.length; i++) {
        $('.cards').prepend(
      `<article id='${globalArray[i].id}' class='idea'>
         <h2 contenteditable="true"> ${globalArray[i].title}</h2> 
         <p contenteditable="true"> ${globalArray[i].body}</p>
         <button class='upvote'></button>
         <button class='downvote'></button>
         <button class='delete'></button>
         <h3>Quality: ${globalArray[i].quality}<h3>
      </article>`);
  }
}

function upvote() {
    if (ideaCard.quality === 'swill') {
   $(this).parent().find('h3').text('plausible');
   ideaCard.quality = ('plausible');
   sendToStorage();
   


  } else if(ideaCard.quality === 'plausible'){
    console.log('else if');
    $(this).parent().find('h3').text('genius');
    ideaCard.quality = ('genius');
    sendToStorage();
  } 
}

function downvote() {
  if (ideaCard.quality === 'genius') {
    $(this).parent().find('h3').text('plausible');
    ideaCard.quality = ('plausible');

  } else if (ideaCard.quality === 'plausible'){
    $(this).parent().find('h3').text('swill');
    ideaCard.quality = ('swill');
    sendToStorage();
  }
}
