import { useEffect, useState } from "react";
import { Accordion, ComboboxItem, Group, Space } from "@mantine/core";
import { IconUsersGroup, IconTournament } from "@tabler/icons-react";
import { useSubscribedArea, useSubscribedCompetition } from "@hooks";
import { AccordionItemData } from "@types";
import { AreaSelect } from "@components";
import CompetitionsSection from "./CompetitionsSection";
import TeamsSection from "./TeamsSection";

const teamItemId = "teams";
const competitionsItemId = "competitions";

export interface SubscriberProps {
  id: number;
  areas: ComboboxItem[];
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
      disabled: !subscribedArea,
      content: <CompetitionsSection subscriptionId={id} subscribedArea={subscribedArea} />,
    },
    {
      id: teamItemId,
      label: "Followed Teams",
      icon: <IconUsersGroup />,
      disabled: !subscribedCompetition,
      content: <TeamsSection subscriptionId={id} />,
    },
  ];

  useEffect(() => {
    if (!subscribedArea) {
      setSelectedItem(null);
      return;
    }

    if (!subscribedCompetition) {
      setSelectedItem(competitionsItemId);
      return;
    }

    setSelectedItem(teamItemId);
  }, [subscribedArea, subscribedCompetition]);

  return (
    <>
      <AreaSelect
        areas={areas}
        selectedValue={subscribedArea?.id}
        onAreaChanged={setSubscribedArea}
      />
      <Space h="xs" />
      <Accordion
        chevronPosition="left"
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
    </>
  );
};

export default Subscriber;
