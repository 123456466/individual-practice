import { getTodoItem } from "@/api/todo-api";
import TodoItem from "@/components/todo/TodoItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const todoItem = await getTodoItem(id);

  return (
    <section>
      <div className="container mx-auto p-6">
        <TodoItem todo={todoItem} />
        <Link href="/">
          {" "}
          <Button className="w-full">돌아가기</Button>
        </Link>
      </div>
    </section>
  );
};

export default DetailPage;
