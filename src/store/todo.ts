import { Todo, TodoAction } from "../models/Todo";
let index = 1;

const TODO_ADD = "todos/add";
const TODO_DELETE = "todos/delete";
const TODO_TOGGLE = "todos/toggle";

//comment code to made indiviual reducers
export default function todosReducer(
  //   state: {
  //     todos: Todo[];
  //   } = { todos: [] },
  state: Todo[] = [],
  action: TodoAction
) {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          id: index++,
          desc: action.payload.desc,
          completed: false,
        },
      ];
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos,
    //       {
    //         id: index++,
    //         desc: action.payload.desc,
    //         completed: false,
    //       },
    //     ],
    //   };
    case TODO_DELETE:
      return state.filter((todo) => action.payload.id !== todo.id);
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => action.payload.id !== todo.id),
    //   };
    case TODO_TOGGLE:
      return state.map((todo) =>
        action.payload.id == todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos.map((todo) =>
    //         action.payload.id == todo.id
    //           ? { ...todo, completed: !todo.completed }
    //           : todo
    //       ),
    //     ],
    //   };
    default:
      return state;
  }
}

export function addTodo(desc: string, store: any): void {
  store.dispatch({
    type: TODO_ADD,
    payload: {
      desc,
    },
  });
}

export function deleteTodo(id: number, store: any): void {
  store.dispatch({
    type: TODO_DELETE,
    payload: {
      id,
    },
  });
}

export function toggleTodo(id: number, store: any): void {
  store.dispatch({
    type: TODO_TOGGLE,
    payload: {
      id,
    },
  });
}
