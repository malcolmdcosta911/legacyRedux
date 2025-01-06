type Todo = {
  desc: string;
  completed: boolean;
  id: number;
};

type TodoAction = {
  type: string;
  payload: Partial<Todo>;
};

//Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'.ts(1205)
export type { Todo, TodoAction };
