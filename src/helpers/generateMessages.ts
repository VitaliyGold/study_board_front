import { MainMessageConfig,
    MessagesDictionary,
    MessageType } from '@/types/messageTypes'

const DICT_OF_MESSAGES: MessagesDictionary = {
    not_ready_functional: {
        messageText: 'Данный функционал еще недоступен',
        toWrapperSelector: '',
        type: 'warning'
    }
}

export function GenerateMessages(type: MessageType, selector: string): MainMessageConfig {
    const message = { ...DICT_OF_MESSAGES[type] }
    message.toWrapperSelector = selector

    return message
}