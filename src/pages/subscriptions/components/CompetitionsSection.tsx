import { useCallback } from "react";
import { Table, Image, Button, Group, Text, Center, Loader } from "@mantine/core";
import { SubscribedArea, SubscribedCompetition } from "@types";
import { useCompetitions, useSubscribedCompetition } from "@hooks";

export interface CompetitionsSectionProps {
  subscriptionId: number;
  subscribedArea?: SubscribedArea;
}

const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({
  subscriptionId,
  subscribedArea,
}) => {
  const { loading, competitions } = useCompetitions(subscribedArea);
  const { subscribedCompetition, subscribe, unsubscribe } = useSubscribedCompetition(subscriptionId);

  const getSubscriptionButton = useCallback(
    (competition: SubscribedCompetition) => {
      if (subscribedArea == null) {
        return;
      }

      if (competition.id === subscribedCompetition?.id) {
        return (
          <Button
            color="red"
            size="compact-xs"
            variant="outline"
            onClick={() => {
              unsubscribe(competition);
            }}
          >
            Unsubscribe
          </Button>
        );
      }

      return (
        <Button
          size="compact-xs"
          variant="gradient"
          onClick={() => {
            subscribe(subscribedArea, competition);
          }}
        >
          Subscribe
        </Button>
      );
    },
    [subscribedArea, subscribedCompetition, subscribe, unsubscribe]
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
            <Table.Td>{getSubscriptionButton(x)}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default CompetitionsSection;
