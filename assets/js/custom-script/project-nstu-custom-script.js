// Page Redirect Script Start
function helper(id) {
    document
        .querySelector(`.myBtn${id}`)
        .addEventListener("click", function () {
            redirect(this.getAttribute("data-page"));
        });
        redirect(this.getAttribute("data-page"));

    $('button:nth-child(1)')
        .click(function () {
            redirect($(this).attr('data-page'));
        });
}

function redirect(url) {
    console.log(url);
    window.location = url;
}
// Page Redirect Script End