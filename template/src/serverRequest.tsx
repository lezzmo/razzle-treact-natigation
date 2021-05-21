/**
 * Generated with the Lezzmo Razzle Treact Natigation template
 * https://github.com/lezzmo/razzle-treact-natigation
 * 
 * This file will only be run by Razzle.
 *
 * @format
 */

import * as React from "react";
import { ServerContainer } from "@react-navigation/native";

/**
 * Small utility to wrap the App in a <ServerContainer /> to process URLs.
 * 
 * @see https://reactnavigation.org/docs/server-rendering
 */
export default function handleServerRequest(url: string, App: React.ReactElement) {
  return (
    <ServerContainer location={new URL(url, 'http://www.example.com')}>
      {App}
    </ServerContainer>
  );
};
