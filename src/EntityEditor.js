import React from 'react';
import styled from 'styled-components';

import EntityForm from './EntityForm';
import EntityPreview from './EntityPreview';

const FormWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
`;

export default ({ routedEntity }) => (
  <FormWrapper>
    <EntityForm routedEntity={routedEntity}>
      Entity Form
    </EntityForm>
    <EntityPreview entity={routedEntity}>
      Entity Preview
    </EntityPreview>
  </FormWrapper>
);
