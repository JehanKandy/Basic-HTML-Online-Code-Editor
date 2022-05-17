const run = document.querySelector(".run-btn"),
    iframe = document.querySelector(".iframe"),
    editor = document.querySelector(".editor");

run.addEventListener("click", () => {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
    lineNumbers: true

})