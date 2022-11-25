import { Box, Button, Card, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react"

interface IUser {
  id: number,
  name: string,
  username: string,
  email: string
}

export function MainPage() {

  const [count, setCount] = useState(1);
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();
    setUsers([data])
  }

  useEffect(() => {
    fetchUsers();
  }, [count])

  const buttonClickHanlder = () => {
    setCount(count + 1)
  }

  if (!users.length) {
    return (
      <CircularProgress />
    )
  }

  return (
    <>
      <Card variant="outlined" sx={{ py: 2, px: 3 }}>
        <Box>
          <span>Counter : {count}</span>
        </Box>
        <Button variant="contained" onClick={buttonClickHanlder}>Increase</Button>
      </Card>

      {users.length > 0 && users.map((user) => {
        return (<p key={user.id}>{user.email} :: {count}</p>)
      })}
    </>
  )
}
