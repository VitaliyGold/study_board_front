type MessageStyle = 'error' | 'warning' | 'completed'

type MessageType = 'not_ready_functional'

type MainMessageConfig = {
    readonly messageText: string,
    toWrapperSelector: string,
    readonly type: MessageStyle
}

type MessagesDictionary = {
    [Key in MessageType as string]: MainMessageConfig
}

export {
    MainMessageConfig,
    MessageStyle,
    MessageType,
    MessagesDictionary
}