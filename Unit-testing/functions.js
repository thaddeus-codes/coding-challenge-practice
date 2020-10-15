function isAlive(ping) {
  try {
    let pingOneSuccess = ping();
    let pingTwoSuccess = ping();
    let pingThreeSuccess = ping();

      if(pingOneSuccess && pingTwoSuccess && pingThreeSuccess) {
        return true;
      }
  } catch (error) {
    return new Error('ping throw exception')
  }

  return false;
}


module.exports = isAlive;
