
var datehtml='<input class="date" type="date"></input>';
var checkboxhtml='<input class="checkbox" type="checkbox"></input>'
var removesvg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="348.333px" height="348.334px" viewBox="0 0 348.333 348.334" style="enable-background:new 0 0 348.333 348.334;" xml:space="preserve"><g><path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/></svg>';
var completesvg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26"><path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/></svg>';

// what: detect the click button event and remove the activity
// where: https://github.com/themaxsandelin/todo
// why: to add new items in the todo list and remove them when a button is clicked
// The method is generalized into a short eventlistener so it reuses everytime user click a button
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    addItem(value);
    document.getElementById('item').value='';
  }
});

function removeitem(){
    var retVal = confirm("Did you really finish this activity?");
   if( retVal == true ){
  var item=this.parentNode.parentNode;
  var parent=item.parentNode;
      parent.removeChild(item);
      return true;
    }
  else{
      return false;
}
}

function addItem(text){
  var list=document.getElementById('todo');

  var item=document.createElement('li');
  item.innerHTML=text;

  var buttons=document.createElement('div');
  buttons.classList.add('buttons');

  var date=document.createElement('button');
  date.classList.add('date');
  date.innerHTML=datehtml;

  var remove=document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML=removesvg;

  var checkbox=document.createElement('button');
  checkbox.classList.add('checkbox');
  checkbox.innerHTML=checkboxhtml;

  buttons.appendChild(remove);
  buttons.appendChild(checkbox);
  buttons.appendChild(date);
  item.appendChild(buttons);
  list.appendChild(item);

  remove.addEventListener('click', removeitem);
  //complete.addEventListener('click',completeitem);

}
