import type { TaskId, UserId } from './branded';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};

export type TaskModel = {
  id: TaskId;
  label: string;
  done: boolean;
  created: number;
};

export type TrendModel = {
  isHashtag: boolean;
  word: string;
};

export type NewsModel = {
  createdAt: Date;
  name: string;
  title: string;
  subtitle: string;
  body: string;
  video: string;
};
