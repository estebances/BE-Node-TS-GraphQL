const version = 1;

export default {
  api: {
    version,
    path: `/v${version}`,
  },
  port: process.env.PORT || 8081,
};
