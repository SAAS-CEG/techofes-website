import React from 'react';

const ExternalRedirectComponent = () => {
    // Define the URL of the external website
    const externalURL = 'https://canvas-space-t77.vercel.app/';

    // Redirect to the external URL
    React.useEffect(() => {
        window.location.href = externalURL;
    }, []);

    // Render null (or a loading indicator) since the user will be redirected
    return null;
};

export default ExternalRedirectComponent;
