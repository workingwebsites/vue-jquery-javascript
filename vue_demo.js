var vue_choices = new Vue({
        el: '#app', //Attach to element id app
        data: {
            fruits: ["apples", "pears", "peaches", "cherries"],
            veggies: ["lettuce", "peas", "carrots", "tomatoes"],

            //Display
            show_fruits: false,
            show_veggies: false,
        },

        methods: {
            showChoices: function(getChoice) {
                //Set display vars according to choice
                switch (getChoice) {
                    case 'fruit':
                        this.show_fruits = true;
                        this.show_veggies = false;
                        break;
                    case 'veggies':
                        this.show_fruits = false;
                        this.show_veggies = true;
                        break;
                    default:
                        this.show_fruits = false;
                        this.show_veggies = false;
                }
            },

            getSelection: function(selection) {
                showSelection(selection)
            }

        }, // end methods
    }) // end vue