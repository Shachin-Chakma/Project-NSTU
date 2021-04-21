// Page Redirect Script Start
$(function () {
    document
        .getElementById("myBtn")
        .addEventListener("click", function () {
            redirect(this.getAttribute("data-page"));
        });

    $('button:nth-child(1)')
        .click(function () {
            redirect($(this).attr('data-page'));
        });
})

function redirect(url) {
    console.log(url);
    window.location = url;
}
// Page Redirect Script End