export default ({ env }) => ({
  upload: {
    config:
      env("NODE_ENV") === "production"
        ? {
            provider: "aws-s3", // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
            providerOptions: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_ACCESS_SECRET"),
              region: env("AWS_REGION"),
              params: {
                ACL: env("AWS_ACL", "public-read"), // 'private' if you want to make the uploaded files private
                Bucket: env("AWS_BUCKET"),
              },
            },
          }
        : {},
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      hooks: {
        preResponseTransform: (ctx) =>
          console.log("hello from the preResponseTransform hook!"),
        postResponseTransform: (ctx) =>
          console.log("hello from the postResponseTransform hook!"),
      },
      // contentTypeFilter: {
      //   mode: "allow",
      //   uids: {
      //     "api::article.article": true,
      //     "api::category.category": {
      //       GET: true,
      //     },
      //   },
      // },
      plugins: {
        ids: {
          slugify: true,
        },
      },
    },
  },
});
