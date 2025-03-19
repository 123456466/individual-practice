import { completedTodo, createTodo, delTodo } from "@/api/todo-api";
import { Todo } from "@/type/todo-type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useDelTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: delTodo,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

interface completedTodoMutationParams {
  id: Todo["id"];
  completed: Todo["completed"];
}

export const useCompletedTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }: completedTodoMutationParams) =>
      completedTodo(id, completed),
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
