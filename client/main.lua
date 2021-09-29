function OpenContext(content)
    if not content then return end
    SetNuiFocus(true, true)
    SendNUIMessage({action = "open_context", data = content})
end

RegisterNUICallback("OnClick", function(content, cb)
    SetNuiFocus(false, false)
    if content.server then
        if content.args ~= nil then
            for id, v in pairs(content.args) do
                TriggerServerEvent(content.event, v)
            end
            return
        end
        TriggerServerEvent(content.event)
        return
    end
    if content.args ~= nil then
        for id, v in pairs(content.args) do
            TriggerEvent(content.event, v)
        end
        return
    end
    TriggerEvent(content.event)
end)

RegisterNUICallback("CloseContext", function()
    SetNuiFocus(false)
end)