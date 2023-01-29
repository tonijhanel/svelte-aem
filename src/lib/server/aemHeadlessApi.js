import 'dotenv/config'
import AEMHeadless from '@adobe/aem-headless-client-nodejs';
const {
    NODE_APP_HOST_URI,
    NODE_APP_GRAPHQL_ENDPOINT,
    NODE_APP_USE_PROXY,
    NODE_APP_AUTH_METHOD,
    NODE_APP_DEV_TOKEN,
    NODE_APP_BASIC_AUTH_USER,
    NODE_APP_BASIC_AUTH_PASS,
  } = process.env;

  const setAuthorization = () => {
    if (NODE_APP_AUTH_METHOD === "basic") {
      return [NODE_APP_BASIC_AUTH_USER, NODE_APP_BASIC_AUTH_PASS];
    } else if (NODE_APP_AUTH_METHOD === "dev-token") {
      return NODE_APP_DEV_TOKEN;
    } else {
      // no authentication set
      return;
    }
  };


export const aemHeadlessClient = new AEMHeadless({
    serviceURL: NODE_APP_HOST_URI,
    endpoint: '',           // Avoid non-persisted queries
    auth: setAuthorization() ,  // accessToken only set if the 2nd command line parameter is set
  
});

