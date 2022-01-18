import { AgenciesList, AgencyCreate } from '@/views/Agencies';
import { Resource } from '..';

const resources = [
  {
    name: 'Agencies',
    resource: 'agencies',
    list: AgenciesList,
    create: AgencyCreate,
    edit: AgencyCreate
  }
];

const ResourcesProvider = () => {
  return resources && resources.map((resource) => <Resource key={resource.name} {...resource} />);
};

export default ResourcesProvider;
