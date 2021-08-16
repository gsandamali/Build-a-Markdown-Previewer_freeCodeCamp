function updatePrereview(){
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedUpHTML = marked(editorValue);
    previewElement.innerHTML= markedUpHTML;
}


function setDefault(){
    let defaultText =`\
# Welcome to my React Markdown Previewer! <hr>

## This is a sub-heading...<hr>
### And here's some other cool stuff:<br>
    
Here's some code, \`<div></div>\`, between 2 backticks.
    
\`\`\`
// this is multi-line code:
    
function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`
    
You can also make text **bold**... whoa! <br>
Or _italic_. <br>
Or... wait for it... **_both!_** <br>
And feel free to go crazy ~~crossing stuff out~~.<br>
    
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
    
And if you want to get really crazy, even tables:
    
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
    
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
    
    
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
    
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
    `;
    let editorfield = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorfield.value = defaultText;
    previewElement.innerHTML= marked(defaultText);
}