import * as AV from 'leancloud-storage';

export const app = {
  appId: 'GaPY9YzdWc2mGC8sbILPllo1-MdYXbMMI',
  appKey: 'rnhji5i4M5RfypvWfxye68oc',
  serverURL: 'https://gapy9yzd.api.lncldglobal.com',
};

export default function initLeanCloud() {
  AV.init({
    appId: app.appId,
    appKey: app.appKey,
    serverURL: app.serverURL,
  });
}
