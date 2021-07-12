module.exports = {
  PORT: process.env.PORT || 3000,
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL || 'mongodb://localhost:27017/feb-2021',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'Secret',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'REfresh_Secret',
  SYSTEM_EMAIL: process.env.SYSTEM_EMAIL || 'noreply@example.com',
  SYSTEM_EMAIL_PASSWORD: process.env.SYSTEM_EMAIL_PASSWORD || '12345',

  AUTHORIZATION: 'Authorization',

  PHOTO_MAX_SIZE: 2 * 1024 * 1024, // 2MB
  FILE_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  VIDEO_MAX_SIZE: 15 * 1024 * 1024, // 15MB

  PHOTOS_MIMETYPES: [
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/tiff',
    'image/webp'
  ],

  DOCS_MIMETYPES: [
    'application/msword', // DOC
    'application/pdf', // PDF
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLS
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOC 2007
  ],

  VIDEOS_MIMETYPES: [
    'video/mpeg',
    'video/mp4',
  ]
};
