import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import EntityForm from './EntityForm';
import EntityPreview from './EntityPreview';

const FormWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
`;

export default ({ routedEntity, onSave }) => {
  const [ entity, setEntity ] = useState(routedEntity);

  useEffect(() => {
    setEntity(routedEntity);
  }, [ routedEntity]);

  return (
    <FormWrapper>
      <EntityForm
        routedEntity={routedEntity}
        onChange={(ent) => setEntity(ent)}
        onSave={(ent) => onSave && onSave(ent)}
      >
        Entity Form
      </EntityForm>
      <EntityPreview entity={entity}>
        Entity Preview
      </EntityPreview>
    </FormWrapper>
  );
}
