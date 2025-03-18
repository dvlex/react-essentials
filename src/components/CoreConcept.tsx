import { ICoreConcept } from '../data';

export function CoreConcept(props: ICoreConcept) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
