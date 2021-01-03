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
  }
}

export default SystemRequirementsService;