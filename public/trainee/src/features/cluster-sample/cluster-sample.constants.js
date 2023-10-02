export const CLUSTER_CONST = getClusterUrl();

function getClusterUrl() {
  return {
    getTime: {
      url: 'app/myAppCluster/clusterApi',
      action: {name: 'getTime'}
    },
    setCluster: {
      url: 'app/myAppCluster/clusterApi',
      action: {name: 'setCluster'}
    }
  };
}
