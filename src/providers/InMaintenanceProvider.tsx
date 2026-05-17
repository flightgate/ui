import type { PropsWithChildren } from 'react';
import { Loading } from 'src/components/Loading';
import { useMaintenance } from 'src/contexts';
import { InMaintenance } from 'src/pages';

const InMaintenanceProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { loading, isMaintenanceActive } = useMaintenance();

  if (loading) {
    return <Loading size="lg" fullscreen />;
  }

  if (isMaintenanceActive) {
    return <InMaintenance />;
  }

  return children;
};

export { InMaintenanceProvider };
