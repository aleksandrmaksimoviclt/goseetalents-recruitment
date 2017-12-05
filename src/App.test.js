import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';


describe("App component", () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = shallow(
        <MemoryRouter initialEntries={[ '/' ]}>
          <App
            {...props}
          />
        </MemoryRouter>
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
