import TodoDetail from "@/components/todo/TodoDetail";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;

  return (
    <section>
      <div className="container mx-auto p-6">
        <TodoDetail id={id} />
        <Link href="/">
          {" "}
          <Button className="w-full">돌아가기</Button>
        </Link>
      </div>
    </section>
  );
};

export default DetailPage;
