import { Column } from 'src/components/Column';
import { Layout } from 'src/components/Layout';
import { Text } from 'src/components/Text';

export function InMaintenance() {
  return (
    <Layout bg="bgPrimary" justifyContent="center" alignItems="center" padding="lg">
      <Column gap="md" alignItems="center">
        <Text size="xxl" weight="bold" align="center">
          🔧
        </Text>
        <Text size="lg" weight="bold" align="center">
          Em manutenção
        </Text>
        <Text size="md" color="textSecondary" align="center">
          Estamos realizando melhorias no sistema. Tente novamente em alguns instantes.
        </Text>
      </Column>
    </Layout>
  );
}
