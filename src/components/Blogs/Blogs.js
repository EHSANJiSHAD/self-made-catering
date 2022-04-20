import React from 'react';

const Blogs = () => {
    return (
        <div>

            <div className='nav-bar-bg mt-5 text-secondary'>
                <h3 >Difference between authorization and authentication</h3>
                <p>Authentication ensures that the user is.The user may see it and edit it in some ways.Passwords, biometric data, and other information given or entered by the user are used for authentication. <br />
                    On the other hand Authorization determines what resources a user can access.And it is controlled by the organization's settings, which it implements and maintains.
                </p>
            </div>

            <div className='nav-bar-bg mt-5 text-secondary'>
                <h3>What other services does firebase provide other than authentication</h3>
                <p> Without authentication firebase also provides Cloud Storage
                    Cloud Firestore,
                    Firebase Realtime Database,
                    Firebase Hosting,
                    Google APIs that are not Firebase-specific APIs,
                    Project integrations like BigQuery,
                    Compute Engine resources like Cloud Functions.</p>
            </div>



        </div>
    );
};

export default Blogs;