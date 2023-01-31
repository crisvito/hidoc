export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
      className={`border border-2 py-1 border-blue-600 bg-blue-600 text-white rounded hover:bg-blue-800 hover:border-blue-800 font-medium tracking-widest duration-300 hover:text-white  ${props.className}`}
    >
      {props.children}
    </button>
  );
}
export function OutlineButton(props) {
  return (
    <button
      className={`border border-2 py-1 border-blue-600 rounded hover:bg-blue-500 duration-300 hover:text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
}
