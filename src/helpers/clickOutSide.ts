import { bindingValue } from '@/types/helpers'

export function clickOutSide(el: HTMLElement, binding: any) {
    const uniqueEventId = Math.round(new Date().getTime() * Math.random())
    const bindingValue: bindingValue = binding.value
    const selector = bindingValue.customRootSelection ?  bindingValue.customRootSelection: el.classList
    const app = document.querySelector('#app')
    function checkParent(e: any) {
        if (e.detail && e.detail.id === uniqueEventId) {
            const pathList = e.detail.path
            const clickForCurrentElem = pathList.find((element: any) => {
                if (element.className && typeof element.className === 'string' && element.className.includes(selector)) {
                    return true
                }
                return false
            })
            if (!clickForCurrentElem) {
                bindingValue.callback()
                app?.removeEventListener(`click_${uniqueEventId}`, checkParent)
                app?.removeEventListener('click', dispatchEvent)
            }
            
        }
    }

    function dispatchEvent(event: Event) {
        app?.dispatchEvent(new CustomEvent(`click_${uniqueEventId}`, {
            detail: {
                id: uniqueEventId,
                path: event.composedPath()
            }
        }))
    }
    app?.addEventListener(`click_${uniqueEventId}`, checkParent)
    app?.addEventListener('click', dispatchEvent)
}