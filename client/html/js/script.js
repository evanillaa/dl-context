let ButtonsData = [];
let Buttons = [];
let Button = [];

window.addEventListener("message", (event) => {
    if (event.data.type === "open_context") {
        CreateContext(event.data.data)
    };
});

function CreateContext(data) {
    ButtonsData = data;
    for (let i = 0; i < ButtonsData.length; i++) {
        let id = ButtonsData[i].id;
        let label = ButtonsData[i].label;
        let description = ButtonsData[i].description;
        let element = $(`<div class="button" id=` + id +`><div class="header" id=` + id +`>` + label + `</div><div class="desc" id=` + id + `>` + description + `</div></div>`);
        $("#buttons").append(element);
        Buttons[id] = element;
        if (ButtonsData[i].settings) {
            Button[id] = ButtonsData[i].settings
        };
    };
};

function CloseContext() {
    for (let i = 0; i < ButtonsData.length; i++) {
        let id = ButtonsData[i].id
        $(".button").remove();
    }
    ButtonsData = [];
    Buttons = [];
    Button = [];
};

function CancelContext() {
    $.post(`https://dl-context/CloseContext`)
    CloseContext();
};

function OnClick(id) {
    $.post(`https://dl-context/OnClick`, JSON.stringify(Button[id]))
    CloseContext();
};

$(document).click(function(event){
    let $target = $(event.target);
    if ($target.closest(".button").length && $(".button").is(":visible")) {
        let id = event.target.id;
        if (!Button[id]) return 
        OnClick(id);
    }
});

document.onkeyup = function(data) {
    if (data.which == 27) {
        CancelContext();
    }
};