import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import AdPage from './AdPage';


function AdsDetails(...props) {

  const [data] = useState(null);



  return (
    <Layout title="Details Ads" {...data}>
      <div className="details">

        <AdPage {...data} />
      </div>
    </Layout>

  );
}


export default AdsDetails;
