import { useState, useEffect } from 'react';

import type { PermissionsState } from '@type/permissions';

const usePermissionsQuery = (): PermissionsState => {
  const [permissions, setPermissions] = useState<PermissionsState>({
    camera: undefined,
    mic: undefined,
  });

  useEffect(() => {
    const checkPermissions = async (): Promise<void> => {
      try {
        const camera = await navigator.permissions.query({
          name: 'camera' as PermissionName,
        });
        const mic = await navigator.permissions.query({
          name: 'microphone' as PermissionName,
        });
        setPermissions(p => ({
          ...p,
          camera: camera.state,
          mic: mic.state,
        }));

        camera.onchange = (): void => {
          setPermissions(p => ({
            ...p,
            camera: camera.state,
          }));
        };
        mic.onchange = (): void => {
          setPermissions(p => ({
            ...p,
            mic: mic.state,
          }));
        };
      } catch (error) {
        console.error('Failed to fetch permissions:', error);
      }
    };

    void checkPermissions();
  }, []);

  return permissions;
};

export default usePermissionsQuery;
