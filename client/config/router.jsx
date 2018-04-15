import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import TopicList from '../views/topic-list'

import TopicDetail from '../views/topic-detail'

export default () => [
  <Route key="/" path="/" exact render={() => <Redirect to="/list" />} />,
  <Route key="/list" path="/list" component={TopicList} />,
  <Route key="/detail" path="/detail" component={TopicDetail} />,
]
