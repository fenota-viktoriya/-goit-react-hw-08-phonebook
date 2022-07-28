import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { authOperation, authSelectors } from 'redux/auth';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <Stack direction="row" spacing={2} sx={{ padding: '8px' }}>
      <Avatar alt="user">{name[0]}</Avatar>
      <Button
        variant="outlined"
        sx={{ my: 1.8, mx: 1.5 }}
        onClick={() => dispatch(authOperation.logOut())}
      >
        Log out
      </Button>
    </Stack>
  );
}
