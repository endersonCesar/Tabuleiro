import Subdivisao from './Subdivisao';
import sytle from '../styles/Linha.module.css';
export default function Linha(props) {
  return (
    <div className={sytle.linha}>
      <Subdivisao preta={props.preta}></Subdivisao>
      <Subdivisao preta={!props.preta}></Subdivisao>
      <Subdivisao preta={props.preta}></Subdivisao>
      <Subdivisao preta={!props.preta}></Subdivisao>
      <Subdivisao preta={props.preta}></Subdivisao>
      <Subdivisao preta={!props.preta}></Subdivisao>
      <Subdivisao preta={props.preta}></Subdivisao>
      <Subdivisao preta={!props.preta}></Subdivisao>
    </div>
  );
}
