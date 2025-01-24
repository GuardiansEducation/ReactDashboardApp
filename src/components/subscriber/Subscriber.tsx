import React, { useCallback } from "react";
import { AreaSelector } from "../shared";
import { useAppDispatch, useAppSelector } from "@hooks";
import { ComboboxItem } from "@mantine/core";

export interface SubscriberProps {
  id: number;
  areas: ComboboxItem[];
}

const Subscriber: React.FC<SubscriberProps> = ({ id, areas }) => {
  const dispatch = useAppDispatch();
  const subscription = useAppSelector((state) =>
    state.subscription.subscriptions.find((x) => x.id === id)
  );

  var handleAreaChanged = useCallback(async (areaId: string | null) => {
    if (areaId == null) {
      return;
    }

    console.log(areaId);
  }, []);

  return (
    <>
      <div>
        <AreaSelector areas={areas} onAreaChanged={handleAreaChanged}></AreaSelector>
      </div>
      <div>Table</div>
    </>
  );
};

export default Subscriber;
