import * as React from "react";

const ManagementPage = () => {
    return (
        <section>
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
            <button id="open-leafs">Открыть</button>
            <button id="close-leafs">Закрыть</button>
            <button id="rotate-leafs">Поворот</button>
        </div>
        </div>
        <div className="info-box">
        <div className="info-block">
            <div className="element-info">
                <img src="img/test.jpeg" className="element-image" />
            </div>
            <div className="element-description">
                Описание элемента
            </div>
        </div>
        <div className="info-fields">
        <fieldset>Просмотр элемента
            <label>Элемент: </label>
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
