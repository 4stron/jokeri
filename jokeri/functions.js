document.addEventListener("DOMContentLoaded", function () {
    var table = document.querySelector("table");
    var paragraph = document.querySelector("p");
    var button = document.querySelector("button");

    var arvotutRivit = 0;

    button.addEventListener("click", function () {
        generateJokeriRow();
    });

    function generateJokeriRow() {
        var jokeriRow = [];

        for (var i = 0; i < 7; i++) {
            var randomNumber = Math.floor(Math.random() * 10);
            jokeriRow.push(randomNumber);
        }

        addRowToTable(jokeriRow);
        arvotutRivit++;
        updateParagraph();
    }

    function addRowToTable(rowData) {
        var row = table.insertRow();
        for (var i = 0; i < rowData.length; i++) {
            var cell = row.insertCell();
            cell.textContent = rowData[i];
        }
    }

    function updateParagraph() {
        paragraph.textContent = "Valmiita rivejä " + arvotutRivit;
    }
});