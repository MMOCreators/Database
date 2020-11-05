-- Setting Timezone
SET TIMEZONE='America/Los_Angeles';
-- Setting UUID Plugin to install
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Setting up Crypto Module
CREATE EXTENSION IF NOT EXISTS "pgcrypto";