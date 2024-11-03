export type BaseButtonPropsType = {
  title: string,
  actions?: (() => void) | ((...args: any[]) => void),
  isDisable? : boolean
}

export interface BaseInputPropsType extends BaseButtonPropsType {
  value: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TaskButton = {
  title: string,
  path: string
}

export interface CardTodoPropsType extends TodoList {
  deleteList: () => void
  toggleTask: () => void
}

export type TodoList = {
  id: number | null,
  task: string,
  isDone: boolean
}