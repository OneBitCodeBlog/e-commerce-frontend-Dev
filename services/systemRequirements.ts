import api from './api';

import SystemRequirement from '../dtos/SystemRequirement';
import Meta from '../dtos/Meta';

interface SystemRequirementIndexData {
  system_requirements: SystemRequirement[];
  meta: Meta;
};

const SystemRequirementsService = {
  index: (url: string) => {
    return api.get<SystemRequirementIndexData>(url).then(response => response.data)
  },

  create: (system_requirement: SystemRequirement) => {
    return api.post<void>('/admin/v1/system_requirements', { system_requirement: system_requirement} );
  },

  update: (system_requirement: SystemRequirement) => {
    return api.patch<void>(`/admin/v1/system_requirements/${system_requirement.id}`, { system_requirement: system_requirement });
  },

  delete: (id: number) => {
    return api.delete<void>(`/admin/v1/system_requirements/${id}`);
  }


}

export default SystemRequirementsService;