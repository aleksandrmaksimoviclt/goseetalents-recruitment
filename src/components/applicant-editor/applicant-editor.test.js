import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ApplicantEditor from './applicant-editor';
import applicants from '../../applicants.json';


describe("Home with applicants", () => {
  let props;
  let mountedEditor;
  const applicantID = applicants[0].id;
  const editor = () => {
    if (!mountedEditor) {
      mountedEditor = mount(
        <MemoryRouter initialEntries={[ `/applicants/${applicantID}`]}>
          <ApplicantEditor
            {...props}
          />
        </MemoryRouter>
      );
    }
    return mountedEditor;
  }

  beforeEach(() => {
    props = {
      applicant: applicants[0],
    };
    mountedEditor = undefined;
  });

  it("renders a <Applicant Editor />", () => {
    expect(editor().length).toBeGreaterThan(0);
  });

  it("renders a <ApplicantEditor /> text fields correctly", () => {
    const applicant = applicants[0];
    const nameField = editor().find('div.applicant-name-wrapper').first();
    const notesField = editor().find('div.applicant-notes-wrapper').first();
    const tipperField = editor().find('div.applicant-tipper-wrapper').first();
    const reminderField = editor().find('div.applicant-reminder-wrapper').first();
    const notinttechField = editor().find('div.applicant-notinttech-wrapper').first();
    const whynotintField = editor().find('div.applicant-whynotint-wrapper').first();

    expect(nameField.text()).toEqual(applicant.name);
    expect(notesField.text()).toEqual(applicant.notes);
    expect(tipperField.text()).toEqual(`Tipper${applicant.tipper}`);
    expect(reminderField.text()).toEqual(`Reminder${applicant.reminder}`);
    expect(notinttechField.text()).toEqual(`No interest in${applicant.notinttech}`);
    expect(whynotintField.text()).toEqual(`Reason${applicant.whynotint}`);

  });

});
