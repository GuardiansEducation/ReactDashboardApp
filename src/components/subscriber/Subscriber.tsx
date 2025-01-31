import React, { useEffect, useState } from "react";
import { Accordion, ComboboxItem, Group, Space } from "@mantine/core";
import { useSubscribedArea, useSubscribedCompetition } from "@hooks";
import { IconUsersGroup, IconTournament } from "@tabler/icons-react";
import { AccordionItemData } from "@types";
import { AreaSelect } from "../shared";
import CompetitionsSection from "./CompetitionsSection";
import TeamsSection from "./TeamsSection";

const teamItemId = "teams";
const competitionsItemId = "competitions";

export interface SubscriberProps {
  id: number;
  areas: ComboboxItem[];
  defaultArea?: Area;
}

const Subscriber: React.FC<SubscriberProps> = ({ id, areas }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { subscribedArea, setSubscribedArea } = useSubscribedArea(id);
  const { subscribedCompetition } = useSubscribedCompetition(id);

  const accordionItems: AccordionItemData[] = [
    {
      id: competitionsItemId,
      label: "Competitions",
      icon: <IconTournament />,
      disabled: subscribedArea == null,
      content: <CompetitionsSection subscriptionId={id} subscribedArea={subscribedArea} />,
    },
    {
      id: teamItemId,
      label: "Followed Teams",
      icon: <IconUsersGroup />,
      disabled: subscribedCompetition == null,
      content: <TeamsSection subscriptionId={id} />,
    },
  ];

  useEffect(() => {
    if (subscribedArea == null) {
      setSelectedItem(null);
      return;
    }

    if (subscribedCompetition == null) {
      setSelectedItem(competitionsItemId);
      return;
    }

    setSelectedItem(teamItemId);
  }, [subscribedArea, subscribedCompetition]);

  return (
    <div>
      <AreaSelect
        areas={areas}
        selectedValue={subscribedArea?.id}
        onAreaChanged={setSubscribedArea}
      />
      <Space h="xs" />
      <Accordion
        radius="md"
        chevronPosition="left"
        defaultValue="squad"
        variant="contained"
        value={selectedItem}
        onChange={setSelectedItem}
      >
        {accordionItems.map((item) => (
          <Accordion.Item value={item.id} key={item.id}>
            <Accordion.Control disabled={item.disabled}>
              <Group>
                {item.icon}
                {item.label}
              </Group>
            </Accordion.Control>
            <Accordion.Panel>{item.content}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Subscriber;
