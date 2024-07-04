function selectRating(element) {
    const buttons = document.querySelectorAll(".rating-item");
    buttons.forEach(button => {
        button.classList.remove("selected")
    });
    element.classList.add('selected');
};

function submitForm() {
    window.location.href = 'thanks.html';
}