import { Link } from "react-router-dom";

export function LinkButton(props) {
  return (
    <Link
      to={props?.path}
      className={`border border-2 py-1 border-blue-500 bg-blue-500 rounded hover:bg-blue-900 duration-300 hover:text-white ${props.className}`}
    >
      {props.children}
    </Link>
  );
}
export function OutlineLinkButton(props) {
  return (
    <Link
      to={props?.path}
      className={`border border-2 py-1 border-blue-600 rounded hover:bg-blue-500 duration-300 hover:text-white ${props.className}`}
    >
      {props.children}
    </Link>
  );
}
