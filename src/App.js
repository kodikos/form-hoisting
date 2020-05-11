import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EntitySelector from './EntitySelector';
import EntityEditor from './EntityEditor';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const entityData = [
  { id: 1, movie: "Crocodile Dundee 2", watched: true },
  { id: 2, movie: "Crouching Tiger, Hidden Dragon", watched: true },
  { id: 3, movie: "Team America", watched: false },
];


function App() {
  const [ entities, setEntities ] = useState(entityData);

  const getEntity = (idToGet) => entities.find(({ id }) => id===Number.parseInt(idToGet));

  const updateEntity = (updEntity) => {
    const index = entities.findIndex(({ id }) => id===updEntity.id);
    if (index < 0) return;

    entities.splice(index, 1, updEntity);

    //  Has to be a new object for React to spot the state change
    setEntities([...entities]);
  }

  return (
    <Router>
      <AppWrapper>
        <EntitySelector entityData={entities} />
        <Switch>
          <Route
            path="/entity/:id"
            render={({ match }) => (
              <EntityEditor
                routedEntity={getEntity(match.params.id)}
                onSave={updateEntity}
              />
            )}
          />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
