export default function Todo({ title, removeTodo }) {
  return (
    <li className="todo_item" onClick={() => removeTodo(title)}>
      {title}
    </li>
  );
}