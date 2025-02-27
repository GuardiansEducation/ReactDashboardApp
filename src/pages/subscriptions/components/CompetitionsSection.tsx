import { useCallback } from "react";
import { Table, Image, Group, Text, Center, Loader } from "@mantine/core";
import { SubscribedArea, SubscribedCompetition } from "@types";
import { useCompetitions, useSubscribedCompetition, useSubscribedCompetitions } from "@hooks";
import UnsubscribeButton from "./UnsubscribeButton";
import SubscribeButton from "./SubscribeButton";

export interface CompetitionsSectionProps {
  subscriptionId: number;
  subscribedArea?: SubscribedArea;
}

const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({
  subscriptionId,
  subscribedArea,
}) => {
  const { subscribedCompetitions } = useSubscribedCompetitions();
  const { loading, competitions } = useCompetitions(subscribedArea);
  const { subscribedCompetition, subscribe, unsubscribe } =
    useSubscribedCompetition(subscriptionId);

  const getSubscriptionButton = useCallback(
    (competition: SubscribedCompetition) => {
      if (!subscribedArea) {
        return;
      }

      if (competition.id === subscribedCompetition?.id) {
        return (
          <UnsubscribeButton
            onClick={() => {
              unsubscribe(competition);
            }}
          />
        );
      }

      return (
        <SubscribeButton
          disabled={subscribedCompetitions.some((x) => x.id === competition.id)}
          onClick={() => {
            subscribe(subscribedArea, competition);
          }}
        />
      );
    },
    [subscribedArea, subscribedCompetitions, subscribedCompetition, subscribe, unsubscribe]
  );

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Table>
      <Table.Tbody>
        {competitions.map((x) => (
          <Table.Tr key={x.id}>
            <Table.Td>
              <Group>
                <Image w={25} src={x.emblem} />
                <Text size="xs">{x.name}</Text>
              </Group>
            </Table.Td>
            <Table.Td ta="center" w="33%">
              {getSubscriptionButton(x)}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default CompetitionsSection;
