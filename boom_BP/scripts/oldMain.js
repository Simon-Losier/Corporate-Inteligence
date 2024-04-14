import {world} from "@minecraft/server"
import { ActionFormData } from "@minecraft/server-ui"

const ui = new ActionFormData()
    .title("Form")
    .body("")
    .button("button1")
    .button("button2")
    .button("button3");

const customUi = new ActionFormData()
    .title("Terminal")
    .body("[MEMO]\n\nTo: [Recipient's Name: Mr. Johnson]\nFrom: [Your Name: Frank Smith], Head Engineer\nDate: [Date: March 17, 2024]\n\nSubject: Approval for X-ray Testing on Class D Personnel\n\nMr. Johnson,\n\nI'm seeking approval to proceed with X-ray testing on Class D personnel. This is crucial for assessing equipment integrity. Safety measures will be minimal.\n\nBest,\nFrank Smith"
    )
    .button("Close");

world.afterEvents.itemUse.subscribe( (event) => {
    const { source, itemStack} = event
    switch (itemStack.typeId) {
        case "minecraft:compass": ui.show(source); break;
        case "minecraft:clock": customUi.show(source); break;
    }
})

world.beforeEvents.playerInteractWithBlock.subscribe(function () {
    world.sendMessage("A player broke a block!")
})