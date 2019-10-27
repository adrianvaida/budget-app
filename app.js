// BUDGET CONTROLLER

var budgetController = (function () {

    // Some code

})();

// UI CONTROLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add_btn'
    }

    return {
        getinput: function () {

            return {
                type: document.querySelector(DOMstrings.inputType).value,  // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
            
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings;

    var ctrlAddItem = function () {

        // 1. get the field input data

        var input = UICtrl.getinput();

        // 2. add the item to the budget controller
        // 3. add the ithem to the UI
        // 4. calculate the budget
        // 5. display te budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', function () {

        ctrlAddItem();

    });

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);