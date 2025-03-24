"use client";

import { useId } from "react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useTodoFilterStore } from "@/store/useTodoFilterStore";

const TodoFilterSwitch = () => {
  const switchId = useId();
  const { filter, setFilter } = useTodoFilterStore();
  const onCheckedChange = (checked: boolean) => {
    setFilter(checked ? "completed" : "all");
  };

  return (
    <div className="flex items-center space-x-2 m-2">
      <Switch
        id={switchId}
        checked={filter === "completed"}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={switchId}>완료</Label>
    </div>
  );
};

export default TodoFilterSwitch;
