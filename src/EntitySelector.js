import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

export const EntitySelectorWrapper = styled.section`
  border: 2px solid red;
  width: 30vw;

  article.current {
    font-weight: bold;
  }
`;

export const EntityLink = ({ id, movie, watched, current }) => (
  <article className={current ? 'current' : ''}>
    <Link to={`/entity/${id}`}>{movie}</Link>
  </article>
);

const EntityList = ({ entities, current }) => entities.map(
  (entity) => (
    <EntityLink key={entity.id} {...entity} current={current===entity.id} />
  )
);

export default ({ entityData }) => {
  const match = useRouteMatch("/entity/:id");
  const id = match && match.params ? match.params.id : null;
  const idAsInt = id ? Number.parseInt(id) : false;
  return (
    <EntitySelectorWrapper>
      <EntityList entities={entityData} current={idAsInt} />
    </EntitySelectorWrapper>
  );
}
