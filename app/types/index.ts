export type BaseButtonPropsType = {
  title?: string,
  actions?: (() => void) | ((...args: any[]) => void),
  isDisable? : boolean
}

export interface BaseInputPropsType extends BaseButtonPropsType {
  value: string,
  placeholder?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TaskButton = {
  title?: string,
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

export type FormData = {
  username: string,
  email: string,
  password: string
}

export type FormErrors = {
  username?: string,
  email?: string,
  password?: string
}

export type UserData = {
  name: string, 
  email: string, 
  phone: string
}

export type TableDataHeader = {
  key: keyof UserData,
  title: string
}

export type TableDataPropsType = {
  displayHeader: TableDataHeader[]
  title: string
  searchValue: string
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  dataList: UserData[]
}