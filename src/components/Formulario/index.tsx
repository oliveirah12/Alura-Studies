import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'



class Formulario extends React.Component{

    state = {
        tarefa: "",
        tempo: "00:00"
    }
    
    render(){
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que estudar?" 
                        required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempos">Tempo</label>
                    <input 
                        type="time" 
                        step="1" 
                        name="tempo" 
                        id="tempo" 
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        min="00:00:00" 
                        max="01:30:00"/>
                </div>
                <Botao>Adicionar</Botao>
            </form>
           
        )
    }
}

export default Formulario