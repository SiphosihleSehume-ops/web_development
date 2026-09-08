var unorderedLists = document.getElementById("languages");

// Event handler
unorderedLists.onclick = function(event) {
    let list =  event.target;
    // instructs browser to display a `dialog` with an optional message
    alert(list.innerHTML);
}