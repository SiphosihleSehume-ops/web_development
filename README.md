# web_development

## Useful Web Development notes 

* `function(event)` - this function recieves an event object. 

* `event` contains information about what just happened i.e. a click, keypress, mouse movement, etc.

* `event.target` refers to the actual HTML element that triggered the event

* `currentTarget` refers to the element the event handler is attached to.

* `alert` a JS browser function that will display a modal pop-up. `someVariable.innerHTML

## Cascading Style-Sheets

* `id` meant to identiy one unique element on a page i.e. `#demo`
 
* `class` used on multiple elements. Apply same styling to several elements i.e. `.freestyle`

# Flexbox

* Example HTML code;

```
<section class="freestyle">
    <p>[1]<p/>
    <p>[2]<p/>
    <p>[3]<p/>
<section/>
```

* Example CSS code: 

```
.container {
    display: flex;
    ...
}
```
* Flexbox is  a CSS layout system for arranging elements along one dimension:
- `horizontally` -> a row
- `vertically` -> a column

* `Horiontal flex` - set flex direction to row: 

* `gap` allows for elements inside the container to have space between them. 

* `align items`:
- Along the main axis (`left to right`): 

`justify-content: center;`. Common values include `flex-start, center, flex-end, space-between, space-around, space-evenly`.

- Along the cross axis (`top to bottom`):

`align-items: center;`. Common values `stretcflex-start, center, flex-end`. 

* `flex-wrap: wrap` allows items to move onto multiple lines if there isn't enough space.

* `flex: 1;` makes items share available space. You can also use `flex-grow, flex-shrink, flex-basis: 200px;`. 

* `align-self: center;` change an items alignment.