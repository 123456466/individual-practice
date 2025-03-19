import { createTodo, delTodo } from "@/api/todo-api";
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
