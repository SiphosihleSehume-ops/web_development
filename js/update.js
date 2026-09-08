var unorderedList = document.getElementById("languages");

unorderedList.onclick = function(event) {
    let language = event.target.innerHTML;
    let selection = document.getElementById("selection");
    selection.innerHTML = "You chose " + language + " as a programming language";
}