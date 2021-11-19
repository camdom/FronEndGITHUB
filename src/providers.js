import React from 'react';

import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";
import App from "./App"

// import { Container } from './styles';

const Providers = () => {
  return (
            <main>
                <GithubProvider>
                    <ResetCSS /> 
                    <App />
                </GithubProvider>
            </main>
         )
};

export default Providers;