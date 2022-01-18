import Page from '@/components/Page';
import PageHead from '@/components/PageHead';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { useSnackbar } from 'notistack';
import { messages } from '@/utils/messages';
import { deleteOne, getMany } from '@/api/dataProvider';
import { generateErrorMsg } from '@/utils/messages/generateErrorMsg';

const defaultQuery = {
  q: ''
};

const paginationDefaultQuery = {
  page: 0,
  perPage: 5
};

const ListProvider = (props) => {
  const { resourceName, resource, component: Component, createRoute, editRoute, hasApiPagination } = props;
  const { enqueueSnackbar } = useSnackbar();

  const [queryOptions, setQueryOptions] = React.useState({
    ...defaultQuery,
    ...(hasApiPagination ? paginationDefaultQuery : {})
  });
  const [records, setRecords] = React.useState({ data: [], total: 0 });

  React.useEffect(() => {
    const fetchData = async () => {
      const { page, perPage, ...restQuery } = queryOptions;
      const query = {
        ...restQuery,
        ...(hasApiPagination ? { take: perPage, skip: page * perPage } : {})
      };
      try {
        const res = await getMany(resource, { query });
        if (hasApiPagination) {
          const { data = [], meta: { total = 0 } = {} } = res;
          setRecords({ data, total });
        } else {
          setRecords({ data: res, total: res.length });
        }
      } catch (err) {
        if (err.errors) {
          err.errors.forEach((err) => enqueueSnackbar(generateErrorMsg(err), { variant: 'error' }));
        } else {
          enqueueSnackbar(err.toString(), { variant: 'error' });
        }
      }
    };
    fetchData();
  }, [resource, queryOptions]);

  const deleteHandler = React.useCallback(async (id) => {
    try {
      await deleteOne(resource, id);
      setRecords(({ data, total }) => ({ data: data.filter((x) => x.id !== id), total: total - 1 }));
      enqueueSnackbar(messages.DeleteSuccess, { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.ToString(), { variant: 'error' });
      console.log(error);
    }
  }, []);

  return (
    <Page title={resourceName}>
      <PageHead h2={resourceName} h1="Browse">
        {createRoute && (
          <Button component={RouterLink} to={createRoute} color="primary" variant="contained">
            Create
          </Button>
        )}
      </PageHead>
      <Component
        {...records}
        editRoute={editRoute}
        setQueryOptions={setQueryOptions}
        queryOptions={queryOptions}
        onDeleteClick={deleteHandler}
      />
    </Page>
  );
};

ListProvider.propTypes = {
  resourceName: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
  createRoute: PropTypes.string,
  editRoute: PropTypes.string,
  component: PropTypes.any,
  hasApiPagination: PropTypes.bool
};

ListProvider.defaultProps = {
  component: null,
  createRoute: null,
  editRoute: null,
  hasApiPagination: true
};

export default ListProvider;
