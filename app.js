// BUDGET CONTROLLER

var budgetController = (function () {

    // Some code

})();

// UI CONTROLLER
var UIController = (function () {

    // SOME CODE

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        // 1. get the field input data
        // 2. add the item to the budget controller
        // 3. add the ithem to the UI
        // 4. calculate the budget
        // 5. display te budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', function () {

        ctrlAddItem();

    });

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {

            ctrlAddItem();

        }
    });

})(budgetController, UIController);