import React,{useEffect,useState} from "react";
//import api from "./services/api";

function App() {
  const [obj, setObj] = useState([])
  useEffect(async () => {
    await fetch("http://localhost:8081/api-relatorio")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setObj(data.recordset
          )
      })
  })
  return (
    <center>
      <div className="main">
          <table>
            <tr>
              <th>Codigo</th>
              <th>Produto</th>
              <th>Linha</th>
              <th>Fornecedor</th>
              <th>Situacao</th>
              <th>PrecoV</th>
              <th>qtdvenda</th>
              <th>MDV</th>
              <th>Margem</th>
              <th>Desvio</th>
              <th>emb0</th>
              <th>emb1</th>
              <th>emb2</th>
              <th>maxddv</th>
              <th>cue</th>
              <th>alt0</th>
              <th>comp0</th>
              <th>larg0</th>
              <th>alt1</th>
              <th>comp1</th>
              <th>larg1</th>
              <th>alt2</th>
              <th>comp2</th>
              <th>larg2</th>
            </tr>
            {obj.map((o,index) => {
              return(
                <tr key={index}>
                  <td>{o.Codigo}</td>
                  <td>{o.Produto}</td>
                  <td>{o.Linha}</td>
                  <td>{o.Fornecedor}</td>
                  <td>{o.Situacao}</td>
                  <td>{o.PrecoV}</td>
                  <td>{o.qtdvenda}</td>
                  <td>{o.MDV}</td>
                  <td>{o.Margem}</td>
                  <td>{o.Desvio}</td>
                  <td>{o.emb0}</td>
                  <td>{o.emb1}</td>
                  <td>{o.emb2}</td>
                  <td>{o.maxddv}</td>
                  <td>{o.cue}</td>
                  <td>{o.alt0}</td>
                  <td>{o.comp0}</td>
                  <td>{o.larg0}</td>
                  <td>{o.alt1}</td>
                  <td>{o.comp1}</td>
                  <td>{o.larg1}</td>
                  <td>{o.alt2}</td>
                  <td>{o.comp2}</td>
                  <td>{o.larg2}</td>
                </tr>
              )
            })} 
        </table>
      </div>
    </center>
  );
}

export default App;
