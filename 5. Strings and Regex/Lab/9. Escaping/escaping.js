function escaping(array) {

    let container = [];

    for (let i = 0; i < array.length; i++) {
        let text = array[i]
            .replace(/&/gm, "&amp;")
            .replace(/</gm, '&lt;')
            .replace(/>/gm, "&gt;")
            .replace(/"/gm, "&quot;");

        container.push(text);
    }

    console.log("<ul>");
    for (let output of container) {
        console.log(`  <li>${output}</li>`);
    }
    console.log("</ul>");
}

escaping(['<b>unescaped text</b>', 'normal text']);