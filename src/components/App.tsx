import React from 'react';

import { TheHeader } from './TheHeader';
import { FilterPanel } from './FilterPanel'
import { JobList } from "./JobList"

function App() {
  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  )
}

export default App;
