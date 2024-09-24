function OpenNUI()
    SetNuiFocus(true, true)
    SetNuiMessage({
        type = 'open',
        display = true
    })
end

RegisterCommand('morningtest', function()
    OpenNUI()
end, false)

RegisterNUICallback('onNavigate', function(data, cb)
    print("you navigate to: " .. data.route)
    cb('hello')
end)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false, false)
    cb('there')
end)