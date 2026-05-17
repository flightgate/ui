import { createContext, useContext } from 'react';

export interface MaintenanceValue {
  loading: boolean;
  isMaintenanceActive: boolean;
}

export const MaintenanceContext = createContext<MaintenanceValue>({
  loading: false,
  isMaintenanceActive: false,
});

export const useMaintenance = () => useContext(MaintenanceContext);
