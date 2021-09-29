let ButtonsData = [];
let Buttons = [];
let Button = [];

window.addEventListener("message", (event) => {
    switch (event.data.action) {
        case "open_context":
            OpenContext(event.data.data);
            break;
        case "close_context":
            CloseContext();
            break;
        default:
        return;
    }
});

function OpenContext(data) {
    CreateContext(data);
};

function CreateContext(data) {
    ButtonsData = data;
    for (let i = 0; i < ButtonsData.length; i++) {
        let header = ButtonsData[i].label;
        let message = ButtonsData[i].description;
        let id = ButtonsData[i].id;
        let element = $(`<div class="button" id=` + id +`><div class="header" id=` + id +`>` + header + `</div><div class="desc" id=` + id + `>` + message + `</div></div>`);
        $("#buttons").append(element);
        Buttons[id] = element;
        if (ButtonsData[i].settings) {
            Button[id] = ButtonsData[i].settings;
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
        OnClick(id)
    }
});

document.onkeyup = function(data) {
    if (data.which == 27) {
        CancelContext();
    }
};