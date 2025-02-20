import React, { useState } from 'react';
import Formulario from '../components/Formulario/index'
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/Tarefa';



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Cronometro />
        <Lista tarefas={tarefas} />
    </div>
  );
}

export default App;
