import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe("App component", () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = shallow(
          <App
            {...props}
          />
      );
    }
    return mountedApp;
  }

  beforeEach(() => {
    props = {};
    mountedApp = undefined;
  });

  it("renders an <App />", () => {
    const application = app()
    expect(application.length).toBeGreaterThan(0);
  });

});
