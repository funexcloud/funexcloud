/** 프로덕션 canonical origin */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://funexcloud.com"
).replace(/\/$/, "");
