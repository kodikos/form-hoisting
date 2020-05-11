import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EntityFormWrapper = styled.form`
  border: 2px solid orange;
  width: 70vw;
  height: 30vh;
`;

export default function EntityForm({ routedEntity }) {
  const [ entity, setEntity ] = useState(routedEntity);

  //  This listens for changes in the selected entity to switch to it
  useEffect(() => {
    setEntity(routedEntity);
  }, [ routedEntity]);

  //  This provides the basic "managed" component implementation
  function onFieldChange({ target }) {
    if (!target) return;
    const { type, name, checked, value } = target;
    const actualValue = type === 'checkbox' ? checked : value;

    setEntity({ ...entity, [name]: actualValue });
  }

  return (
    <EntityFormWrapper onSubmit={(e) => e.preventDefault()}>
      <div key="movie">
        <label htmlFor="movie">Movie Title</label>
        <input
          type="text"
          name="movie"
          value={entity.movie}
          onChange={onFieldChange}
        />
      </div>
      <div key="watched">
        <label htmlFor="watched">Have I seen this?</label>
        <input
          type="checkbox"
          name="watched"
          value={entity.watched}
          checked={entity.watched===true}
          onChange={onFieldChange}
        />
      </div>
      <div key="actions">
        <input
          type="submit"
          value="Save"
        />
      </div>
    </EntityFormWrapper>
  );
}
