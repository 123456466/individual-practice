import { createTodo } from "@/api/todo-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useTodoMutation = () => {
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
