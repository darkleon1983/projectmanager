import React from "react";
import cn from "classnames";
import { Container } from "../../components/shared/container";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { PlusButton } from "@/components/ui/plusButton";
import { ThreeDots } from "@/components/ui/threedots";

interface Props {
  className?: string;
}

export default function Market({ className }: Props) {
  const arrayOfProjects = [
    {
      id: 1,
      projectCode: "P 001",
      project: "Разработка ПД 100.01",
      stageOfWork: "Полевые работы",
      department: "Отдел 1",
      startedOn: "11.07.21",
      finishedOn: "17.07.21",
      status: "Утвержден",
    },
    {
      id: 2,
      projectCode: "P 002",
      project: "Разработка ПД 100.01",
      stageOfWork: "Полевые работы",
      department: "Отдел 1",
      startedOn: "11.07.21",
      finishedOn: "17.07.21",
      status: "Утвержден",
    },
    {
      id: 3,
      projectCode: "P 003",
      project: "Разработка ПД 100.01",
      stageOfWork: "Полевые работы",
      department: "Отдел 1",
      startedOn: "11.07.21",
      finishedOn: "17.07.21",
      status: "Утвержден",
    },
    {
      id: 4,
      projectCode: "P 004",
      project: "Разработка ПД 100.01",
      stageOfWork: "Полевые работы",
      department: "Отдел 1",
      startedOn: "11.07.21",
      finishedOn: "17.07.21",
      status: "Утвержден",
    },
    {
      id: 5,
      projectCode: "P 005",
      project: "Разработка ПД 100.01",
      stageOfWork: "Полевые работы",
      department: "Отдел 1",
      startedOn: "11.07.21",
      finishedOn: "17.07.21",
      status: "Утвержден",
    },
  ];
  return (
    <div className={cn("h-[100vh] bg-[#FBFCFD]")}>
      <div className={cn("flex")}>
        <PlusButton />
        <ThreeDots />
      </div>

      <Container className={cn("mx-5 my-[45] h-[90vh]", className)}>
        <div className={cn(" z-[99]")}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>№</TableHead>
                <TableHead>Код проекта</TableHead>
                <TableHead>Проект</TableHead>
                <TableHead>Этап работ</TableHead>
                <TableHead>Отдел</TableHead>
                <TableHead>Начало</TableHead>
                <TableHead>Завершение</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {arrayOfProjects.map((projectItem, id) => (
                <TableRow key={id}>
                  <TableCell>{projectItem.id}</TableCell>
                  <TableCell>{projectItem.projectCode}</TableCell>
                  <TableCell>{projectItem.project}</TableCell>
                  <TableCell>{projectItem.stageOfWork}</TableCell>
                  <TableCell>{projectItem.department}</TableCell>
                  <TableCell>{projectItem.startedOn}</TableCell>
                  <TableCell>{projectItem.finishedOn}</TableCell>
                  <TableCell>{projectItem.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
