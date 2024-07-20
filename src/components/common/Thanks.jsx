import React from "react";
import { Button } from "../ui/button";

function Thanks() {
  return (
    <div className="h-48 flex flex-col justify-center items-center gap-2">
      <p className="font-semibold text-2xl flex justify-center items-center">
        Thank you for the Assessment :)
      </p>
      <Button>
        <Link href="/home/dashboard">Done</Link>
      </Button>
    </div>
  );
}

export default Thanks;
