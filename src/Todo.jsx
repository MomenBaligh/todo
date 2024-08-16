import './Todo.css';
export function Todo({ onChange, id, title, completed, ...todo }) {
  return (
    <li id={id}>
      <input type="checkbox" checked={completed} onChange={onChange} />
      <p className={`${completed ? 'completed' : ''}`}>{title}</p>
    </li>
  );
}
