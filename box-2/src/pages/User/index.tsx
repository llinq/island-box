import { useActionState, useOptimistic, useState } from "react";

import { updateName } from "services/user"
import { UserWrapper } from "./styles";
import { Button } from "components/Button";

export const UserPage = () => {
  const [optimisticName, setOptimisticName] = useOptimistic('Fulano');

  const [error, submitAction] = useActionState(
    // @ts-ignore
    async (previousState, formData) => {
      const name = formData.get('name');
      setOptimisticName(name);
      const error = await updateName(name);
      if (error) {
        return error;
      }
    },
    null
  );

  const [name, setName] = useState("");

  return (
    <UserWrapper>
      {error && <p>{error.toString()}</p>}
      {optimisticName && <h2>Olá {optimisticName}</h2>}
      <form action={submitAction}>
        <label>Escolha seu nick</label>
        <input name="name" value={name} onChange={(event) => setName(event.target.value)} />
        <Button type="submit">
          Entrar
        </Button>
      </form>
    </UserWrapper>
  );
};
