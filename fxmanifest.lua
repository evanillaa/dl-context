fx_version "cerulean"

game "gta5"

ui_page "client/html/index.html"

files {
    "client/html/index.html",
    "client/html/css/style.css",
    "client/html/js/script.js",
}

client_script "client/main.lua"

exports {
    "OpenContext"
}