import App from './app';
import { StrictMode } from 'react';
import { Helmet } from 'react-helmet';
import { StaticRouter } from "react-router-dom";
import { renderToString } from 'react-dom/server';

export function render(_url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={_url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )

  const helmet = Helmet.renderStatic();
  const head = `${helmet.title.toString()} ${helmet.meta.toString()} ${helmet.link.toString()}`

  return { html, head }
}