import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import BrightTitle from '../components/BrightTitle';
import ThemeImage from '../components/themeimage';
import styled from 'styled-components';
import GetRequest from '../components/GithubGrabber'

// Setup for Dark Mode Detection //

const IndexPage = () => (
  <Layout>
    <BrightTitle>Cole Fleming</BrightTitle>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>End</p>
    <GetRequest />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage;
