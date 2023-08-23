import * as React from "react";
import WaitingList from "./WaitingList";
import Button from "./Button";

export default function WaitingListButton() {
  const [isWaitingListOpen, setIsWaitingListOpen] = React.useState(false);

  const toggleWaitingList = () => {
    setIsWaitingListOpen((v) => !v);
  };
  return (
    <>
      <Button variant="primary-dark" onClick={toggleWaitingList}>
        Join the waiting list
      </Button>
      <WaitingList isOpen={isWaitingListOpen} toggle={toggleWaitingList} />
    </>
  );
}
