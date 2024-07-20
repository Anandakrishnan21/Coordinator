import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import Link from "next/link";

function QuestionList() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Test Name</TableHead>
            <TableHead>Subject Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Sample Test</TableCell>
            <TableCell>Sample</TableCell>
            <TableCell>5 min</TableCell>
            <TableCell>Incomplete</TableCell>
            <TableCell>
              <Button className="w-20 pb-1">
                <Link href="/home/dashboard/exam">Start</Link>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default QuestionList;
