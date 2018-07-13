import React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// Use beforeRenderToHtml to extract the styles into the page meta
export const beforeRenderToComponent = (app, { meta }) => {
  meta.styleComponentsSheet = new ServerStyleSheet();
  return props => (
    <StyleSheetManager sheet={meta.styleComponentsSheet.instance}>
      <App {...props} />
    </StyleSheetManager>
  );
};

export const Head = ({ meta }) =>
  // The styles aren't fully extraced until the react component
  // has been rendered to an html string. So we wait until the head
  // to call the sheet's getStyleElement function
  // and then insert the tag into the Head
  meta.styleComponentsSheet.getStyleElement();
