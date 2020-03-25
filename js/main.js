
function tellStory() {
    let lowerArray = (val) => val.toLowerCase();
    let errorMsg = '';
    var nouns =  document.getElementById('nouns');
    var nounsArray = nouns.value.split(/\s+/);
    var lowerNouns = nounsArray.map(lowerArray);
    console.log(lowerNouns)
  // console.log(nouns.value);
    lowerNouns = removeEmpty(lowerNouns);
    if (lowerNouns.length < 3){
        errorMsg += "Not enough nouns<br/>";
    }
    console.log(lowerNouns);


   var adjectives =  document.getElementById('adjectives');
   var adjectivesArray = adjectives.value.split(/\s+/);
   var lowerAdjs = adjectivesArray.map(lowerArray);
 // console.log(adjectives.value);
   lowerAdjs = removeEmpty(lowerAdjs);
   if(lowerAdjs.length < 3){
     errorMsg += "Not enough adjectives<br/>";
   }
   console.log(lowerAdjs);


  var verbs =  document.getElementById('verbs');
  var verbsArray = verbs.value.split(/\s+/);
  var lowerVerbs = verbsArray.map(lowerArray);
// console.log(verbs.value);
  lowerVerbs = removeEmpty(lowerVerbs);
  if(lowerVerbs.length < 3){
    errorMsg += "Not enough verbs<br/>";
  }
  console.log(lowerVerbs);



    const myStory = `Once upon a time there were four ${lowerNouns[0]}s named 
    Jeff, Bob, Bill and Frank.  They were all very ${lowerAdjs[0]}.  Except 
    for Frank.  Frank was more ${lowerAdjs[1]}.  Jeff liked to ${lowerVerbs[0]}.  Bob liked
    to ${lowerVerbs[1]}.  Bill and Frank preffered to ${lowerVerbs[2]}.  But all of them liked ${lowerNouns[1]}s.
    Sometimes for fun, they would pretend they were ${lowerNouns[2]}s.  That made them all feel ${lowerAdjs[2]}.`



   console.log (myStory);
document.querySelector('#story')

   if(errorMsg == ''){
   story.innerHTML = myStory;
   }else{
    story.innerHTML = errorMsg;
   }
    


    // get a reference to the querySelector('#story') = myStory
} 

function removeEmpty(arr){
    let newArr = [];
    for(let el of arr){
        if(el != ""){
            newArr.push(el);
        }
    }
    return newArr;
}


