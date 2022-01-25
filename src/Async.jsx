import { useEffect, useState } from "react";

function getUser() {
  return Promise.resolve({ id: "1", name: "Robin" });
}

export default function Async() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);


  return <div>{user ? <p>Signed in as {user.name}</p> : null}</div>;
}
