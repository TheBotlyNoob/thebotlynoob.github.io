import React from "react";
import { Router } from "@reach/router";
import { Redirect } from '../components';

export default function S() {
  return (
    <>
    <Router basepath='/'>
      <Redirect path='/s/:redirectName'/>
    </Router>
    </>
  )
}
