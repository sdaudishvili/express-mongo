import React from 'react';
import { useSnackbar } from 'notistack';
import { Box, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { ListWrapper, SearchBar } from '@/components';
import { generateErrorMsg } from '@/utils/messages/generateErrorMsg';
import { deleteOne, getMany } from '@/api/dataProvider';
import { List } from './components';

const PER_PAGE = 7;

const Projects = () => {
  const [queryOptions, setQueryOptions] = React.useState({
    q: '',
    page: 0,
    perPage: PER_PAGE
  });

  const pageChangeHandler = (page, perPage) => setQueryOptions((opt) => ({ ...opt, page, perPage }));

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
        const res = await getMany('projects', { query });
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
  }, [queryOptions]);

  const deleteHandler = async (id) => {
    try {
      await deleteOne('projects', id);
      setProjects({ ...projects, data: projects.data.filter((x) => x.id !== id) });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <SearchBar onSearch={(q) => setQueryOptions({ ...queryOptions, q })} />
        <Button component={RouterLink} to="/create" variant="contained" color="primary" type="submit">
          Add project
        </Button>
      </Box>
      <ListWrapper
        page={queryOptions.page}
        mt={3}
        count={projects.total}
        title="All Items"
        onPageChange={pageChangeHandler}
        perPage={queryOptions.perPage}
      >
        <List items={projects.data} onDeleteClick={deleteHandler} />
      </ListWrapper>
    </>
  );
};

export default Projects;
