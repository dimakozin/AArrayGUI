export const eel = window.eel
const webSocketURL = 'ws://localhost:8000'
if(!!eel){
  eel.set_host( webSocketURL )
}

export default eel