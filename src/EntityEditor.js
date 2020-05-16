import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import EntityForm from './EntityForm';
import EntityPreview from './EntityPreview';

const FormWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
`;

export default function EntityEditor({ routedEntity, onSave }) {
  const [ entity, setEntity ] = useState(routedEntity);

  useEffect(() => {
    setEntity(routedEntity);
  }, [ routedEntity]);

  function onFormChange(field, value) {
    setEntity({ ...entity, [field]: value });
  }

  function onFormSave() {
    onSave && onSave(entity);
  }

  return (
    <FormWrapper>
      <EntityForm
        routedEntity={entity}
        onChange={onFormChange}
        onSave={onFormSave}
      >
        Entity Form
      </EntityForm>
      <EntityPreview entity={entity}>
        Entity Preview
      </EntityPreview>
    </FormWrapper>
  );
}
