import React from 'react'
import { Link } from 'react-router'
import { TopNav } from '../components'

export default function(props) {
  return (
    <div className="app">
      <TopNav />
      <main>
        {props.children}
      </main>
    </div>
  );
}
