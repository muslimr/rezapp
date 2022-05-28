const t = (text) => {
    return text;
};

export default Strings = {
    appName: t('Rezidy'),

    placeholderEmailAddress: t('Email Address'),
    placeholderPassword: t('Password'),
    placeholderDescribeProblem: t('Describe Your Problem'),
    placeholderDescribeConcern: t('Describe Your Concern'),
    
    buttonLogIn: t('Log In'),
    buttonLogOut: t('Log Out'),
    buttonBack: t('Back'),
    buttonRegister: t('Register'),
    buttonOK: t('OK'),
    buttonAddImageUsingCamera: t('Add Image Using Camera'),
    buttonAddImageFromGallery: t('Add Image From Gallery'),
    buttonSubmit: t('Submit'),
    
    titleGreeting: t('Hello, %s!'),
    titleAnnouncements: t('Announcements'),
    titleHandymanRequestForm: t('Handyman Request Form'),
    titleComplaintSuggestionForm: t('Complaint/Suggestion Form'),
    titleDocumentsAndForms: t('Documents and Forms'),
    titleMembers: t('Members'),
    titleBuildingsAndUnits: t('Buildings and Units'),
    
    captionDontHaveAnAccount: t('Don\'t have an account?'),
    captionHereAreAllYourMemberships: t('Here are all of the accounts that you are a member of.\nSelect an account to proceed.'),
    captionPostedOn: t('Posted on %s'),
    captionShareholders: t('Shareholders'),
    captionTenants: t('Tenants'),
    captionShareholderOf: t('Shareholder of'),
    captionTenantOf: t('Tenant of'),
    captionVacant: t('Vacant'),

    actionViewAnnouncements: t('View Announcements'),
    actionRequestHandyman: t('Request Handyman'),
    actionFileComplaint: t('File a Complaint or Suggestion'),
    actionMakePayment: t('Make a Payment'),
    actionDiscussWithCommunity: t('Discuss with Community'),
    actionViewDocuments: t('View Documents and Forms'),
    actionViewMembers: t('View Members'),
    actionViewBuildingsAndUnits: t('View Buildings and Units'),

    errorNeedCameraPermission: t('Permission to access camera is required!'),
    errorNeedGalleryPermission: t('Permission to access gallery is required!'),
    errorNeedCTAInput: t('Please briefly describe your problem and/or add some images.'),

    messageFormSubmissionSuccessful: t('Form submission successful!'),
};
