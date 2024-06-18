export interface Task {
  id: string;
  title: string;
  description: string;
}
export interface UpdateTask {
  id: string;
  title?: string;
  description?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}