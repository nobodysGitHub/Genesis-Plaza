import * as ui from '@dcl/ui-scene-utils'


export type SupportConfig={
    iconPath:string
    destinationUrl:string
    promptDescription:string
    promptButtonText:string
    iconPostion: string
    hAllign: "left" | "center" | "right"
    vAllign: "top" | "center" | "bottom"
    positionX: number
    positionY: number
    width: number 
    height: number
}
 

export function initGameSupportUI(support: SupportConfig){
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
    const clickableImage = new UIImage(prompt.canvas, new Texture(support.iconPath))
    clickableImage.hAlign = support.hAllign
    clickableImage.vAlign = support.vAllign
    clickableImage.width = support.width
    clickableImage.height = support.hAllign
    clickableImage.positionX = support.positionX
    clickableImage.positionY = support.positionY
    clickableImage.sourceWidth = 36
    clickableImage.sourceHeight = 36
    clickableImage.isPointerBlocker = true
    clickableImage.onClick = new OnPointerDown(() => {
        if(open){
            open = false
            prompt.hide()
        }else{
            open = true
            prompt.show()
        }
    })
}