import React,  { useState } from "react";
import timeClass from './class'





export default () => {
    const [nomeInput,setnomeInput]  = useState('')
    const [vitoriaInput,setvitoriaInput]  = useState('')
    const [derrotaInput,setderrotaInput]  = useState('')
    const [empateInput,setempateInput]  = useState('')
    

   
    let timesVar : timeClass[] = []
    // timeVar so serve para gerar o tipo do useState, nao consegui ecaixar o tipo com timeClass[]
    let [times, setTimes] = useState(timesVar)
    let id : number = 0

 
    return <>
        <div>
            <h1>CRIAR TIME</h1>
            <span><label htmlFor="">nome</label><input type="text" onChange={(input)=>{setnomeInput(input.target.value) }}/></span>
            <span><label htmlFor="">vitorias</label><input type="number" onChange={(input)=>{setvitoriaInput(input.target.value) }} /></span>
            <span><label htmlFor="">derrotas</label><input type="number" onChange={(input)=>{setderrotaInput(input.target.value) }}/></span>
            <span><label htmlFor="">empates</label><input type="number"  onChange={(input)=>{setempateInput(input.target.value) }}/></span>
            <button onClick={()=>{
                if (!parseInt(vitoriaInput) || !parseInt(empateInput)|| !parseInt(derrotaInput) || !nomeInput)
                {
                    alert("erro")
                } else{
                    
                    setTimes([...times, new timeClass( nomeInput,parseInt(vitoriaInput),parseInt(empateInput),parseInt(derrotaInput)) ]
                    .sort((a,b)=>  b.getPontos() - a.getPontos())) 
                
                }
                    
                    
                
            }}>CRIAR TIME</button>

            <section>
                <h3>Nome</h3>
                <h3>Vitorias</h3>
                <h3>Derrotas</h3>
                <h3>Empates</h3>
                <h3>pontos</h3>
            </section>
            {
                
                // a key é so p nao dar erro
                times.map((time)=>{
                    return <section>
                        <h3>{time.getNome()}</h3>
                        <h3>{time.getVitorias()}</h3>
                        <h3>{time.getempate()}</h3>
                        <h3>{time.getDerrotas()}</h3>
                        <h3> | {time.getPontos()}</h3>
                    </section>
                    
                })
            }
            
        </div>

    </>
}