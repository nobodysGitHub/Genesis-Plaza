import * as ui from '@dcl/ui-scene-utils'
import { screenSpaceUI } from './modules/ui'


export type SupportConfig={
    iconPath:string
    destinationUrl:string
    promptDescription:string
    promptButtonText:string
    hAllign: "left" | "center" | "right"
    vAllign: "top" | "center" | "bottom"
    positionX: number
    positionY: number
    width: number 
    height: number
}
 

export function initGameSupportUI(support: SupportConfig){
    log("InitGameSupport has been called")
    let prompt = new ui.OkPrompt(
        support.promptDescription,
        () => {
            openExternalURL(support.destinationUrl)
        },
        support.promptButtonText,
        false
    )
    prompt.hide()
 
    let open = false

  

    const clickableImage333 = new UIImage(screenSpaceUI, new Texture('images/ui/support_icon.png'))
    clickableImage333.hAlign = support.hAllign
    clickableImage333.vAlign = support.vAllign
    clickableImage333.width = support.width
    clickableImage333.height = support.height
    clickableImage333.positionX = support.positionX
    clickableImage333.positionY = support.positionY
    clickableImage333.sourceWidth = 36
    clickableImage333.sourceHeight = 36
    clickableImage333.isPointerBlocker = true
    clickableImage333.onClick = new OnPointerDown(() => {
        if(open){
            open = false
            prompt.hide()
        }else{
            open = true
            prompt.show()
        }
    })
}