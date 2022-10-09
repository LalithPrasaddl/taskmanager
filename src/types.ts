type Data = {
  modalOpen: ModalOpen;
  editModalId: number | null;
  projects: Project[];
  people: Person[];
  activeProjectId: number | null;
  activePersonId: number | null;
  activePriorityId: number | null;
  tasks: TaskItem[];
}

type Project = {
  id: number;
  title: string;
  icon: string;
  createdOn: Date;
  updatedOn: Date;
}

type Person = {
  id: number;
  name: string;
  icon: string;
}

type ModalOpen = '' | 'add-project' | 'add-person' | 'edit-project' | 'edit-person' | 'add-task' | 'edit-task' | 'app-info' | 'app-settings' | 'app-statistics';

type TaskType = {
  id: number;
  title: string;
  previous: number | null;
  forward: number | null;
}

type Priority = {
  id: number;
  title: string;
  className: string;
  icon: string;
}

type TaskItem = {
  id: number;
  title: string;
  desc?: string;
  assignee: Person['id'];
  status: TaskType['id'];
  createdOn: Date;
  updatedOn: Date;
  priority: Priority['id'];
  project: Project['id'];
}

type TaskActionItem = {
  key: string;
  icon: string;
}
