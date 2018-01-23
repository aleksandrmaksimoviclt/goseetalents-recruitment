import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Home from './home';
import List from '../list/list';
import applicants from '../../applicants.json';


describe("Home with applicants", () => {
  let props;
  let mountedHome;
  const home = () => {
    if (!mountedHome) {
      mountedHome = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
          <Home
            applicants={applicants}
            {...props}
          />
        </MemoryRouter>
      );
    }
    return mountedHome;
  }

  beforeEach(() => {
    props = {
      applicants: applicants,
    };
    mountedHome = undefined;
  });

  it("renders a <List />", () => {
    const list = home().find(List);
    expect(list.length).toBeGreaterThan(0);
  });

  it("renders 7 applicants inside <List /> from mocked json", () => {
    const list = home().find(List);
    const applicantsItems = list.find('div.list-item-preview');
    expect(applicantsItems).toHaveLength(7);
  });

  it("renders first applicant name correctly inside <List /> from mocked json", () => {
    const list = home().find(List);
    const firstApplicantName = list.find('div.list-item-name').first();
    const name = applicants[0].name;
    expect(firstApplicantName.text()).toEqual(name);
  });

  it("renders applicant note correctly inside <List /> from mocked json", () => {
    const list = home().find(List);
    const firstApplicantNote = list.find('div.list-item-notes').first();
    const notes = applicants[0].notes;
    expect(firstApplicantNote.text()).toEqual(notes);
  });

  it("sets correct href to applicant editor <List /> from mocked json", () => {
    const list = home().find(List);
    const applicantURL = `/applicants/${applicants[0]._id}`;
    const firstApplicantHref = list.find({ href: applicantURL });
    expect(firstApplicantHref).toHaveLength(1);
  });

});

describe("Home without applicants", () => {
  let props;
  let mountedHome;
  const home = () => {
    if (!mountedHome) {
      mountedHome = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
          <Home
            {...props}
          />
        </MemoryRouter>
      );
    }
    return mountedHome;
  }

  beforeEach(() => {
    props = {};
    mountedHome = undefined;
  });

  it("does not render applicant list without applicant data", () => {
    const list = home().find(List);
    const applicantsItems = list.find('div.list-item-preview');
    expect(applicantsItems).toHaveLength(0);
  });
});
