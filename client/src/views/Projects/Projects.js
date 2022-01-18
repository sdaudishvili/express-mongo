import React from 'react';
import { ListWrapper, SearchBar } from '@/components';
import { generateErrorMsg } from '@/utils/messages/generateErrorMsg';
import { getMany } from '@/api/dataProvider';
import { useSnackbar } from 'notistack';
import { Box, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { List } from './components';

const Projects = () => {
  const [queryOptions] = React.useState({
    q: '',
    page: 0,
    perPage: 5
  });

  const [projects, setProjects] = React.useState({ data: [], total: 0 });

  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const fetchData = async () => {
      const { page, perPage, ...restQuery } = queryOptions;
      const query = {
        ...restQuery,
        take: perPage,
        skip: page * perPage
      };
      try {
        const res = await getMany('/projects', { query });
        const { data = [], meta: { total = 0 } = {} } = res;
        setProjects({ data, total });
      } catch (err) {
        if (err.errors) {
          err.errors.forEach((err) => enqueueSnackbar(generateErrorMsg(err), { variant: 'error' }));
        } else {
          enqueueSnackbar(err.toString(), { variant: 'error' });
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <SearchBar onSearch={() => {}} />
        <Button component={RouterLink} to="/create" variant="contained" color="primary" type="submit">
          Add project
        </Button>
      </Box>
      <ListWrapper page={1} mt={3} count={4} title="All Items" onPageChange={() => {}} perPage={5}>
        <List
          items={projects.data}
          onDeleteClick={() => {}}
          editRoute={() => {}}
          displayKeys={[
            { prop: 'title' },
            { prop: 'index' },
            { prop: 'slug' },
            { prop: 'type' },
            { prop: 'published' }
          ]}
        />
      </ListWrapper>
    </>
  );
};

export default Projects;
