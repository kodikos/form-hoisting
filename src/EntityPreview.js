import React from 'react';
import styled from 'styled-components';

const EntityPreviewWrapper = styled.section`
  border: 2px solid green;
  width: 70vw;
  height: 70vh;
`;

export default function EntityPreview({ entity }) {
  const { movie, watched } = entity;

  return (
    <EntityPreviewWrapper>
      <h3 key="title">{movie}</h3>
      <div key="seen">{watched ? "Seen it": "Not watched yet"}</div>
    </EntityPreviewWrapper>
  );
}
