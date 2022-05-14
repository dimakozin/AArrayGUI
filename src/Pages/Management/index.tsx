import * as React from "react";
import eel from '../../IPC'
// import STLViewer from 'stl-viewer'

const openLeafs = () => {
    eel.blink_led_py()
}

const ManagementPage = () => {
    return (
    <section className="animate__animated animate__fadeIn">
        <div>
        <table>
        <tr>
            <th> #</th>
            <th> Элемент</th>
            <th> Статус</th>
            <th> Еще какая-то инфа</th>
            <th> Показатели</th>
        </tr>
        <tr>
            <td>01</td>
            <td>Лепестки</td>
            <td className="status-inactive">Открыты</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>01</td>
            <td>Лепестки</td>
            <td className="status-active">Открыты</td>
            <td></td>
            <td></td>
        </tr>
        </table>
        <div className="buttons">
            <button id="open-leafs" onClick={openLeafs}>Открыть</button>
            <button id="close-leafs">Закрыть</button>
            <button id="rotate-leafs">Поворот</button>
        </div>
        </div>
        <div className="info-box">
        <div className="info-block">
            <div className="element-info">
            </div>
        </div>
        <div className="info-fields">
        <fieldset>
            <select name="options" id="names">
            <option value="Reductor">Редуктор</option>
            <option value="Leafs">Лепестки</option>
            <option value="mainbody">Основание</option>
        <input className="send-button" type="button" value="Выбрать"/>
        </select>
        </fieldset>
        </div>
        </div>
  
    </section>                
    )
}

export default ManagementPage
