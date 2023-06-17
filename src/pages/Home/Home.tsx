import { People } from '@/data';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';

export type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const pageSize = 5;
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      rows={People}
      columns={columns}
      initialState={{
        pagination: { paginationModel: { pageSize } }
      }}
      getRowId={(row: any) => row.id}
      autoHeight
      disableColumnSelector
      disableRowSelectionOnClick
    />
  );
};

export default Home;
