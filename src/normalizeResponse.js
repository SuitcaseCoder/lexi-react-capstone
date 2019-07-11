export const normalizeResponse = res => {
    if (!res.ok) {
      if (
          res.headers.has('content-type') &&
          res.headers.get('content-type').startsWith('application/json')
        ) {
          return res.json().then(err => Promise.reject({code: res.status, message: err.message}));
        }
        
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return res;
  };

