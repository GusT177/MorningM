fx_version 'cerulean'
game 'gta5'

author 'Bomdia'
description 'Framework NUI | MorningM'
version '0.0.1'

ui_page './index.html'

files {
    'html/index.html',
    'html/css/*.css',
    'html/js/**/*.js',
    'html/components/*.js'
}

client_scripts {
    './Client.lua'
}

server_scripts {
    './Server.lua'
}