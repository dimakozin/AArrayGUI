import React from "react";
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import eel from '../../IPC'

// import STLViewer from 'stl-viewer'

import './index.css'

const openLeafs = () => {
    eel.blink_led_py()
}

const ManagementPage = () => {
    return (
    <section className="animate__animated animate__fadeIn">
        <div>
            <div className="managementMenuTitle">
                <h1>Управление макетом</h1>

                <div className="modeToggle">
                    <div className="modeToggleText">
                        <span>Автоматическое</span>
                    </div>
                    <div className="toggle">
                        <Toggle                        
                                className='custom-classname'
                            />
                    </div>
                    <div className="modeToggleText">
                        <span>Ручное</span>
                    </div>
                </div>

            </div>
            <div className="manualManagement">
                <div className="left-leaf">
                    <div className="row">
                        <button className="button-leafManagement">↑</button>
                    </div>
                    <div className="row threeButtons">
                        <button className="button-leafManagement">↻</button>
                        <button className="button-leafManagement smallSize">Левый</button>
                        <button className="button-leafManagement">↺</button>
                    </div>
                    <div className="row">
                        <button className="button-leafManagement">↓</button>
                    </div>
                </div>
                <div className="right-leaf">
                <div className="row">
                        <button className="button-leafManagement">↑</button>
                    </div>
                    <div className="row threeButtons">
                        <button className="button-leafManagement">↻</button>
                        <button className="button-leafManagement smallSize">Правый</button>
                        <button className="button-leafManagement">↺</button>
                    </div>
                    <div className="row">
                        <button className="button-leafManagement">↓</button>
                    </div>
                </div>
            </div>

            <div className="informationTable">
            <table>
            <tr>
                <th> #</th>
                <th> Элемент</th>
                <th> Статус</th>
                <th> Уровень сигнала </th>
            </tr>
            <tr>
                <td>01</td>
                <td>Левый лепесток</td>
                <td className="status-active"> Активен </td>
                <td> ~ 70 Db </td>
            </tr>
            <tr>
                <td>01</td>
                <td>Правый лепесток</td>
                <td className="status-active"> Активен </td>
                <td> ~ 70 Db </td>
            </tr>
            </table>
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
