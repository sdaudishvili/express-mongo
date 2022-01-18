import Dashboard from '@/layouts/Dashboard';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ListProvider, CreateProvider, EditProvider } from '..';
import { StaticEditProvider } from '../StaticEditProvider';

const Resource = (props) => {
  const { name, resource, list, create, edit, staticEdit, hasApiPagination } = props;

  const baseRoute = `/${resource}`;
  const createRoute = `${baseRoute}/create`;
  const editRoute = `${baseRoute}/:id`;

  return (
    <Switch>
      {create && (
        <Route
          exact
          path={createRoute}
          render={() => (
            <Dashboard>
              <CreateProvider resourceName={name} resource={resource} component={create} baseRoute={baseRoute} />
            </Dashboard>
          )}
        />
      )}
      {edit && (
        <Route
          exact
          path={editRoute}
          render={() => (
            <Dashboard>
              <EditProvider resourceName={name} resource={resource} component={edit} baseRoute={baseRoute} />
            </Dashboard>
          )}
        />
      )}
      {list && (
        <Route
          exact
          path={baseRoute}
          render={() => (
            <Dashboard>
              <ListProvider
                hasApiPagination={hasApiPagination}
                resourceName={name}
                resource={resource}
                component={list}
                createRoute={create && createRoute}
                editRoute={edit && baseRoute}
              />
            </Dashboard>
          )}
        />
      )}
      {staticEdit && (
        <Route
          exact
          path={baseRoute}
          render={() => (
            <Dashboard>
              <StaticEditProvider component={staticEdit} resourceName={name} resource={resource} />
            </Dashboard>
          )}
        />
      )}
    </Switch>
  );
};

Resource.propTypes = {
  name: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
  list: PropTypes.any,
  create: PropTypes.any,
  edit: PropTypes.any,
  staticEdit: PropTypes.any,
  hasApiPagination: PropTypes.bool
};

Resource.defaultProps = {
  list: null,
  create: null,
  edit: null,
  staticEdit: null,
  hasApiPagination: true
};

export default Resource;
